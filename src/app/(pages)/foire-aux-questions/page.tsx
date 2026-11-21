import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import PricingFAQ from '@/components/Pricing/pricingFAQ';
import { Fade } from '@/components/ui/Fade';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LegalNavSwitcher from '@/components/PagesInfo/LegalNavSwitcher';

export default function FoireAuxQuestionsPage() {
  return (
    <div className="min-h-screen overflow-hidden pb-24">
      {/* Fil d'Ariane & Navigation */}
      <Breadcrumb
        items={[{ label: 'Foire Aux Questions (FAQ)' }]}
        backLink={{ href: '/', label: 'Retour au site' }}
      />
      <LegalNavSwitcher />

      {/* Hero Header */}
      <header className="mx-auto mt-8 mb-16 max-w-4xl px-4 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <div className="bg-primary-500/10 border-primary-500/20 text-primary-300 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold sm:text-sm">
            <HelpCircle className="size-4" />
            <span>Réponses & Accompagnement</span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Foire Aux Questions <span className="text-highlight">Solutions & Méthode</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400">
            Retrouvez les réponses à vos questions sur la conception de logiciels métier sur-mesure,
            le développement de plateformes SaaS, les applications mobiles nomades, l’hébergement
            souverain en France et la conformité RGPD.
          </p>
        </Fade>
      </header>

      {/* Main FAQ Accordion Container */}
      <section
        aria-label="Questions fréquentes"
        className="mx-auto mb-24 max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <PricingFAQ />
      </section>

      {/* Call to action & Direct contact */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-8 text-center sm:p-12">
          <div className="from-primary-500/10 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-neutral-300">
              <MessageSquare className="text-primary-400 size-3.5" />
              <span>Vous avez une question spécifique ?</span>
            </span>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              DevEvoke est à votre écoute
            </h2>
            <p className="mx-auto max-w-xl text-sm text-neutral-400 sm:text-base">
              Chaque entreprise, association ou structure possède des processus uniques. Échangeons
              directement avec le fondateur pour évaluer la faisabilité et le cadrage de votre
              projet.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="from-primary-500 to-secondary-500 shadow-primary-500/20 flex items-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3 text-xs font-semibold text-white shadow-lg transition-all hover:opacity-95 sm:text-sm"
              >
                <span>Poser votre question</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/diagnostic-numerique"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white sm:text-sm"
              >
                Faire le diagnostic gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
