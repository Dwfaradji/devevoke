import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import type { MetadataRoute } from 'next';
import blogData from '@/data/dataBlog';
import { SITE_URL } from '@/config/site';
import { getBlogSlug } from '@/utils/blog';

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

const ROUTE_CONFIG: Record<string, { changeFrequency: ChangeFrequency; priority: number }> = {
  '/': { changeFrequency: 'weekly', priority: 1.0 },
  '/agence-digitale-medico-social': { changeFrequency: 'weekly', priority: 0.95 },
  '/solutions-medico-social': { changeFrequency: 'weekly', priority: 0.95 },
  '/developpement-logiciel-medico-social': { changeFrequency: 'weekly', priority: 0.95 },
  '/medico-social': { changeFrequency: 'weekly', priority: 0.95 },
  '/solutions-medico-social/associations': { changeFrequency: 'monthly', priority: 0.85 },
  '/solutions-medico-social/ime': { changeFrequency: 'monthly', priority: 0.85 },
  '/solutions-medico-social/sessad': { changeFrequency: 'monthly', priority: 0.85 },
  '/solutions-medico-social/esat': { changeFrequency: 'monthly', priority: 0.85 },
  '/solutions-medico-social/ehpad': { changeFrequency: 'monthly', priority: 0.85 },
  '/developpement-web': { changeFrequency: 'weekly', priority: 0.9 },
  '/application-mobile': { changeFrequency: 'weekly', priority: 0.9 },
  '/developpement-saas': { changeFrequency: 'weekly', priority: 0.9 },
  '/solutions-metier': { changeFrequency: 'weekly', priority: 0.9 },
  '/automatisation': { changeFrequency: 'weekly', priority: 0.9 },
  '/securite-et-conformite': { changeFrequency: 'monthly', priority: 0.85 },
  '/realisations': { changeFrequency: 'monthly', priority: 0.9 },
  '/realisations/floticar': { changeFrequency: 'monthly', priority: 0.8 },
  '/logiciel-gestion-vehicules-medico-social': { changeFrequency: 'monthly', priority: 0.8 },
  '/diagnostic-numerique': { changeFrequency: 'weekly', priority: 0.9 },
  '/services': { changeFrequency: 'monthly', priority: 0.9 },
  '/templates': { changeFrequency: 'monthly', priority: 0.8 },
  '/a-propos': { changeFrequency: 'monthly', priority: 0.85 },
  '/contact': { changeFrequency: 'weekly', priority: 0.85 },
  '/tarifs': { changeFrequency: 'monthly', priority: 0.8 },
  '/blog': { changeFrequency: 'weekly', priority: 0.85 },
  '/foire-aux-questions': { changeFrequency: 'monthly', priority: 0.7 },
  '/info-procedure': { changeFrequency: 'yearly', priority: 0.65 },
  '/politique-confidentialite': { changeFrequency: 'yearly', priority: 0.4 },
  '/cgv': { changeFrequency: 'yearly', priority: 0.4 },
  '/mentions-legal': { changeFrequency: 'yearly', priority: 0.4 },
};

function getRedirectedPaths(): Set<string> {
  const redirected = new Set<string>();
  try {
    const configPath = path.join(/*turbopackIgnore: true*/ process.cwd(), 'next.config.mjs');
    const content = fs.readFileSync(/*turbopackIgnore: true*/ configPath, 'utf8');
    const matches = content.matchAll(/source:\s*['"]([^'"]+)['"]/g);
    for (const match of matches) {
      const src = match[1];
      if (!src.includes(':') && !src.includes('*')) {
        redirected.add(src);
      }
    }
  } catch {
    // Fallback silencieux si next.config.mjs n'est pas lisible
  }
  return redirected;
}

