import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/automatisation',
  title: 'Automatisation & Interopérabilité ESMS',
  description:
    'Suppression des doubles saisies et interopérabilité entre logiciels médico-sociaux : connecteurs API sécurisés, bilans automatisés et pilotage CPOM.',
  imageAlt: 'Automatisation des processus médico-sociaux DevEvoke',
});

export default function AutomatisationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
