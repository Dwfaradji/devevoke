import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/politique-confidentialite',
  title: 'Politique de Confidentialité & RGPD',
  description:
    'Politique de confidentialité de DevEvoke : engagements RGPD, hébergement en France, finalités de collecte des formulaires et exercice de vos droits.',
  imageAlt: 'Politique de confidentialité DevEvoke',
  robots: {
    follow: true,
    index: true,
  },
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
