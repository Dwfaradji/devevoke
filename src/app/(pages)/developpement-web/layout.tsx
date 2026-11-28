import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/developpement-web',
  title: 'Création & Refonte Sites Web Médico-Social',
  description:
    'Création et refonte de sites internet, portails familles et applications web Next.js pour associations et ESMS : accessibilité RGAA, SEO et RGPD.',
  imageAlt: 'Création de site web et application médico-sociale DevEvoke',
});

export default function DeveloppementWebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
