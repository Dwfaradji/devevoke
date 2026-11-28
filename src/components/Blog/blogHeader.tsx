import React from 'react';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import Link from 'next/link';
import { getBlogSlug, sortBlogsByDateDesc } from '@/utils/blog';
import myPhoto from '@/images/about/photo-profil-688.webp';

const BlogHeader = () => {
  const sortedPosts = sortBlogsByDateDesc(blogData);
  const latestPost = sortedPosts[0];
  const formattedDate = new Date(latestPost.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${getBlogSlug(latestPost)}`}>
      <article className="group glass hover:glass-strong relative overflow-hidden rounded-3xl border border-white/5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 overflow-hidden md:h-full md:min-h-[400px]">
            <Image
              src={latestPost.img}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt={latestPost.alt}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-black/40 md:block" />
          </div>

          {/* Contenu */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="bg-primary-500/10 border-primary-500/20 text-primary-400 mb-6 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              <span className="bg-primary-400 size-1.5 animate-pulse rounded-full"></span>À la une
            </span>

            <h2 className="group-hover:text-primary-400 text-3xl leading-tight font-bold text-white transition-colors lg:text-4xl">
              {latestPost.title}
            </h2>

            <p className="text-muted mt-6 line-clamp-3 text-base leading-relaxed">
              {latestPost.descriptionShort}
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <Image
                  src={myPhoto}
                  alt="Auteur Boucif Faradji"
                  className="size-10 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">Boucif Faradji</p>
                  <p className="text-muted text-xs">{formattedDate}</p>
                </div>
              </div>

              <span className="text-primary-400 group-hover:text-primary-300 inline-flex items-center gap-2 text-sm font-medium transition-colors">
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
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogHeader;
