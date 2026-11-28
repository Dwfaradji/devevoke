import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/developpement-saas',
  title: 'Développement SaaS & Plateformes Cloud',
  description:
    'Conception de plateformes SaaS multi-établissements pour le médico-social et l’associatif : cloisonnement des données, droits RBAC et hébergement France.',
  imageAlt: 'Développement SaaS médico-social sur-mesure DevEvoke',
});

export default function DeveloppementSaasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
