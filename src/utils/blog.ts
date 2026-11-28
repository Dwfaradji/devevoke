import type { BlogFilterCategory, BlogProps } from '@/data/typeFile';
import { slugify } from '@/utils/slugify';

export const BLOG_FILTER_CATEGORIES: readonly BlogFilterCategory[] = [
  'Médico-social',
  'Sécurité & RGPD',
  'Applications mobiles',
  'Autres',
] as const;

export function getBlogSlug(blog: Pick<BlogProps, 'title' | 'slug'>): string {
  return blog.slug || slugify(blog.title);
}

export function getBlogFilterCategory(blog: BlogProps): BlogFilterCategory {
  if (blog.filterCategory) {
    return blog.filterCategory;
  }

  const normalized = blog.category.toLowerCase();
  if (normalized.includes('sécurité') || normalized.includes('securite') || normalized.includes('rgpd')) {
    return 'Sécurité & RGPD';
  }
  if (normalized.includes('mobile')) {
    return 'Applications mobiles';
  }
  if (
    normalized.includes('médico-social') ||
    normalized.includes('medico-social') ||
    normalized.includes('ergonomie') ||
    normalized.includes('automatisation') ||
    normalized.includes('parcours')
  ) {
    return 'Médico-social';
  }
  return 'Autres';
}

export function sortBlogsByDateDesc(blogs: BlogProps[]): BlogProps[] {
  return [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRelatedBlogs(
  currentBlog: BlogProps,
  allBlogs: BlogProps[],
  limit = 3
): BlogProps[] {
  const currentCat = getBlogFilterCategory(currentBlog);
  const candidates = sortBlogsByDateDesc(allBlogs).filter((b) => b.id !== currentBlog.id);

  const sameCategory = candidates.filter((b) => getBlogFilterCategory(b) === currentCat);
  const others = candidates.filter((b) => getBlogFilterCategory(b) !== currentCat);

  return [...sameCategory, ...others].slice(0, limit);
}
