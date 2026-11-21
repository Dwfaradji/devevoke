import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-24">
      {/* Background radial glow */}
      <div className="bg-primary-600/10 pointer-events-none absolute top-1/2 left-1/2 h-72 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-8 px-4 text-center sm:px-6 lg:px-8">
        <div className="bg-primary-500/10 border-primary-500/20 text-primary-300 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold">
          <Calendar className="size-3.5" />
          <span>Échange de Cadrage Sans Engagement</span>
        </div>

        <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Parlons de votre projet numérique
        </h2>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          Que vous ayez un cahier des charges précis, un besoin d'automatisation ou simplement
          l'envie de moderniser vos outils, échangeons lors d'un atelier préalable de 30 minutes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <Link
            href="/contact"
            className="from-primary-500 to-secondary-500 shadow-primary-500/25 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:opacity-95 sm:w-auto"
          >
            <span>Planifier un échange de cadrage</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/diagnostic-numerique"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white sm:w-auto"
          >
            Faire le diagnostic numérique d'abord
          </Link>
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/5 pt-8 text-xs text-neutral-400">
          <span>• Réponse garantie sous 24 à 48h ouvrées</span>
          <span>• Confidentialité stricte des échanges (NDA)</span>
          <span>• Échange direct avec Boucif Faradji, fondateur</span>
        </div>
      </div>
    </section>
  );
}
