import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Calendar, ArrowRight, HeartHandshake, FileText } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export const metadata: Metadata = {
  title: 'Logiciels Sur-Mesure & Solutions Numériques pour IME et DITEP',
  description:
    'Solutions digitales conçues pour les Instituts Médico-Éducatifs (IME) et DITEP : suivi éducatif et thérapeutique, coordination pluridisciplinaire, portail familles, logistique des transports et conformité RGPD.',
  keywords: [
    'logiciel IME',
    'solution numérique IME',
    'logiciel DITEP',
    'institut médico éducatif logiciel',
    'suivi éducatif IME',
    'application médico-sociale enfance',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-medico-social/ime',
  },
  openGraph: {
    title: 'Logiciels Sur-Mesure & Solutions Numériques pour IME et DITEP | DevEvoke',
    description:
      'Facilitez le quotidien des éducateurs, rééducateurs et directions d’IME et DITEP avec des outils numériques pensés pour l’accompagnement des enfants et adolescents.',
    url: 'https://www.devevoke.com/solutions-medico-social/ime',
    siteName: 'DevEvoke',
    images: [
      { url: '/icon.png', width: 800, height: 600, alt: 'Solutions logicielles pour IME et DITEP' },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsImePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques pour Instituts Médico-Éducatifs (IME) et DITEP',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    description:
      'Outils numériques de suivi éducatif, coordination pluridisciplinaire, lien familles et gestion logistique pour IME et DITEP.',
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
            { label: 'IME' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <div className="glass border-primary-500/30 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <GraduationCap className="text-primary-400 size-4" />
            <span className="text-xs font-medium tracking-wide text-gray-200 uppercase sm:text-sm">
              Établissements Enfance & Handicap
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-6xl">
            Solutions numériques et logiciels pour{' '}
            <span className="text-gradient drop-shadow-sm">Instituts Médico-Éducatifs (IME)</span>
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Simplifiez le suivi éducatif et thérapeutique des jeunes accompagnés, renforcez la
            coordination pluridisciplinaire et facilitez les échanges sécurisés avec les familles et
            partenaires scolaires.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Demander un échange pour votre IME
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/diagnostic-numerique" className="btn-outline w-full text-base sm:w-auto">
              Faire le diagnostic gratuit
            </Link>
          </div>
        </header>

        {/* LES DÉFIS MAJEURS D'UN IME */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="section-label">Compréhension des Besoins IME</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Coordonner les équipes éducatives, médicales et logistiques
                </h2>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  En Institut Médico-Éducatif (IME), les journées sont rythmées par les ateliers
                  pédagogiques, les séances de psychomotricité, d'orthophonie et les temps de vie
                  collective.
                </p>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  La dispersion des observations dans des classeurs papier ou des notes non
                  synchronisées génère une perte de temps précieuse. DevEvoke conçoit des outils
                  intuitifs permettant de centraliser le{' '}
                  <strong>Projet Personnalisé d’Accompagnement (PPA)</strong>, de sécuriser les
                  transmissions et de coordonner les transports en toute sérénité.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image
                    src="/images/solutions/ime_pedagogy_learning.webp"
                    alt="Séance éducative individualisée en IME avec outil tactile adapté"
                    width={800}
                    height={520}
                    className="h-[360px] w-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
                  />
                  <div className="from-bg absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-85" />
                  <div className="absolute right-6 bottom-6 left-6">
                    <span className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
                      Pédagogie & Développement
                    </span>
                    <p className="text-sm font-medium text-white sm:text-base">
                      Des interfaces adaptées au rythme d'apprentissage des enfants et adolescents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="bg-secondary-500/10 text-secondary-400 mb-4 flex size-12 items-center justify-center rounded-xl">
                  <Calendar className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Organisation des activités & plannings
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Coordination sans accroc des ateliers éducatifs, des séances thérapeutiques et des
                  plannings de salles ou matériels partagés pour l&apos;ensemble de
                  l&apos;établissement.
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="bg-primary-500/10 text-primary-400 mb-4 flex size-12 items-center justify-center rounded-xl">
                  <FileText className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">Suivi des objectifs éducatifs</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Chaque éducateur ou rééducateur met à jour les bilans périodiques et les réussites
                  de l'enfant dans une interface claire et sécurisée.
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <HeartHandshake className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Lien renforcé avec les parents
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Espace numérique pour partager les événements du quotidien, les plannings et les
                  documents administratifs en conformité avec le RGPD.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA DÉCISIONNAIRE */}
        <section className="px-4 py-20">
          <div className="glass-strong border-primary-500/30 mx-auto max-w-4xl rounded-3xl border p-10 text-center sm:p-14">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Modernisez les outils de votre Institut Médico-Éducatif
            </h2>
            <p className="text-muted mx-auto mb-8 max-w-2xl text-base sm:text-lg">
              Présentez-nous votre organisation. Nous vous accompagnons dans le choix ou le
              développement de la solution la plus pertinente.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Contacter un conseiller IME
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
                  href="/solutions-medico-social/sessad"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  SESSAD
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/esat"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  ESAT
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
                  href="/logiciel-gestion-vehicules-medico-social"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  Gestion de flotte
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
