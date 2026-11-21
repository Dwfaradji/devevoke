import React from 'react';
import Link from 'next/link';

import AboutHeader from '@/components/About/aboutHeader';
import AboutMore from '@/components/About/aboutMore';
import TeamSection from '@/components/About/team';
import AboutGrid from '@/components/About/aboutGrid';
import { AboutMethodology, AboutSecurity } from '@/components/About/aboutFeatures';
import AnimatedStats from '@/components/Home/AnimatedStats';
import Testimonial from '@/components/Home/testimonial';
import Breadcrumb from '@/components/ui/Breadcrumb';

const Page = () => {
  return (
    <>
      <Breadcrumb
        items={[{ label: 'L’Agence & Le Fondateur' }]}
        backLink={{ href: '/', label: 'Retour au site' }}
      />
      <AboutHeader />
      <AnimatedStats />
      <AboutMethodology />
      <AboutSecurity />
      <Testimonial ctaHref="/contact" ctaLabel="Discuter de votre projet" />
      <AboutMore />
      <TeamSection />
      <AboutGrid />

      {/* Call to Action Final */}
      <section className="relative mb-16 overflow-hidden px-4 py-24">
        <div className="from-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="glass border-primary/20 relative z-10 mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] sm:p-16">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Prêt à concevoir la solution numérique de votre organisation ?
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-2xl text-lg">
            Échangeons sur vos processus, vos défis de gestion opérationnelle ou votre projet de
            plateforme logicielle. Découvrez comment DevEvoke conçoit des outils pérennes, élégants
            et adaptés à votre métier.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary inline-flex">
              Discuter de votre projet →
            </Link>
            <Link href="/services" className="btn-secondary inline-flex">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
