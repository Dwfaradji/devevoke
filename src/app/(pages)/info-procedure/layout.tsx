import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/info-procedure',
  title: 'Méthodologie & Étapes de Réalisation',
  description:
    'Découvrez la méthode DevEvoke pour le médico-social : immersion terrain, co-conception UX, développement agile et hébergement souverain en France.',
  imageAlt: 'Méthodologie DevEvoke',
});

export default function ProcedureLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
