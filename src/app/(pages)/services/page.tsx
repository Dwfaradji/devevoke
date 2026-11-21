import React from 'react';
import { Fade } from '@/components/ui/Fade';
import Link from 'next/link';

import ServiceList from '@/components/Services/ServiceList';
import ProcessTimeline from '@/components/Services/ProcessTimeline';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ServicesNavSwitcher from '@/components/ui/ServicesNavSwitcher';

const Page = () => {
  return (
    <>
      <Breadcrumb
        items={[{ label: 'Nos Expertises & Services' }]}
        backLink={{ href: '/', label: 'Retour au site' }}
      />
      <ServicesNavSwitcher />

      <header className="mx-auto mt-4 mb-16 max-w-4xl px-4 text-center">
        <Fade direction="up" triggerOnce>
          <span className="section-label mb-4 inline-block">
            Ingénierie & Transformation Numérique
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nos Expertises & <span className="text-highlight">Services Numériques</span>
          </h1>
          <p className="text-muted mx-auto max-w-2xl text-lg leading-relaxed">
            DevEvoke accompagne les entreprises, PME, startups, associations et acteurs
            médico-sociaux dans la conception de solutions sur-mesure : développement web,
            applications mobiles, plateformes SaaS, logiciels métier et automatisation des
            processus.
          </p>
        </Fade>
      </header>

      {/* Détail des services (Glassmorphism Layout) */}
      <ServiceList />

      {/* Méthodologie (Timeline en étapes) */}
      <ProcessTimeline />

      {/* Call to Action Final */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="from-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="glass border-primary/20 relative z-10 mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] sm:p-16">
          <span className="section-label mb-3 inline-block">Échangeons sur vos besoins</span>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Un projet numérique pour votre organisation ?
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-2xl text-base leading-relaxed sm:text-lg">
            Échangez directement avec le fondateur pour cadrer votre besoin, évaluer la faisabilité
            technique et concevoir une solution adaptée à votre budget et vos flux réels.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary inline-flex text-sm font-semibold">
              Parler de votre projet →
            </Link>
            <Link href="/medico-social" className="btn-secondary inline-flex text-sm font-medium">
              Notre univers médico-social
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
