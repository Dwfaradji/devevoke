import React from 'react';
import Link from 'next/link';
import { BarChart3, Calendar } from 'lucide-react';

const PricingCTA = () => {
  return (
    <section className="relative mb-16 overflow-hidden px-4 py-24">
      <div className="from-primary-500/10 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
      <div className="glass border-primary-500/20 relative z-10 mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] sm:p-16">
        <span className="section-label mb-4 inline-block">Cadrage Budgétaire & Accompagnement</span>
        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
          Besoin d’aide pour dimensionner votre projet ?
        </h2>
        <p className="text-muted mx-auto mb-8 max-w-2xl text-base leading-relaxed sm:text-lg">
          Chaque association ou établissement médico-social dispose de contraintes propres (nombre
          de sites, tournées terrain, taille de flotte). Évaluez vos priorités grâce à notre outil
          d’auto-évaluation ou réservez un échange de cadrage gratuit de 30 minutes.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/diagnostic-numerique" className="btn-primary inline-flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Faire le diagnostic gratuit (3 min)</span>
          </Link>
          <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Réserver un échange de cadrage</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
