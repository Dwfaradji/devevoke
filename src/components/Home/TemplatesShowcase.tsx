import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, LayoutGrid, CheckCircle2 } from 'lucide-react';

import medicalImg from '@/images/templates/etablissement-medico-social-1920.webp';
import medical2Img from '@/images/templates/cabinet-dentaire-orthodontie-1920.webp';
import realEstateImg from '@/images/templates/ehpad-residence-seniors-1920.webp';

interface FeaturedTemplate {
  title: string;
  category: string;
  description: string;
  image: any;
  href: string;
  features: string[];
}

const featuredTemplates: FeaturedTemplate[] = [
  {
    title: 'Portail Établissement Médico-Social',
    category: 'Médico-Social & Santé',
    description:
      'Vitrine accessible et rassurante pensée pour IME, SESSAD et associations gestionnaires. Parcours usagers fluide et conformité RGPD.',
    image: medicalImg,
    href: '/templates',
    features: ['Présentation des pôles', 'Formulaire sécurisé', 'Accessibilité RGAA'],
  },
  {
    title: 'Cabinet Médical & Centre de Soins',
    category: 'Santé & Praticiens',
    description:
      'Design épuré et moderne pour cliniques et cabinets de spécialistes. Mise en avant de l’équipe soignante et prise de contact rapide.',
    image: medical2Img,
    href: '/templates',
    features: ['Espace praticiens', 'Prise de rendez-vous', 'Score SEO 95+'],
  },
  {
    title: 'EHPAD & Résidence Autonomie',
    category: 'Médico-Social & EHPAD',
    description:
      'Portail chaleureux pour valoriser le cadre de vie, les activités quotidiennes et rassurer les familles avec transparence.',
    image: realEstateImg,
    href: '/templates',
    features: ['Visite des espaces', 'Livret d’accueil digital', 'Contact direct direction'],
  },
];

export default function TemplatesShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-neutral-900/40 py-12 sm:py-20 lg:py-24">
      {/* Background glow accents */}
      <div className="bg-primary-600/10 pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full blur-[140px]" />
      <div className="bg-secondary-600/10 pointer-events-none absolute right-1/4 bottom-0 h-80 w-80 rounded-full blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <span className="section-label">
              <LayoutGrid className="text-primary-400 size-3.5" />
              Accélérateurs de Déploiement
            </span>
            <h2 className="text-2xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Des socles &amp; templates pré-configurés pour{' '}
              <span className="text-highlight">démarrer rapidement</span>
            </h2>
            <p className="text-sm leading-relaxed text-neutral-300 sm:text-lg">
              Ne repartez pas d’une page blanche. Découvrez nos modèles spécialisés, prêts à être
              personnalisés à 100% selon votre charte graphique et vos objectifs.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/templates"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              <span>Voir toute la galerie (16 socles)</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Template Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredTemplates.map((template, idx) => (
            <Link
              key={idx}
              href={template.href}
              className="card-modern group hover:border-primary-500/40 flex flex-col justify-between overflow-hidden p-0 transition-all duration-300"
            >
              <div>
                {/* Thumbnail image with hover effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <Image
                    src={template.image}
                    alt={template.title}
                    width={720}
                    height={450}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                      {template.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="bg-primary-500 rounded-full px-5 py-2 text-xs font-semibold text-white shadow-lg">
                      Voir la démo
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-3 p-5 sm:p-6">
                  <h3 className="group-hover:text-primary-300 text-xl font-bold text-white transition-colors">
                    {template.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-neutral-400">
                    {template.description}
                  </p>

                  <div className="space-y-1.5 border-t border-white/5 pt-3">
                    {template.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 sm:p-6">
                <div className="text-primary-400 group-hover:text-primary-300 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-semibold">
                  <span>Explorer ce modèle</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-center sm:mt-12 sm:flex-row sm:p-6 sm:text-left">
          <div className="flex items-center gap-3">
            <div className="bg-primary-500/10 text-primary-400 hidden shrink-0 rounded-xl p-2.5 sm:block">
              <Sparkles className="size-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Chaque socle est une fondation technique hautement optimisée
              </div>
              <div className="text-xs text-neutral-400">
                Développés sous Next.js et TypeScript, sans CMS lourd. Personnalisation complète à
                vos couleurs et hébergement sécurisé en France.
              </div>
            </div>
          </div>
          <Link
            href="/templates"
            className="bg-primary-500 hover:bg-primary-600 shadow-primary-500/20 flex min-h-[44px] w-full shrink-0 items-center justify-center rounded-xl px-5 py-3 text-center text-xs font-semibold text-white shadow-md transition-all sm:w-auto"
          >
            Explorer les 16 modèles →
          </Link>
        </div>
      </div>
    </section>
  );
}
