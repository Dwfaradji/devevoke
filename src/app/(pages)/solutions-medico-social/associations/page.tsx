import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, Layers, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';
import { SITE_URL, createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/solutions-medico-social/associations',
  title: 'Solutions SI Associations Médico-Sociales',
  description:
    'Outils numériques sur-mesure pour associations gestionnaires d’ESMS : pilotage multi-établissements, logiciels métiers, refonte web et conformité RGPD.',
  imageAlt: 'Solutions pour associations médico-sociales',
});

export default function SolutionsAssociationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques pour Associations Médico-Sociales',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: SITE_URL,
    },
    description:
      'Gouvernance des systèmes d’information, développement de logiciels sur-mesure, consolidation multi-sites et portails web pour associations gestionnaires.',
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
            { label: 'Associations' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <div className="glass border-primary-500/30 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Building2 className="text-primary-400 size-4" />
            <span className="text-xs font-medium tracking-wide text-gray-200 uppercase sm:text-sm">
              Gouvernance & Multi-Établissements
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-6xl">
            Solutions numériques pour les{' '}
            <span className="text-gradient drop-shadow-sm">associations médico-sociales</span>
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Vous gérez plusieurs structures (IME, SESSAD, ESAT, foyers, EHPAD) ? DevEvoke accompagne
            les <strong>Directions Générales</strong> et <strong>DSI associatives</strong> dans
            l’unification de leur système d’information, la mutualisation des moyens, la
            digitalisation des processus métiers et la conformité RGPD.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Planifier un échange de cadrage associatif
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/realisations" className="btn-outline w-full text-base sm:w-auto">
              Découvrir nos réalisations
            </Link>
          </div>
        </header>

        {/* PROBLÉMATIQUES ASSOCIATIVES */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="section-label">Enjeux de Direction Générale</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Mutualiser les moyens et consolider les données multi-sites
                </h2>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  Les associations gestionnaires regroupent souvent des établissements historiques
                  ayant chacun développé leurs propres habitudes de travail et leurs propres outils.
                  Cette hétérogénéité fragmente les données, complique les reportings pour les
                  financeurs (ARS, départements) et entraîne des surcoûts d’infrastructure.
                </p>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  DevEvoke vous apporte une vision d’ensemble : alignement stratégique du SI,
                  déploiement de socles logiciels transversaux mutualisés entre établissements et
                  développement de passerelles inter-applicatives sécurisées.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image
                    src="/images/home/hero_medicosocial_team.webp"
                    alt="Direction et coordination d'association médico-sociale en réunion de pilotage"
                    width={800}
                    height={520}
                    className="h-[360px] w-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
                  />
                  <div className="from-bg absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-85" />
                  <div className="absolute right-6 bottom-6 left-6">
                    <span className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
                      Pilotage Multi-Établissements
                    </span>
                    <p className="text-sm font-medium text-white sm:text-base">
                      Une vue consolidée pour la Direction Générale et des outils adaptés pour
                      chaque équipe de terrain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="bg-secondary-500/10 text-secondary-400 mb-4 flex size-12 items-center justify-center rounded-xl">
                  <Layers className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Mutualisation des moyens & ressources
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Partagez vos ressources critiques (équipements, plannings de salles, astreintes et
                  matériels) entre structures proches pour optimiser vos budgets et désenclaver les
                  équipes.
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="bg-primary-500/10 text-primary-400 mb-4 flex size-12 items-center justify-center rounded-xl">
                  <TrendingUp className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Tableaux de bord consolidés CA
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Indicateurs clés d’activité, taux d’occupation, suivi budgétaire et données RH
                  agrégées en temps réel pour éclairer les décisions stratégiques.
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Gouvernance RGPD & DPO Mutualisé
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Harmonisation des registres de traitement, audits de conformité de vos
                  prestataires et sécurisation des transferts de données sensibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20">
          <div className="glass-strong border-primary-500/30 mx-auto max-w-4xl rounded-3xl border p-10 text-center sm:p-14">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Accélérez la transformation numérique de votre association
            </h2>
            <p className="text-muted mx-auto mb-8 max-w-2xl text-base sm:text-lg">
              Directeurs généraux, DSI, DAF associatifs : découvrez comment DevEvoke vous aide à
              rationnaliser vos outils et sécuriser vos données.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Rencontrer un consultant DevEvoke
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/agence-digitale-medico-social" className="btn-outline text-base">
                Découvrir notre démarche d'agence
              </Link>
            </div>

            {/* Maillage inter-établissements */}
            <div className="text-muted mt-12 border-t border-white/10 pt-8 text-xs sm:text-sm">
              <span className="mb-3 block font-semibold tracking-wider text-white/70 uppercase">
                Solutions dédiées par structure :
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
                  href="/logiciel-gestion-vehicules-medico-social"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  Gestion de flotte multi-sites
                </Link>
                <span>•</span>
                <Link
                  href="/developpement-logiciel-medico-social"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  Développement sur-mesure
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
