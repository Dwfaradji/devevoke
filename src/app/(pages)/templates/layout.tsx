import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/templates',
  title: 'Socles Logiciels & Modèles Web ESMS',
  description:
    'Socles logiciels et modèles web pré-configurés pour établissements médico-sociaux et sanitaires : EHPAD, résidences autonomie, SESSAD et portails usagers.',
  imageAlt: 'Socles et templates médico-sociaux DevEvoke',
  robots: {
    follow: true,
    index: true,
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
