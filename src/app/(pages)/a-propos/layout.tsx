import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/a-propos',
  title: 'À Propos : Agence Digitale Médico-Social',
  description:
    'Découvrez DevEvoke et Boucif Faradji : agence digitale spécialisée en logiciels sur-mesure, sites web et applications pour le secteur médico-social.',
  imageAlt: 'À propos de DevEvoke',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
