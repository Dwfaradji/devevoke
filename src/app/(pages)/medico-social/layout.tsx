import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/medico-social',
  title: 'Transformation Numérique Médico-Social',
  description:
    'Accompagnement numérique des ESMS (IME, SESSAD, DITEP, ESAT, EHPAD) et associations : modernisation des outils métiers, mobilité terrain et RGPD.',
  imageAlt: 'Transformation numérique médico-social DevEvoke',
});

export default function MedicoSocialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
