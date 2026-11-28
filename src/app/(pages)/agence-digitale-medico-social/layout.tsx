import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/agence-digitale-medico-social',
  title: 'Agence Digitale & Web Médico-Social',
  description:
    'Création de sites web, applications mobiles et logiciels sur-mesure pour ESMS, associations gestionnaires, IME, SESSAD, DITEP, ESAT et EHPAD en France.',
  imageAlt: 'DevEvoke - Agence Digitale Médico-Social',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
