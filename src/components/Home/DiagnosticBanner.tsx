import React from 'react';
import Link from 'next/link';
import { BarChart3, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function DiagnosticBanner() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong border-primary-500/30 relative overflow-hidden rounded-3xl border p-8 shadow-[0_0_80px_rgba(59,130,246,0.15)] sm:p-12 lg:p-16">
          {/* Subtle background glow */}
          <div className="bg-primary-600/10 pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full blur-[120px]" />
          <div className="bg-secondary-500/10 pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <div className="bg-primary-500/10 border-primary-500/20 text-primary-400 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wider uppercase">
                <BarChart3 className="h-4 w-4" />
                Outil Gratuit Décideurs &amp; Dirigeants
              </div>

              <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Quel est le niveau de <span className="text-highlight">maturité numérique</span> de
                votre organisation ?
              </h2>

              <p className="text-muted max-w-2xl text-base leading-relaxed sm:text-lg">
                Répondez à quelques questions concrètes sur vos outils internes, vos processus
                terrain et votre gestion administrative. Obtenez votre score instantané et un plan
                d’action priorisé.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <Clock className="text-primary-400 h-4 w-4" />3 minutes chrono
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Résultat sans inscription
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="text-secondary-400 h-4 w-4" />
                  100% confidentiel
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:col-span-4 lg:flex-col">
              <Link
                href="/diagnostic-numerique"
                className="btn-primary shadow-primary-500/20 justify-center px-8 py-4 text-center text-sm shadow-xl sm:text-base"
              >
                <span>Lancer le diagnostic</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline justify-center px-6 py-3 text-center text-xs sm:text-sm"
              >
                Parler directement à un architecte logiciel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
