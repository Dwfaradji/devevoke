import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/tarifs',
  title: 'Tarifs, Forfaits & Modalités de Devis',
  description:
    'Formules d’accompagnement, forfaits projets, modalités contractuelles et devis sur-mesure DevEvoke pour sites web, apps mobiles et logiciels ESMS.',
  imageAlt: 'Tarifs et forfaits DevEvoke',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
