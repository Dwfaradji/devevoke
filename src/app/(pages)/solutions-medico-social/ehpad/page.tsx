import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Building, Heart, ShieldCheck, ArrowRight, Smartphone } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export const metadata: Metadata = {
  title: 'Transformation Numérique & Logiciels pour EHPAD',
  description:
    'Solutions digitales pour EHPAD et résidences autonomie : transmissions d’équipes ciblées, portail familles, allègement de la charge administrative et conformité RGPD.',
  keywords: [
    'logiciel EHPAD',
    'solution numérique EHPAD',
    'transformation numérique EHPAD',
    'portail famille EHPAD',
    'transmissions soignantes EHPAD',
    'logiciel gestion EHPAD',
    'DevEvoke',
  ],
  alternates: {
    canonical: 'https://www.devevoke.com/solutions-medico-social/ehpad',
  },
  openGraph: {
    title: 'Transformation Numérique & Logiciels pour EHPAD | DevEvoke',
    description:
      'Gagnez du temps administratif et facilitez le quotidien de vos équipes grâce à des outils ergonomiques conformes au RGPD.',
    url: 'https://www.devevoke.com/solutions-medico-social/ehpad',
    siteName: 'DevEvoke',
    images: [
      { url: '/icon.png', width: 800, height: 600, alt: 'Solutions logicielles pour EHPAD' },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SolutionsEhpadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques et Logiciels pour EHPAD',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
    description:
      'Conception d’outils numériques pour les EHPAD : transmissions de soins, portail famille et allègement administratif.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="overflow-hidden pb-24">
        <Breadcrumb
          items={[
            { label: 'Pôle Médico-Social', href: '/medico-social' },
            { label: 'Solutions', href: '/solutions-medico-social' },
            { label: 'EHPAD' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <div className="glass border-primary-500/30 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <Building className="text-primary-400 size-4" />
            <span className="text-xs font-medium tracking-wide text-gray-200 uppercase sm:text-sm">
              Grand Âge & Dépendance
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-6xl">
            Solutions numériques et logiciels pour{' '}
            <span className="text-gradient drop-shadow-sm">EHPAD & Résidences Autonomie</span>
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Libérez vos soignants de la lourdeur administrative, fluidifiez les transmissions au lit
            du résident et offrez aux familles un espace d’échange transparent et rassurant.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Demander un audit pour votre EHPAD
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/securite-et-conformite" className="btn-outline w-full text-base sm:w-auto">
              Nos garanties Sécurité & RGPD
            </Link>
          </div>
        </header>

        {/* ENJEUX EHPAD */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="section-label">Défis Soignants & Qualité</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Redonner du temps soignant auprès des personnes âgées
                </h2>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  Les soignants en EHPAD (aides-soignantes, infirmières, psychologues) passent trop
                  de temps devant des logiciels administratifs complexes à saisir des informations
                  en double, au détriment du temps passé auprès des résidents.
                </p>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  Notre philosophie : concevoir des interfaces ultra-épurées, tactiles et rapides,
                  utilisables sur tablette ou smartphone directement dans la chambre, pour saisir
                  les constantes, valider les repas ou consigner un événement en moins de 30
                  secondes.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image
                    src="/images/home/ehpad_coordination_life.webp"
                    alt="Coordinatrice de vie et résidente en EHPAD partageant un moment chaleureux avec tablette"
                    width={800}
                    height={520}
                    className="h-[360px] w-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
                  />
                  <div className="from-bg absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-85" />
                  <div className="absolute right-6 bottom-6 left-6">
                    <span className="bg-primary-500/20 text-primary-300 border-primary-500/30 mb-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
                      Lien Social & Qualité de Vie
                    </span>
                    <p className="text-sm font-medium text-white sm:text-base">
                      Le numérique comme vecteur de lien entre résidents, soignants et familles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="bg-primary-500/10 text-primary-400 mb-4 flex size-12 items-center justify-center rounded-xl">
                  <Smartphone className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">Transmissions Ciblées Mobiles</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Saisie rapide de la méthode DAR (Donnée, Action, Résultat) sur tablette soignante
                  avec alertes automatiques à l'IDEC.
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="bg-secondary-500/10 text-secondary-400 mb-4 flex size-12 items-center justify-center rounded-xl">
                  <Heart className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">Portail Familles Sécurisé</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Partage des activités, gazette de l’établissement, menus et messages rassurants
                  pour impliquer les proches dans le quotidien.
                </p>
              </div>

              <div className="glass rounded-2xl border border-white/5 p-6 transition-all hover:border-white/20">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">Hébergement Souverain & RGPD</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Hébergement souverain sur serveurs en France, chiffrement TLS et conformité
                  stricte aux exigences de protection des données.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20">
          <div className="glass-strong border-primary-500/30 mx-auto max-w-4xl rounded-3xl border p-10 text-center sm:p-14">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Modernisez le système d’information de votre EHPAD
            </h2>
            <p className="text-muted mx-auto mb-8 max-w-2xl text-base sm:text-lg">
              Échangez avec nos spécialistes du secteur sanitaire et médico-social pour préparer
              votre transition numérique.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Contacter un expert EHPAD
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/medico-social" className="btn-outline text-base">
                Voir le Pôle Médico-Social
              </Link>
            </div>

            {/* Maillage inter-établissements */}
            <div className="text-muted mt-12 border-t border-white/10 pt-8 text-xs sm:text-sm">
              <span className="mb-3 block font-semibold tracking-wider text-white/70 uppercase">
                Découvrez également nos solutions pour :
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <Link
                  href="/solutions-medico-social/ime"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  IME
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/sessad"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  SESSAD
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/esat"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  ESAT
                </Link>
                <span>•</span>
                <Link
                  href="/solutions-medico-social/associations"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  Associations gestionnaires
                </Link>
                <span>•</span>
                <Link
                  href="/developpement-logiciel-medico-social"
                  className="hover:text-primary-400 underline underline-offset-4 transition-colors"
                >
                  Logiciel médico-social sur-mesure
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
