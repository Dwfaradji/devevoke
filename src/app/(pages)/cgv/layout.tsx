import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/cgv',
  title: 'Conditions Générales de Vente (CGV)',
  description:
    'Conditions Générales de Vente (CGV) de DevEvoke applicables aux prestations de développement web, logiciels métiers et solutions SaaS sur-mesure.',
  imageAlt: 'Conditions Générales de Vente DevEvoke',
  robots: {
    index: true,
    follow: true,
  },
});

export default function CgvLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
