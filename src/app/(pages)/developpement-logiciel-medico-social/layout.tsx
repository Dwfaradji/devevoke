import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/developpement-logiciel-medico-social',
  title: 'Développement Logiciel Médico-Social',
  description:
    'Conception de logiciels métiers et applications web sur-mesure pour ESMS, IME, SESSAD, DITEP, ESAT et EHPAD. Hébergement souverain en France et RGPD.',
  imageAlt: 'Développement de logiciel médico-social sur-mesure DevEvoke',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
