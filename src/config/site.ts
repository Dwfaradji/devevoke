import type { Metadata } from 'next';

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://www.devevoke.com';

export const SITE_URL = rawSiteUrl.replace(/\/+$/, '');
export const SITE_NAME = 'DevEvoke';
export const DEFAULT_OG_IMAGE = '/icon.png';

export function buildAbsoluteUrl(path = '/'): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalizedPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

export interface PageMetadataOptions {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  robots?: Metadata['robots'];
  isHome?: boolean;
}

/**
 * Construit les métadonnées Next.js complètes d'une page avec canonical,
 * OpenGraph et Twitter Cards alignés sur son title, sa description et son chemin réel.
 */
export function createPageMetadata({
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  imageWidth = 800,
  imageHeight = 600,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  robots,
  isHome = false,
}: PageMetadataOptions): Metadata {
  const url = buildAbsoluteUrl(path);
  const imageUrl = buildAbsoluteUrl(image);
  const fullTitle = isHome ? title : `${title} | ${SITE_NAME}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    ...(robots ? { robots } : {}),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
      images: [
        {
          url: imageUrl,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt ?? fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
