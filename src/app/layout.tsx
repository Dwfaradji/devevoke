// layout.tsx
import React from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import PageTransition from '@/components/ui/PageTransition';
import { Metadata as NextMetadata } from 'next/dist/lib/metadata/types/metadata-interface';
import GoogleAnalytics from '@/lib/GoogleAnalytics';
import AppHead from '@/config/AppHead';
import FloatingQuickNav from '@/components/ui/FloatingQuickNav';
import { SITE_URL, SITE_NAME, buildAbsoluteUrl } from '@/config/site';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-var',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk-var',
  display: 'swap',
});

export const metadata: NextMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DevEvoke | Solutions Digitales Médico-Social',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Agence digitale médico-sociale : logiciels métiers, applications mobiles, SaaS et sites web sur-mesure pour ESMS, associations, IME, SESSAD et EHPAD.',
};

export const viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'DevEvoke',
        url: SITE_URL,
        logo: buildAbsoluteUrl('/icon.png'),
        description:
          'Agence digitale française spécialisée dans la conception de solutions numériques et le développement sur-mesure pour le secteur médico-social (ESMS, associations gestionnaires, IME, SESSAD, DITEP, ESAT, EHPAD) : logiciels métiers, applications web et mobiles, plateformes SaaS et automatisation.',
        founder: {
          '@type': 'Person',
          name: 'Boucif Faradji',
          jobTitle: 'Fondateur & Développeur Full-Stack',
        },
        sameAs: ['https://www.linkedin.com/company/devevoke/', 'https://github.com/Dwfaradji'],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          email: 'contact@devevoke.com',
          availableLanguage: ['French'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'DevEvoke',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: 'DevEvoke',
        image: buildAbsoluteUrl('/icon.png'),
        description:
          'Agence digitale basée à Perpignan (Occitanie) accompagnant les établissements médico-sociaux, associations et organisations partout en France dans le développement web Next.js, les applications mobiles, les plateformes SaaS et les logiciels métiers sur-mesure.',
        url: SITE_URL,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Perpignan',
          addressRegion: 'Occitanie',
          postalCode: '66000',
          addressCountry: 'FR',
        },
        areaServed: {
          '@type': 'Country',
          name: 'France',
        },
        priceRange: '€€€',
      },
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <GoogleAnalytics GA_TRACKING_ID={String(process.env.GA_TRACKING_ID)} />
      <AppHead />
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen font-sans antialiased selection:bg-sky-500/30 selection:text-white`}
      >
        {/* Lien d'accès rapide (Skip Link) pour l'accessibilité RGAA / WCAG */}
        <a
          href="#main-content"
          className="focus:bg-primary-500 sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-xl focus:px-4 focus:py-2.5 focus:font-semibold focus:text-white focus:shadow-2xl focus:ring-2 focus:ring-white focus:outline-none"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-7xl outline-none">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingQuickNav />
      </body>
    </html>
  );
}
