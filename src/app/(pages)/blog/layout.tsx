import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/blog',
  title: 'Ressources & Guides Médico-Social',
  description:
    'Articles et guides pratiques pour directions d’ESMS et associations : transformation numérique, logiciels métiers, ergonomie UX, sécurité et RGPD.',
  imageAlt: 'Blog et ressources DevEvoke',
  robots: {
    follow: true,
    index: true,
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
