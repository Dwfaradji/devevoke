import React from 'react';
import PricingHeader from '@/components/Pricing/pricingHeader';
import PricingMain from '@/components/Pricing/pricingMain';
import PricingFAQ from '@/components/Pricing/pricingFAQ';
import PricingCTA from '@/components/Pricing/pricingCTA';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LegalNavSwitcher from '@/components/PagesInfo/LegalNavSwitcher';
import { pageInfosPrice } from '@/data/data';

const Page = () => {
  const modalities = pageInfosPrice.filter((item) => item.title && item.text);

  return (
    <div className="overflow-hidden">
      <Breadcrumb
        items={[{ label: 'Informations Tarifaires & Forfaits' }]}
        backLink={{ href: '/', label: 'Retour au site' }}
      />
      <LegalNavSwitcher />

      {/* 
        PricingHeader contains the Page Hero and the Additional Services (Maintenance & Hébergement).
        It is rendered at the top because it has the Hero.
      */}
      <PricingHeader />

      {/* 
        PricingMain contains the large Web Development Plans 
      */}
      <div className="mx-auto mt-8 mb-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Accompagnement & <span className="text-highlight">Solutions Sur-Mesure</span>
          </h2>
          <p className="text-muted mx-auto max-w-2xl text-lg">
            Des architectures fiables conçues pour répondre aux besoins concrets des associations et
            établissements médico-sociaux. Chaque prestation inclut nativement le "Privacy by
            Design", l'hébergement souverain et la conformité RGPD.
          </p>
        </div>
        <PricingMain />
      </div>

      {/* Modalités contractuelles & facturation (fusionnées depuis /info-tarif) */}
      <section
        aria-labelledby="modalites-tarifaires-heading"
        className="mx-auto mb-24 max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center">
          <span className="section-label mb-3 inline-block">Cadre Contractuel</span>
          <h2
            id="modalites-tarifaires-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Modalités d&apos;accompagnement et de facturation
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {modalities.map((item, idx) => (
            <article
              key={item.title}
              className={`glass rounded-3xl border border-white/5 p-6 sm:p-8 ${
                idx === modalities.length - 1 && modalities.length % 2 === 1 ? 'md:col-span-2' : ''
              }`}
            >
              <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <PricingFAQ />
      <PricingCTA />
    </div>
  );
};

export default Page;
