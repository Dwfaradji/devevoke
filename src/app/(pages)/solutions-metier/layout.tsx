import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/solutions-metier',
  title: 'Logiciels Métier & Remplacement Excel',
  description:
    'Développement de logiciels internes sur-mesure pour ESMS et associations : remplacement des tableurs Excel, centralisation et tableaux de bord.',
  imageAlt: 'Logiciels métier sur-mesure DevEvoke',
});

export default function SolutionsMetierLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
