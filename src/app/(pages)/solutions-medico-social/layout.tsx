import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/solutions-medico-social',
  title: 'Solutions Digitales Médico-Sociales',
  description:
    'Catalogue des solutions numériques DevEvoke pour ESMS et associations : logiciels sur-mesure, mobilité terrain et outils pour IME, SESSAD, ESAT, EHPAD.',
  imageAlt: 'Solutions numériques DevEvoke pour le médico-social',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
