'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blogData from '@/data/dataBlog';
import type { BlogFilterCategory } from '@/data/typeFile';
import {
  BLOG_FILTER_CATEGORIES,
  getBlogFilterCategory,
  getBlogSlug,
  sortBlogsByDateDesc,
} from '@/utils/blog';
import myPhoto from '@/images/about/photo-profil-688.webp';

type FilterOption = 'Tous' | BlogFilterCategory;

const ARTICLES_PER_PAGE = 6;

const BlogsContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>('Tous');
  const [currentPage, setCurrentPage] = useState(1);

  const sortedPosts = useMemo(() => sortBlogsByDateDesc(blogData), []);

  const categoryCounts = useMemo(() => {
    const counts: Record<FilterOption, number> = {
      Tous: Math.max(sortedPosts.length - 1, 0),
      'Médico-social': 0,
      'Sécurité & RGPD': 0,
      'Applications mobiles': 0,
      Autres: 0,
    };

    for (const post of sortedPosts) {
      const cat = getBlogFilterCategory(post);
      counts[cat] += 1;
    }
    return counts;
  }, [sortedPosts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'Tous') {
      // L'article le plus récent est déjà mis en avant dans BlogHeader
      return sortedPosts.slice(1);
    }
    return sortedPosts.filter((post) => getBlogFilterCategory(post) === selectedCategory);
  }, [selectedCategory, sortedPosts]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / ARTICLES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedPosts = useMemo(() => {
    const start = (safePage - 1) * ARTICLES_PER_PAGE;
    return filteredPosts.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredPosts, safePage]);

  const handleSelectCategory = (category: FilterOption) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filterTabs: FilterOption[] = ['Tous', ...BLOG_FILTER_CATEGORIES];

  return (
    <section className="py-8" aria-label="Liste des articles et guides">
      {/* Filtres par catégorie */}
      <div
        role="tablist"
        aria-label="Filtrer les articles par catégorie"
        className="mb-10 flex flex-wrap items-center gap-2"
      >
        {filterTabs.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelectCategory(category)}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                isActive
                  ? 'border-primary-500/40 bg-primary-500/20 text-white shadow-sm'
                  : 'border-white/10 bg-white/[0.03] text-neutral-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white'
              }`}
            >
              <span>{category}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] ${
                  isActive ? 'bg-primary-500/30 text-primary-200' : 'bg-white/5 text-neutral-400'
                }`}
              >
                {categoryCounts[category]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grille des articles */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((blog, i) => {
          const filterCat = getBlogFilterCategory(blog);
          return (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link href={`/blog/${getBlogSlug(blog)}`} className="group block h-full">
                <article className="glass hover:glass-strong flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      width={500}
                      height={300}
                      src={blog.img}
                      alt={blog.alt}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent" />
                    <span className="border-white/15 absolute top-4 left-4 rounded-full border bg-neutral-950/75 px-3 py-1 text-[11px] font-semibold text-neutral-200 backdrop-blur-md">
                      {filterCat}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-grow flex-col p-6 md:p-8">
                    <div className="text-primary-400 mb-3 flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
                      <span>
                        {new Date(blog.date).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="text-neutral-400 normal-case">{blog.readingTime} min</span>
                    </div>
                    <h2 className="group-hover:text-primary-300 mb-3 line-clamp-2 text-xl leading-tight font-bold text-white transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-muted-light line-clamp-3 flex-grow text-sm leading-relaxed">
                      {blog.descriptionShort}
                    </p>

                    {/* Auteur */}
                    <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                      <Image
                        width={32}
                        height={32}
                        className="size-8 rounded-full object-cover ring-2 ring-white/5"
                        src={myPhoto.src}
                        alt="Boucif Faradji"
                        sizes="32px"
                      />
                      <span className="text-xs font-medium text-white">Boucif Faradji</span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="Pagination des articles"
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
            aria-label="Page précédente"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-neutral-200 transition-all hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
          >
            <ChevronLeft className="size-4" />
            <span>Précédent</span>
          </button>

          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => {
            const isCurrent = page === safePage;
            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                aria-current={isCurrent ? 'page' : undefined}
                aria-label={`Page ${page}`}
                className={`inline-flex size-9 cursor-pointer items-center justify-center rounded-xl border text-xs font-semibold transition-all sm:size-10 sm:text-sm ${
                  isCurrent
                    ? 'border-primary-500/40 bg-primary-500/20 text-white'
                    : 'border-white/10 bg-white/[0.03] text-neutral-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            aria-label="Page suivante"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-neutral-200 transition-all hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
          >
            <span>Suivant</span>
            <ChevronRight className="size-4" />
          </button>
        </nav>
      )}
    </section>
  );
};

export default BlogsContainer;