function hasNoIndexDirective(dirPath: string): boolean {
  for (const filename of ['layout.tsx', 'page.tsx']) {
    const filePath = path.join(/*turbopackIgnore: true*/ dirPath, filename);
    if (!fs.existsSync(/*turbopackIgnore: true*/ filePath)) continue;
    const content = fs.readFileSync(/*turbopackIgnore: true*/ filePath, 'utf8');
    if (/robots\s*:\s*\{[\s\S]*?index\s*:\s*false/.test(content)) {
      return true;
    }
  }
  return false;
}

function getLastModifiedFromGitOrFs(filePaths: string[]): Date {
  const existingFiles = filePaths.filter((filePath) =>
    fs.existsSync(/*turbopackIgnore: true*/ filePath)
  );
  if (existingFiles.length === 0) {
    return new Date('2026-01-01');
  }

  try {
    const relativePaths = existingFiles.map((p) => path.relative(process.cwd(), p));
    const output = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', ...relativePaths],
      { cwd: process.cwd(), encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
    if (output) {
      const parsed = new Date(output);
      if (!Number.isNaN(parsed.getTime())) {
        return parsed;
      }
    }
  } catch {
    // Fallback vers mtime si git n'est pas disponible au build
  }

  let latestMs = 0;
  for (const filePath of existingFiles) {
    const mtimeMs = fs.statSync(/*turbopackIgnore: true*/ filePath).mtimeMs;
    if (mtimeMs > latestMs) {
      latestMs = mtimeMs;
    }
  }
  return latestMs > 0 ? new Date(latestMs) : new Date('2026-01-01');
}

function collectPublicPageRoutes(
  dirPath: string,
  segments: string[],
  redirectedPaths: Set<string>,
  results: Array<{ route: string; files: string[] }>
): void {
  const entries = fs.readdirSync(/*turbopackIgnore: true*/ dirPath, { withFileTypes: true });
  const hasPage = entries.some((entry) => entry.isFile() && entry.name === 'page.tsx');

  if (hasPage) {
    const cleanSegments = segments.filter((seg) => !(seg.startsWith('(') && seg.endsWith(')')));
    const route = cleanSegments.length === 0 ? '/' : `/${cleanSegments.join('/')}`;
    const isDynamic = cleanSegments.some((seg) => seg.includes('[') || seg.includes(']'));
    const isApi = cleanSegments[0] === 'api';

    if (!isDynamic && !isApi && !redirectedPaths.has(route) && !hasNoIndexDirective(dirPath)) {
      const files = ['page.tsx', 'layout.tsx']
        .map((name) => path.join(/*turbopackIgnore: true*/ dirPath, name))
        .filter((file) => fs.existsSync(/*turbopackIgnore: true*/ file));
      results.push({ route, files });
    }
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'api' || entry.name.startsWith('_')) continue;
    if (entry.name.includes('[') || entry.name.includes(']')) continue;
    collectPublicPageRoutes(
      path.join(/*turbopackIgnore: true*/ dirPath, entry.name),
      [...segments, entry.name],
      redirectedPaths,
      results
    );
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(/*turbopackIgnore: true*/ process.cwd(), 'src', 'app');
  const redirectedPaths = getRedirectedPaths();
  const discovered: Array<{ route: string; files: string[] }> = [];

  collectPublicPageRoutes(appDir, [], redirectedPaths, discovered);

  const latestBlogTimestamp = blogData.reduce((max, blog) => {
    const time = new Date(blog.updatedAt || blog.date).getTime();
    return Number.isNaN(time) ? max : Math.max(max, time);
  }, 0);

  const staticRoutes: MetadataRoute.Sitemap = discovered
    .sort((a, b) => {
      const prioA = ROUTE_CONFIG[a.route]?.priority ?? 0.7;
      const prioB = ROUTE_CONFIG[b.route]?.priority ?? 0.7;
      if (prioB !== prioA) return prioB - prioA;
      return a.route.localeCompare(b.route);
    })
    .map(({ route, files }) => {
      const config = ROUTE_CONFIG[route] ?? { changeFrequency: 'monthly', priority: 0.7 };
      let lastModified = getLastModifiedFromGitOrFs(files);

      if (route === '/blog' && latestBlogTimestamp > lastModified.getTime()) {
        lastModified = new Date(latestBlogTimestamp);
      }

      return {
        url: route === '/' ? SITE_URL : `${SITE_URL}${route}`,
        lastModified,
        changeFrequency: config.changeFrequency,
        priority: config.priority,
      };
    });

  const blogRoutes: MetadataRoute.Sitemap = blogData.map((blog) => ({
    url: `${SITE_URL}/blog/${getBlogSlug(blog)}`,
    lastModified: new Date(blog.updatedAt || blog.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
