import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Home/header';
import NeedsSection from '@/components/Home/NeedsSection';
import SolutionsGrid from '@/components/Home/SolutionsGrid';
import TemplatesShowcase from '@/components/Home/TemplatesShowcase';
import SectorSection from '@/components/Home/SectorSection';
import FloticarShowcase from '@/components/Home/FloticarShowcase';
import MethodologySection from '@/components/Home/MethodologySection';
import WhyDevEvoke from '@/components/Home/WhyDevEvoke';
import DiagnosticBanner from '@/components/Home/DiagnosticBanner';
import BlogHome from '@/components/Home/blogHome';
import FinalCTA from '@/components/Home/FinalCTA';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/',
  isHome: true,
  title: 'DevEvoke | Solutions Digitales Médico-Social',
  description:
    'Agence digitale médico-sociale : logiciels métiers, applications mobiles, SaaS et sites web sur-mesure pour ESMS, associations, IME, SESSAD et EHPAD.',
  imageAlt: 'DevEvoke - Solutions digitales et développement sur-mesure pour le médico-social',
});

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero : Positionnement & CTAs */}
      <Header />

      {/* Section 2 — Problématiques : Comprendre avant la technologie */}
      <NeedsSection />

      {/* Section 3 — Solutions : Les 6 piliers technologiques DevEvoke */}
      <SolutionsGrid />

      {/* Section 3b — Socles & Templates : Accélérateurs prêts à l'emploi */}
      <TemplatesShowcase />

      {/* Section 4 — Secteur Médico-Social : Les établissements accompagnés */}
      <SectorSection />

      {/* Section 5 — Floticar : Réalisation concrète & SaaS gestion de flotte */}
      <FloticarShowcase />

      {/* Section 6 — Méthode DevEvoke : Les 5 étapes de conception */}
      <MethodologySection />

      {/* Section 7 — Pourquoi DevEvoke : Piliers de différenciation */}
      <WhyDevEvoke />

      {/* Section 8a — Diagnostic Numérique Gratuit */}
      <DiagnosticBanner />

      {/* Section 8b — Ressources & Articles utiles au secteur */}
      <BlogHome />

      {/* Section 9 — CTA Final : Parlons de votre projet */}
      <FinalCTA />
    </>
  );
}
