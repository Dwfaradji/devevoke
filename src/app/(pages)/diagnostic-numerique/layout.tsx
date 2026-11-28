import type { Metadata } from 'next';
import { createPageMetadata } from '@/config/site';

export const metadata: Metadata = createPageMetadata({
  path: '/diagnostic-numerique',
  title: 'Diagnostic Numérique Médico-Social Gratuit',
  description:
    'Évaluez en 3 minutes la maturité numérique de votre structure médico-sociale (IME, SESSAD, ESAT, EHPAD) et recevez des recommandations concrètes.',
  imageAlt: 'Diagnostic numérique médico-social gratuit DevEvoke',
});

export default function DiagnosticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
