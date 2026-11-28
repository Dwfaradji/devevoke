import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/foire-aux-questions',
  title: 'Foire Aux Questions (FAQ) & Méthode',
  description:
    'Réponses aux questions fréquentes sur nos logiciels métiers, plateformes SaaS, applications mobiles hors-ligne, hébergement en France et conformité RGPD.',
  imageAlt: 'FAQ DevEvoke',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
