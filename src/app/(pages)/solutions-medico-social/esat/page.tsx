import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Users, ArrowRight, Workflow, FileSpreadsheet } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';
import { SITE_URL, createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/solutions-medico-social/esat',
  title: 'Logiciels & Outils Numériques pour ESAT',
  description:
    'Solutions numériques sur-mesure pour ESAT : gestion commerciale d’ateliers, suivi du projet d’accompagnement des travailleurs et pilotage d’activité.',
  imageAlt: 'Logiciels pour ESAT',
});

export default function SolutionsEsatPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques pour ESAT',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: SITE_URL,
    },
    description:
      'Logiciels de gestion d’ateliers de production et de suivi médico-social pour les Établissements et Services d’Aide par le Travail (ESAT).',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="overflow-hidden pb-24">
        <Breadcrumb
          items={[
            { label: 'Pôle Médico-Social', href: '/medico-social' },
            { label: 'Solutions', href: '/solutions-medico-social' },
            { label: 'ESAT' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <div className="glass border-primary-500/30 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Briefcase className="text-primary-400 size-4" />
            <span className="text-xs font-medium tracking-wide text-gray-200 uppercase sm:text-sm">
              Travail Protégé & Inclusion Professionnelle
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-6xl">
            Logiciels et solutions numériques pour les{' '}
            <span className="text-gradient drop-shadow-sm">
              Établissements & Services d'Aide par le Travail (ESAT)
            </span>
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Conciliez la gestion de vos activités de production (espaces verts, conditionnement,
            restauration, menuiserie) avec le suivi médico-social rigoureux du projet personnalisé
            des travailleurs handicapés.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Discuter d’un projet pour votre ESAT
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/solutions-metier" className="btn-outline w-full text-base sm:w-auto">
              Logiciels métier sur-mesure
            </Link>
          </div>
        </header>

        {/* DOUBLE ENJEU ESAT */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="section-label">Double Vocation ESAT</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  La synergie entre mission sociale et efficacité économique
                </h2>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  L'ESAT est une structure unique : elle doit à la fois délivrer des prestations de
                  qualité professionnelle à ses clients donneurs d'ordres (entreprises,
                  collectivités) et assurer un accompagnement médico-social et éducatif bienveillant
                  à ses usagers.
                </p>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  DevEvoke développe des logiciels qui relient ces deux mondes : suivi de la
                  facturation et des plannings d'ateliers d'un côté, et dématérialisation du{' '}
                  <strong>Projet Personnalisé</strong> et des compétences acquises de l'autre.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image
                    src="/images/home/esat_workshop_activity.webp"
                    alt="Atelier de production ESAT encadré par des moniteurs d'atelier"
                    width={800}
                    height={520}
                    className="h-[360px] w-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
                  />
                  <div className="from-bg absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-85" />
                  <div className="absolute right-6 bottom-6 left-6">
                    <span className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
                      Pilotage d'Ateliers & Insertion
                    </span>
                    <p className="text-sm font-medium text-white sm:text-base">
                      Planification adaptée du travail, respect du rythme de chacun et suivi des
                      compétences acquises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="bg-primary-500/10 text-primary-400 mb-4 flex size-12 items-center justify-center rounded-xl">
                  <Workflow className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">Gestion de production & devis</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Édition rapide des devis et factures pour vos clients B2B, suivi de l'avancement
                  des commandes et planification des équipes.
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="bg-secondary-500/10 text-secondary-400 mb-4 flex size-12 items-center justify-center rounded-xl">
                  <Users className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Projet personnalisé & compétences
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Grille de progression adaptée, valorisation des acquis professionnels et
                  traçabilité pour les bilans annuels d'orientation (MDPH).
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FileSpreadsheet className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Reporting & Rémunération (RSG)
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Calcul automatisé des éléments variables, suivi des heures d'atelier et export
                  direct vers votre logiciel de paie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20">
          <div className="glass-strong border-primary-500/30 mx-auto max-w-4xl rounded-3xl border p-10 text-center sm:p-14">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Modernisez les outils de gestion de votre ESAT
            </h2>
            <p className="text-muted mx-auto mb-8 max-w-2xl text-base sm:text-lg">
              Nos consultants analysent vos processus d'atelier et conçoivent la solution logicielle
              adaptée à vos moniteurs et travailleurs.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Demander un devis pour votre ESAT
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/medico-social" className="btn-outline text-base">
                Voir le Pôle Médico-Social
              </Link>
            </div>

            {/* Maillage inter-établissements */}
            <div className="text-muted mt-12 border-t border-white/10 pt-8 text-xs sm:text-sm">
              <span className="mb-3 block font-semibold tracking-wider text-white/70 uppercase">
                Découvrez également nos solutions pour :
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <Link
                  href="/solutions-medico-social/ime"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  IME
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/sessad"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  SESSAD
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/ehpad"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  EHPAD
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/associations"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  Associations gestionnaires
                </Link>
                <span>•</span>
                <Link
                  href="/developpement-logiciel-medico-social"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  Logiciel sur-mesure
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
