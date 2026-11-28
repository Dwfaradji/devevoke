import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/logiciel-gestion-vehicules-medico-social',
  title: 'Logiciel Gestion de Véhicules ESMS',
  description:
    'Floticar, solution SaaS développée par DevEvoke pour gérer la flotte automobile des associations médico-sociales, IME, SESSAD, ESAT et EHPAD.',
  imageAlt: 'Solution de gestion de flotte médico-sociale développée par DevEvoke',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
