import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import floticarImg from '@/images/projects/floticar-dashboard.webp';
import { Car, ArrowRight, CheckCircle2, Smartphone } from 'lucide-react';

const floticarFeatures = [
  {
    label: 'Carnet de bord par QR code',
    desc: 'Scan direct avec le smartphone du conducteur, sans aucune application à télécharger.',
  },
  {
    label: 'Suivi kilométrique & carburant',
    desc: 'Relevé instantané au départ et à la restitution de chaque trajet associatif.',
  },
  {
    label: 'Alertes contrôles techniques',
    desc: 'Anticipation automatique des échéances réglementaires et révisions constructeur.',
  },
  {
    label: 'Traçabilité des conducteurs',
    desc: 'Attribution claire de chaque véhicule : zéro amende non imputée au sein de l’association.',
  },
  {
    label: 'Signalement d’anomalies & photos',
    desc: 'Prise de photo immédiate en cas de rayure ou incident pour éviter les litiges.',
  },
  {
    label: 'Planning de réservation partagé',
    desc: 'Disponibilité en temps réel de tous les véhicules pour les équipes de tournée.',
  },
];

export default function FloticarShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-neutral-950 py-12 sm:py-20 lg:py-28">
      {/* Background glow */}
      <div className="bg-primary-600/10 pointer-events-none absolute top-1/2 right-10 h-96 w-96 -translate-y-1/2 rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-primary-500/30 relative rounded-3xl border bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 p-5 shadow-2xl sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="space-y-5 sm:space-y-6 lg:col-span-6">
              <div className="bg-primary-500/10 border-primary-500/30 text-primary-300 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold">
                <Car className="size-3.5 shrink-0" />
                <span>Réalisation SaaS &amp; Preuve d&apos;Expertise • Conçu par DevEvoke</span>
              </div>

              <h2 className="text-2xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Étude de cas : Floticar, solution SaaS développée pour les flottes associatives
              </h2>

              <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                Illustration concrète de notre capacité à concevoir un produit numérique complet :
                né des besoins observés auprès d’associations gestionnaires, d’IME et de SESSAD,{' '}
                <strong className="text-white">Floticar</strong> dématérialise le carnet de bord des
                véhicules partagés et simplifie le suivi opérationnel.
              </p>

              {/* 6 Feature Points */}
              <div className="grid grid-cols-1 gap-3.5 pt-2 sm:grid-cols-2">
                {floticarFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    <div>
                      <strong className="block text-white">{feat.label}</strong>
                      <span className="text-neutral-400">{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4 sm:pt-4">
                <Link
                  href="/realisations/floticar"
                  className="from-primary-500 to-secondary-500 shadow-primary-500/20 flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:opacity-95 sm:text-sm"
                >
                  <span>Lire l’étude de cas Floticar</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/realisations"
                  className="flex min-h-[44px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center text-xs font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white sm:text-sm"
                >
                  Découvrir toutes nos réalisations
                </Link>
              </div>
            </div>

            {/* Right Visual: Field Action Photo + Dashboard Overlay */}
            <div className="relative space-y-4 lg:col-span-6">
              {/* Field Action Photo */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-2xl">
                <Image
                  src="/images/home/floticar_real_action.webp"
                  alt="Conducteur scannant le QR code d'un véhicule avec son smartphone"
                  width={600}
                  height={450}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[240px] w-full object-cover object-center brightness-[0.95] transition-transform duration-700 group-hover:scale-102 sm:h-[380px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                {/* Badge on Photo */}
                <div className="absolute top-3 left-3 flex items-center gap-2 rounded-xl border border-white/15 bg-neutral-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md sm:top-4 sm:left-4">
                  <Smartphone className="text-secondary-400 size-3.5 shrink-0" />
                  <span>Scan QR Code Terrain • Sans Installation</span>
                </div>

                <div className="absolute right-3 bottom-3 left-3 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-200 sm:right-4 sm:bottom-4 sm:left-4">
                  <span className="text-[11px] font-semibold sm:text-xs">
                    Véhicules Partagés & Tournées
                  </span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300 sm:text-[11px]">
                    Dématérialisation Immédiate
                  </span>
                </div>
              </div>

              {/* Complementary mini preview of the dashboard */}
              <div className="relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/90 p-3.5 shadow-xl sm:flex-row sm:items-center sm:gap-4 sm:p-4">
                <div className="flex w-full items-center gap-3 sm:w-auto">
                  <div className="size-14 shrink-0 overflow-hidden rounded-xl border border-white/10 sm:size-16">
                    <Image
                      src={floticarImg}
                      alt="Dashboard Floticar"
                      width={80}
                      height={80}
                      sizes="80px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 sm:hidden">
                    <span className="block text-xs font-bold text-white">
                      Tableau de bord Direction
                    </span>
                    <p className="line-clamp-2 text-[11px] text-neutral-400">
                      Consolidation kilométrique & entretiens.
                    </p>
                  </div>
                </div>

                <div className="hidden min-w-0 flex-1 sm:block">
                  <span className="block text-xs font-bold text-white">
                    Tableau de bord Direction & Gestionnaires
                  </span>
                  <p className="truncate text-[11px] text-neutral-400">
                    Consolidation kilométrique, calendrier des entretiens et export comptable.
                  </p>
                </div>

                <Link
                  href="/realisations/floticar"
                  className="text-primary-400 flex min-h-[36px] shrink-0 items-center self-end text-xs font-semibold hover:text-white sm:self-auto sm:pr-2"
                >
                  Voir l’étude de cas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
