import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Smartphone, Clock, ArrowRight, FileCheck, Calendar, Users } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';
import { SITE_URL, createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/solutions-medico-social/sessad',
  title: 'Applications Mobiles & Outils SESSAD',
  description:
    'Applications mobiles hors-ligne et logiciels pour SESSAD, SAVS et SAMSAH : comptes-rendus terrain, tournées nomades, suivi véhicules et RGPD.',
  imageAlt: 'Solutions logicielles et mobiles pour SESSAD',
});

export default function SolutionsSessadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Applications Mobiles et Solutions Numériques pour SESSAD',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: SITE_URL,
    },
    description:
      'Applications mobiles hors-ligne, organisation des tournées d’intervention, saisie de comptes-rendus terrain et suivi logistique pour équipes de SESSAD.',
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
            { label: 'SESSAD' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <div className="glass border-secondary-500/30 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <MapPin className="text-secondary-400 size-4" />
            <span className="text-secondary-200 text-xs font-medium tracking-wide uppercase sm:text-sm">
              Services d'Éducation Spéciale et de Soins à Domicile
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-6xl">
            Applications mobiles et solutions numériques pour les{' '}
            <span className="text-gradient drop-shadow-sm">équipes nomades de SESSAD</span>
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Les professionnels de SESSAD passent une grande partie de leur temps sur la route
            (écoles, collèges, domiciles). Nous concevons des applications mobiles hors-ligne et des
            outils collaboratifs pensés pour fluidifier leur quotidien sans alourdir leur charge
            mentale.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Échanger sur vos besoins SESSAD
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/diagnostic-numerique" className="btn-outline w-full text-base sm:w-auto">
              Faire le diagnostic gratuit
            </Link>
          </div>
        </header>

        {/* SPÉCIFICITÉS DU SESSAD */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="section-label">Enjeux de Mobilité SESSAD</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  La mobilité au cœur de la prise en charge
                </h2>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  Contrairement aux structures en internat ou externat fixe, le SESSAD intervient
                  directement dans les lieux de vie de l'enfant (écoles, collèges, domicile
                  familial). Les éducateurs spécialisés, psychologues, orthophonistes et
                  psychomotriciens enchaînent les rendez-vous extérieurs.
                </p>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  La déconnexion réseau, la double saisie papier-informatique et la dispersion des
                  plannings pèsent lourdement sur les intervenants. Nous développons des
                  applications mobiles intuitives avec synchronisation automatique et mode
                  hors-ligne, garantissant la continuité du suivi des enfants sans perte
                  d'information.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image
                    src="/images/home/sessad_field_educator.webp"
                    alt="Éducateur spécialisé SESSAD en séance avec tablette tactile"
                    width={800}
                    height={520}
                    className="h-[360px] w-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
                  />
                  <div className="from-bg absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-85" />
                  <div className="absolute right-6 bottom-6 left-6">
                    <span className="bg-secondary-500/20 text-secondary-300 border-secondary-500/30 mb-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
                      Intervention en milieu ordinaire
                    </span>
                    <p className="text-sm font-medium text-white sm:text-base">
                      Outils mobiles légers, utilisables hors-ligne et synchronisés dès le retour au
                      service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <Calendar className="text-secondary-400 mb-3 size-8" />
                <h3 className="mb-2 font-bold text-white">Planning Nomade & Tournées</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Visualisation claire des interventions extérieures, adresses des rendez-vous et
                  changements d'emploi du temps en direct.
                </p>
              </div>
              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <Smartphone className="text-primary-400 mb-3 size-8" />
                <h3 className="mb-2 font-bold text-white">Saisie 100% Hors-Ligne</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Prise de notes et bilans d'interventions en école ou à domicile sans connexion,
                  avec synchronisation automatique au retour.
                </p>
              </div>
              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <Users className="text-accent mb-3 size-8" />
                <h3 className="mb-2 font-bold text-white">Coordination Pluridisciplinaire</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Partage sécurisé des transmissions entre éducateurs, psychologues, rééducateurs et
                  secrétariat conformément au RGPD.
                </p>
              </div>
              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <FileCheck className="mb-3 size-8 text-emerald-400" />
                <h3 className="mb-2 font-bold text-white">Comptes-Rendus Dématérialisés</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Fiches de suivi pré-remplies, validation numérique et transmission instantanée au
                  dossier unique de l'enfant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SESSAD CO-CONSTRUCTION */}
        <section className="px-4 py-20">
          <div className="glass-strong border-secondary-500/30 mx-auto max-w-4xl rounded-3xl border p-10 text-center sm:p-14">
            <span className="section-label mb-3 inline-block">
              Co-construisons vos outils SESSAD
            </span>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Simplifiez la vie de vos équipes nomades dès aujourd'hui
            </h2>
            <p className="text-muted mx-auto mb-8 max-w-2xl text-base sm:text-lg">
              Bénéficiez d&apos;un échange de cadrage gratuit de 30 minutes avec un architecte
              logiciel pour évaluer vos processus et prototyper vos futurs outils mobiles.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Réserver un échange de cadrage
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/realisations" className="btn-outline text-base">
                Découvrir nos réalisations
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
                  className="hover:text-secondary-400 underline underline-offset-4 transition-colors"
                >
                  IME
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/esat"
                  className="hover:text-secondary-400 underline underline-offset-4 transition-colors"
                >
                  ESAT
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/ehpad"
                  className="hover:text-secondary-400 underline underline-offset-4 transition-colors"
                >
                  EHPAD
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/associations"
                  className="hover:text-secondary-400 underline underline-offset-4 transition-colors"
                >
                  Associations gestionnaires
                </Link>
                <span>•</span>
                <Link
                  href="/logiciel-gestion-vehicules-medico-social"
                  className="hover:text-secondary-400 underline underline-offset-4 transition-colors"
                >
                  Logiciel flotte médico-sociale
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
