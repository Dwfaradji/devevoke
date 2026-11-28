import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/contact',
  title: 'Contact & Devis Projet Médico-Social',
  description:
    'Échangez avec le fondateur de DevEvoke pour cadrer votre projet de site web, application mobile, logiciel métier ou automatisation médico-sociale.',
  imageAlt: 'Contacter DevEvoke',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
