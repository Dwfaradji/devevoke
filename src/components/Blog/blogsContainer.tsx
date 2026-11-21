'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import blogData from '@/data/dataBlog';
import Link from 'next/link';
import { slugify } from '@/utils/slugify';
import myPhoto from '@/images/about/photo-profil-688.webp';

const BlogsContainer = () => {
  const sortedPosts = [...blogData].sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const posts = sortedPosts.slice(1);

  return (
    <section className="py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((blog: any, i: number) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <Link href={`/blog/${slugify(blog.title)}`} className="group block h-full">
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
                </div>

                {/* Contenu */}
                <div className="flex flex-grow flex-col p-6 md:p-8">
                  <p className="text-primary-400 mb-3 text-xs font-semibold tracking-wider uppercase">
                    {new Date(blog.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
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
        ))}
      </div>
    </section>
  );
};

export default BlogsContainer;
