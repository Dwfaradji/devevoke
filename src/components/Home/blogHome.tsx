import React from 'react';
import BlogHeader from '../Blog/blogHeader';
import Link from 'next/link';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import { getBlogSlug, sortBlogsByDateDesc } from '@/utils/blog';

const BlogHome = () => {
  // Trier les articles par date et prendre les 3 suivants (après le 1er qui est dans BlogHeader)
  const sortedPosts = sortBlogsByDateDesc(blogData);
  const nextPosts = sortedPosts.slice(1, 4);

  return (
    <section id="section6" className="relative py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-label mb-4">Actualités &amp; Insights</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Derniers <span className="text-highlight">articles</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            Tous les articles
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Article principal (À la une) */}
        <div className="mb-12">
          <BlogHeader />
        </div>

        {/* 3 articles suivants */}
        <div className="grid gap-8 md:grid-cols-3">
          {nextPosts.map((post) => {
            const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            return (
              <div key={post.id}>
                <Link href={`/blog/${getBlogSlug(post)}`}>
                  <article className="group glass hover:glass-strong flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
                    {/* Image Container */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-grow flex-col p-6">
                      <div className="text-muted mb-3 flex items-center justify-between text-xs">
                        <span>{formattedDate}</span>
                        <span>{post.readingTime} min</span>
                      </div>

                      <h3 className="group-hover:text-primary-400 mb-3 line-clamp-2 text-xl font-bold text-white transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted mb-6 line-clamp-2 flex-grow text-sm leading-relaxed">
                        {post.descriptionShort}
                      </p>

                      <div className="text-primary-400 group-hover:text-primary-300 mt-auto flex items-center gap-2 border-t border-white/5 pt-4 text-sm font-medium transition-colors">
                        Lire l'article
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
