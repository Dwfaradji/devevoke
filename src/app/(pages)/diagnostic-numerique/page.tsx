import React from 'react';
import DiagnosticTool from '@/components/Diagnostic/DiagnosticTool';
import Script from 'next/script';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export default function DiagnosticPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Diagnostic Numérique Médico-Social DevEvoke',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description:
      'Outil interactif gratuit d’évaluation de la maturité numérique des associations et établissements médico-sociaux (IME, SESSAD, ESAT, EHPAD).',
  };

  return (
    <>
      <Script
        id="diagnostic-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-screen overflow-hidden pb-16 sm:pb-24">
        <Breadcrumb
          items={[
            { label: 'Pôle Médico-Social', href: '/medico-social' },
            { label: 'Diagnostic Numérique' },
          ]}
          backLink={{ href: '/medico-social', label: 'Retour au pôle médico-social' }}
        />
        <MedicoSocialNavSwitcher />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Header with 2-Column Presentation */}
          <div className="mb-16 grid items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <span className="section-label inline-block">
                Auto-évaluation gratuite • 3 minutes
              </span>
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Diagnostic Numérique <span className="text-highlight">Médico-Social</span>
              </h1>
              <p className="text-muted text-lg leading-relaxed">
                Mesurez en direct le niveau de digitalisation de votre établissement (IME, SESSAD,
                ESAT, EHPAD, FAM). Identifiez les failles organisationnelles, les risques de
                conformité et les leviers d’automatisation prioritaires.
              </p>

              {/* Badges */}
              <div className="grid gap-3 pt-2 text-xs text-gray-300 sm:grid-cols-3">
                <div className="glass flex items-center gap-2 rounded-xl border border-white/5 p-3">
                  <Clock className="text-primary-400 h-4 w-4 shrink-0" />
                  <span>Résultat instantané sans inscription</span>
                </div>
                <div className="glass flex items-center gap-2 rounded-xl border border-white/5 p-3">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Conforme RGPD & Confidentialité</span>
                </div>
                <div className="glass flex items-center gap-2 rounded-xl border border-white/5 p-3">
                  <Award className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>Méthode adaptée associations</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/diagnostic/diagnostic_audit_medicosocial.webp"
                  alt="Consultation d'audit et diagnostic de maturité numérique en établissement médico-social"
                  width={800}
                  height={540}
                  className="h-[320px] w-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[380px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                <div className="absolute right-6 bottom-6 left-6">
                  <span className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
                    Diagnostic Personnalisé
                  </span>
                  <p className="text-sm font-medium text-white">
                    Cartographier vos processus pour identifier concrètement vos gains de temps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Tool */}
          <DiagnosticTool />

          {/* Contextual FAQs or Explanations */}
          <div className="mx-auto mt-24 max-w-3xl border-t border-white/5 pt-16">
            <h2 className="mb-6 text-center text-2xl font-bold text-white">
              Pourquoi réaliser ce diagnostic pour votre établissement ?
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="glass rounded-2xl border border-white/5 p-5">
                <CheckCircle2 className="text-primary-400 mb-2 h-6 w-6" />
                <h3 className="mb-1 text-sm font-bold text-white">Évaluer les risques</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Contrôle des permis, maintenance des véhicules et sécurité des données usagers au
                  sens de la CNIL.
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-5">
                <CheckCircle2 className="text-secondary-400 mb-2 h-6 w-6" />
                <h3 className="mb-1 text-sm font-bold text-white">Chiffrer le temps perdu</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Mesurez le volume d’heures gaspillées chaque semaine en double saisie et gestion
                  papier.
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-5">
                <CheckCircle2 className="mb-2 h-6 w-6 text-emerald-400" />
                <h3 className="mb-1 text-sm font-bold text-white">Prioriser les investissements</h3>
                <p className="text-muted text-xs leading-relaxed">
                  Distinguez les besoins critiques à fort ROI des projets secondaires et préparez
                  vos budgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
