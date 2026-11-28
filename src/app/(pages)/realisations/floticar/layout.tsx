import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/realisations/floticar',
  title: 'Étude de Cas Floticar : Flotte ESMS',
  description:
    'Comment DevEvoke a conçu Floticar, plateforme SaaS de gestion de flotte pour IME, SESSAD et associations : carnet de bord QR code et alertes d’entretien.',
  imageAlt: 'Étude de cas Floticar DevEvoke',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
