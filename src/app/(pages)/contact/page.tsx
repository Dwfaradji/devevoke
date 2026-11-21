import React from 'react';
import Link from 'next/link';
import Contact from '@/components/Contact/contact';
import { Fade } from '@/components/ui/Fade';
import Breadcrumb from '@/components/ui/Breadcrumb';

const Page = () => {
  return (
    <div className="min-h-screen overflow-hidden pb-16 sm:pb-24">
      <Breadcrumb
        items={[{ label: 'Contact & Échange Projet' }]}
        backLink={{ href: '/', label: 'Retour au site' }}
      />

      <header className="mx-auto mt-4 mb-10 max-w-4xl px-4 text-center sm:mb-16">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-3 inline-block sm:mb-4">
            Échange Direct avec le Fondateur
          </span>
          <h1 className="mb-4 text-2xl leading-tight font-bold tracking-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl">
            Concevons ensemble la <span className="text-highlight">solution digitale</span> pensée
            pour votre métier
          </h1>
          <p className="text-muted mx-auto max-w-2xl text-sm leading-relaxed sm:text-lg">
            Entreprises, TPE, PME, startups, associations ou structures médico-sociales : échangez
            directement avec le fondateur et développeur pour cadrer votre projet de logiciel
            métier, d’application mobile, de plateforme SaaS ou d’automatisation.
          </p>
        </Fade>
      </header>

      <div className="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Contact />
      </div>

      {/* Quick Links Section */}
      <section
        aria-label="Ressources complémentaires"
        className="mx-auto mb-12 max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/foire-aux-questions"
            className="glass hover:border-primary-500/30 group rounded-2xl border border-white/5 p-5 transition-all hover:bg-white/5"
          >
            <span className="text-primary-400 mb-1 block text-xs font-semibold tracking-wider uppercase">
              Des questions ?
            </span>
            <span className="group-hover:text-primary-300 text-sm font-bold text-white transition-colors">
              Consulter notre FAQ →
            </span>
          </Link>

          <Link
            href="/realisations"
            className="glass hover:border-secondary-500/30 group rounded-2xl border border-white/5 p-5 transition-all hover:bg-white/5"
          >
            <span className="text-secondary-400 mb-1 block text-xs font-semibold tracking-wider uppercase">
              Savoir-faire
            </span>
            <span className="group-hover:text-secondary-300 text-sm font-bold text-white transition-colors">
              Nos Réalisations →
            </span>
          </Link>

          <Link
            href="/diagnostic-numerique"
            className="glass hover:border-accent/30 group rounded-2xl border border-white/5 p-5 transition-all hover:bg-white/5"
          >
            <span className="text-accent mb-1 block text-xs font-semibold tracking-wider uppercase">
              Auto-évaluation
            </span>
            <span className="group-hover:text-accent text-sm font-bold text-white transition-colors">
              Diagnostic gratuit (3 min) →
            </span>
          </Link>

          <Link
            href="/tarifs"
            className="glass group rounded-2xl border border-white/5 p-5 transition-all hover:border-emerald-500/30 hover:bg-white/5"
          >
            <span className="mb-1 block text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Budgets & forfaits
            </span>
            <span className="text-sm font-bold text-white transition-colors group-hover:text-emerald-300">
              Consulter nos tarifs →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
