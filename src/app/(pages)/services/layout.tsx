import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/services',
  title: 'Prestations Web & Logiciels Sur-Mesure',
  description:
    'Prestations DevEvoke pour le médico-social et les organisations : sites web Next.js, applications mobiles, logiciels métiers, SaaS, API et maintenance.',
  imageAlt: 'Services numériques DevEvoke',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
