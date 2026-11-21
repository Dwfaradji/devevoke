import React from 'react';
import BlogHeader from '@/components/Blog/blogHeader';
import BlogsContainer from '@/components/Blog/blogsContainer';
import Link from 'next/link';
import { Fade } from '@/components/ui/Fade';
import Breadcrumb from '@/components/ui/Breadcrumb';

const Page = () => {
  return (
    <div className="overflow-hidden pb-12">
      <Breadcrumb
        items={[{ label: 'Ressources & Guides' }]}
        backLink={{ href: '/', label: 'Retour au site' }}
      />
      <header className="mx-auto mt-4 mb-16 px-4 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Ressources &amp; Expertise Métier</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ressources &amp; guides sur le{' '}
            <span className="text-highlight">numérique médico-social</span>
          </h1>
          <p className="text-muted mx-auto max-w-3xl text-lg leading-relaxed">
            Analyses, conseils pratiques et retours d’expérience dédiés aux directions
            d’établissements médico-sociaux (ESMS), associations gestionnaires et responsables SI :
            logiciels sur-mesure, ergonomie UX, interopérabilité, sécurité et conformité RGPD.
          </p>
        </Fade>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlogHeader />
        <div className="mt-16">
          <h2 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold text-white">
            Articles Récents
          </h2>
          <BlogsContainer />
        </div>
      </div>

      <section className="relative my-16 overflow-hidden px-4 py-24">
        <div className="from-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="glass border-primary/20 relative z-10 mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] sm:p-16">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Un projet en tête ?</h2>
          <p className="text-muted mx-auto mb-8 max-w-2xl text-lg">
            Prêt à concrétiser vos idées ? Discutons de votre projet et trouvons ensemble la
            meilleure solution technologique.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            Contactez-Nous →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
