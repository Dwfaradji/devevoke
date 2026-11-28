'use client';
import React, { useMemo } from 'react';
import { Fade } from '@/components/ui/Fade';
import Link from 'next/link';
import Image from 'next/image';
import { BlogProps } from '@/data/typeFile';
import ButtonNetwork from '@/components/ui/ButtonNetwork/buttonNetwork';
import myPhoto from '@/images/about/photo-profil-1920.webp';
import Breadcrumb from '@/components/ui/Breadcrumb';
import blogData from '@/data/dataBlog';
import {
  getBlogFilterCategory,
  getBlogSlug,
  getRelatedBlogs,
} from '@/utils/blog';
import { ArrowLeft, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface PropsBlogPage {
  blog: BlogProps;
}

const renderTextWithLinks = (text: string): React.ReactNode => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  if (!linkRegex.test(text)) {
    return text;
  }
  linkRegex.lastIndex = 0;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    if (href.startsWith('/')) {
      parts.push(
        <Link
          key={`link-${match.index}`}
          href={href}
          className="text-primary-400 hover:text-primary-300 font-medium underline underline-offset-4 transition-colors"
        >
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={`link-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 hover:text-primary-300 font-medium underline underline-offset-4 transition-colors"
        >
          {label}
        </a>
      );
    }
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const BlogPage = ({ blog }: PropsBlogPage) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const currentIndex = useMemo(() => {
    return blogData.findIndex((b) => b.id === blog.id || b.title === blog.title);
  }, [blog]);

  const prevBlog = currentIndex > 0 ? blogData[currentIndex - 1] : null;
  const nextBlog =
    currentIndex >= 0 && currentIndex < blogData.length - 1 ? blogData[currentIndex + 1] : null;
  const relatedBlogs = useMemo(() => getRelatedBlogs(blog, blogData, 3), [blog]);
  const formattedDate = useMemo(() => {
    return blog
      ? new Date(blog.date).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';
  }, [blog]);

  return (
    <article className="relative min-h-screen pb-24">
      {/* Barre de progression de lecture */}
      <motion.div
        style={{ scaleX }}
        className="from-primary-400 to-secondary-500 fixed top-[72px] right-0 left-0 z-40 h-1 origin-left bg-gradient-to-r"
      />

      {/* Fil d'Ariane & Retour rapide au sommet */}
      <div className="mx-auto max-w-7xl px-4 pt-2 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ label: 'Ressources & Guides', href: '/blog' }, { label: blog.title }]}
          backLink={{ href: '/blog', label: 'Retour aux articles' }}
        />
      </div>

      {/* Hero de l'article */}
      <header className="relative mt-2 flex h-[60vh] max-h-[600px] min-h-[400px] w-full flex-col justify-end">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            priority
            src={blog.img}
            alt={blog.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent" />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="bg-primary-500/20 border-primary-500/30 text-primary-300 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                DevEvoke
              </span>
              <span className="text-muted-light text-sm font-medium">{formattedDate}</span>
            </div>

            <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            {/* Auteur & Partage */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
              <div className="flex items-center gap-4">
                <Image
                  priority
                  width={48}
                  height={48}
                  src={myPhoto}
                  alt="Boucif Faradji"
                  className="size-12 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <h3 className="font-semibold text-white">Boucif Faradji</h3>
                  <p className="text-muted-light text-sm">Fondateur DevEvoke</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-light hidden text-sm sm:block">
                  Partager cet article
                </span>
                <ButtonNetwork url={blog} />
              </div>
            </div>
          </Fade>
        </div>
      </header>

      {/* Corps de l'article */}
      <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-primary-200 mb-12 text-xl leading-relaxed font-medium md:text-2xl">
          {blog.descriptionShort}
        </p>

        <div className="space-y-12">
          {blog.descriptionLong?.map((val, i) => (
            <Fade direction="up" fraction={0.2} triggerOnce key={i}>
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="border-primary-500 mb-6 border-l-4 pl-4 text-2xl font-bold text-white sm:text-3xl">
                  {val.title}
                </h2>
                <p className="text-muted text-lg leading-relaxed">
                  {renderTextWithLinks(val.text)}
                </p>
              </div>
            </Fade>
          ))}
        </div>

        {/* Lien contextuel vers la page de service la plus pertinente */}
        {blog.relatedService && (
          <aside
            aria-label="Service DevEvoke associé"
            className="glass border-primary-500/20 mt-16 rounded-2xl border p-6 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div className="space-y-2">
                <span className="text-primary-400 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase">
                  <Layers className="size-3.5" />
                  Expertise associée
                </span>
                <h2 className="text-xl font-bold text-white">{blog.relatedService.label}</h2>
                <p className="text-muted text-sm leading-relaxed">
                  {blog.relatedService.description}
                </p>
              </div>
              <Link
                href={blog.relatedService.href}
                className="btn-primary shrink-0 self-start sm:self-center"
              >
                <span>Découvrir l&apos;expertise</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </aside>
        )}

        {/* Articles liés */}
        {relatedBlogs.length > 0 && (
          <section aria-labelledby="related-articles-heading" className="mt-16">
            <h2
              id="related-articles-heading"
              className="mb-6 text-xl font-bold text-white sm:text-2xl"
            >
              Articles liés
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${getBlogSlug(rel)}`}
                  className="group glass hover:border-primary-500/30 flex flex-col justify-between rounded-2xl border border-white/5 p-5 transition-all hover:bg-white/5"
                >
                  <div>
                    <div className="mb-2 flex items-center justify-between text-[11px] font-semibold">
                      <span className="text-primary-400">{getBlogFilterCategory(rel)}</span>
                      <span className="text-neutral-400">{rel.readingTime} min</span>
                    </div>
                    <h3 className="group-hover:text-primary-300 mb-2 line-clamp-2 text-sm font-bold text-white transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-muted line-clamp-2 text-xs leading-relaxed">
                      {rel.descriptionShort}
                    </p>
                  </div>
                  <span className="text-primary-400 mt-4 inline-flex items-center gap-1 text-xs font-medium">
                    Lire l&apos;article
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Navigation Inter-Articles (Précédent / Suivant) */}
        <nav
          aria-label="Navigation entre articles"
          className="mt-16 space-y-6 border-t border-white/10 pt-10"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {prevBlog ? (
              <Link
                href={`/blog/${getBlogSlug(prevBlog)}`}
                className="group glass hover:border-primary-500/30 flex flex-col justify-between rounded-2xl border border-white/5 p-5 transition-all hover:bg-white/5"
              >
                <div className="text-primary-400 mb-2 flex items-center gap-1.5 text-xs font-semibold">
                  <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>Article précédent</span>
                </div>
                <h3 className="group-hover:text-primary-300 line-clamp-2 text-sm font-bold text-white transition-colors sm:text-base">
                  {prevBlog.title}
                </h3>
              </Link>
            ) : (
              <div className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-xs text-neutral-500 opacity-40">
                Premier article du blog
              </div>
            )}

            {nextBlog ? (
              <Link
                href={`/blog/${getBlogSlug(nextBlog)}`}
                className="group glass hover:border-primary-500/30 flex flex-col justify-between rounded-2xl border border-white/5 p-5 text-right transition-all hover:bg-white/5"
              >
                <div className="text-primary-400 mb-2 flex items-center justify-end gap-1.5 text-xs font-semibold">
                  <span>Article suivant</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="group-hover:text-primary-300 line-clamp-2 text-sm font-bold text-white transition-colors sm:text-base">
                  {nextBlog.title}
                </h3>
              </Link>
            ) : (
              <div className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-xs text-neutral-500 opacity-40">
                Dernier article publié
              </div>
            )}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              href="/blog"
              className="glass hover:border-primary-500/40 group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              <BookOpen className="text-primary-400 size-4" />
              <span>Consulter tous les articles du blog</span>
            </Link>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default BlogPage;
