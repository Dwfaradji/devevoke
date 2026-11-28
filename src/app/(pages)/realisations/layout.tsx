import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/realisations',
  title: 'Réalisations & Projets Sur-Mesure',
  description:
    'Découvrez les réalisations logicielles et digitales de DevEvoke : étude de cas SaaS Floticar, logiciels métiers, applications mobiles et portails web.',
  imageAlt: 'Réalisations DevEvoke',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
