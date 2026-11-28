import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/application-mobile',
  title: 'Application Mobile Médico-Social & Terrain',
  description:
    'Applications mobiles iOS et Android sur-mesure (React Native, PWA) avec mode hors-ligne pour SESSAD, éducateurs spécialisés et équipes de terrain.',
  imageAlt: 'Application mobile médico-sociale hors-ligne DevEvoke',
});

export default function ApplicationMobileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
