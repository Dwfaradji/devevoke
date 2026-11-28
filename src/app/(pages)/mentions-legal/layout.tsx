import React from 'react';
import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/mentions-legal',
  title: 'Mentions Légales',
  description:
    'Mentions légales du site DevEvoke : éditeur Boucif Faradji, hébergement souverain en France, propriété intellectuelle et conditions d’utilisation.',
  imageAlt: 'Mentions légales DevEvoke',
});

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
