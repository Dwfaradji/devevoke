import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, Code2 } from 'lucide-react';
import { projects } from '@/data/data';
import ProjectCard from '@/components/Projects/projectCard';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function RealisationsPage() {
  return (
    <div className="selection:bg-primary-500/30 selection:text-primary-200 min-h-screen bg-neutral-950 text-white">
      <Breadcrumb items={[{ label: 'Réalisations' }]} backHref="/" backLabel="Retour à l'accueil" />
      {/* Header Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pt-10 pb-12 sm:pt-16 sm:pb-20">
        <div className="from-primary-900/20 pointer-events-none absolute inset-0 bg-radial via-neutral-950/80 to-neutral-950" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="space-y-5 text-center lg:col-span-7 lg:text-left">
              <div className="bg-primary-500/10 border-primary-500/20 text-primary-300 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium sm:text-sm">
                <Sparkles className="size-4" />
                <span>Savoir-Faire & Preuves Concrètes</span>
              </div>

              <h1 className="text-2xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Projets & réalisations d’ingénierie{' '}
                <span className="text-highlight">numérique sur-mesure</span>
              </h1>

              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-lg lg:mx-0">
                Découvrez nos développements logiciels, applications mobiles et plateformes SaaS.
                Des outils pensés pour les réalités opérationnelles des entreprises, des
                organisations et des structures médico-sociales.
              </p>

              <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4 lg:justify-start">
                <Link
                  href="/contact"
                  className="from-primary-500 to-secondary-500 shadow-primary-500/20 flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-95"
                >
                  <span>Parler de votre projet</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className="flex min-h-[44px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center text-sm font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white"
                >
                  Explorer nos services
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="relative lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-900 shadow-2xl">
                <Image
                  src="/images/realisations/realisations-ingenierie-logicielle.webp"
                  alt="Équipe d’ingénieurs logiciels collaborant sur la conception d’une application sur mesure"
                  width={960}
                  height={540}
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-[280px] w-full object-cover object-center brightness-[0.97] transition-transform duration-700 group-hover:scale-102 sm:h-[380px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-xl border border-white/15 bg-neutral-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <Code2 className="text-primary-400 size-3.5 shrink-0" />
                  <span>Ingénierie Full-Stack & Architecture</span>
                </div>

                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-xs text-neutral-200">
                  <span className="text-xs font-semibold">Conception & Code Sur-Mesure</span>
                  <span className="bg-primary-500/20 text-primary-300 border-primary-500/30 rounded-full border px-2.5 py-0.5 font-mono text-[11px]">
                    Next.js • TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Études de cas & réalisations logicielles
          </h2>
          <p className="text-sm text-neutral-400">
            Chaque organisation a ses flux de travail spécifiques. Voici des exemples
            d’architectures et d’outils sur-mesure conçus pour digitaliser les métiers et simplifier
            le quotidien des équipes.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} {...project} index={idx} />
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900 py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Vous avez un projet logiciel, une application ou un besoin métier ?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-neutral-400 sm:text-base">
            Nous concevons des solutions logicielles et web sur-mesure pour répondre aux besoins
            opérationnels uniques des organisations. Parlons-en ensemble.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="from-primary-500 to-secondary-500 shadow-primary-500/25 flex items-center gap-2 rounded-xl bg-gradient-to-r px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-95"
            >
              <span>Discuter de votre projet avec le fondateur</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white"
            >
              Découvrir nos expertises
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
