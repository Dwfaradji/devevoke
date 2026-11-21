import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Lock, Server, FileCheck2, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import TrustBar from '@/components/Home/trustBar';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ServicesNavSwitcher from '@/components/ui/ServicesNavSwitcher';

export const metadata: Metadata = {
  title: 'Sécurité Numérique, Hébergement France & Conformité RGPD Médico-Social',
  description:
    'Standards de sécurité et protection des données appliqués par DevEvoke pour les établissements et associations médico-sociales : conformité stricte au RGPD, hébergement souverain en France, chiffrement et contrôle d’accès RBAC.',
  alternates: {
    canonical: 'https://www.devevoke.com/securite-et-conformite',
  },
  openGraph: {
    title: 'Sécurité & Protection des Données Médico-Sociales | DevEvoke',
    description:
      'Engagements techniques et organisationnels de DevEvoke pour garantir la confidentialité et la sécurité des données des établissements médico-sociaux.',
    url: 'https://www.devevoke.com/securite-et-conformite',
    siteName: 'DevEvoke',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
        alt: 'Sécurité et conformité RGPD médico-sociale DevEvoke',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function SecuriteConformitePage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-16 sm:pb-24">
      <Breadcrumb
        items={[
          { label: 'Nos Expertises', href: '/services' },
          { label: 'Sécurité & Hébergement Souverain' },
        ]}
        backLink={{ href: '/services', label: 'Retour aux services' }}
      />
      <ServicesNavSwitcher />

      {/* Background radial glow */}
      <div className="bg-primary-600/10 pointer-events-none absolute top-20 left-1/2 h-[500px] w-full max-w-5xl -translate-x-1/2 rounded-full blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="section-label mb-4 inline-block">
            Confidentialité & Protection des Données
          </span>
          <h1 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
            Sécurité Web & Conformité RGPD pour le{' '}
            <span className="text-highlight">secteur médico-social</span>
          </h1>
          <p className="text-muted text-base leading-relaxed sm:text-lg">
            Dans le secteur médico-social, la protection des informations relatives aux usagers, aux
            familles et aux équipes constitue un prérequis incontournable. Voici nos engagements
            techniques et organisationnels pour concevoir des applications fiables et sécurisées.
          </p>
        </header>

        {/* Visuel Datacenter Souverain */}
        <div className="glass group relative mb-16 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <div className="relative h-64 w-full overflow-hidden sm:h-80">
            <Image
              src="/images/about/about_sovereign_security.webp"
              alt="Couloir de serveurs sécurisés en centre de données souverain français"
              width={1400}
              height={600}
              className="size-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="absolute right-6 bottom-6 left-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span className="mb-2 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Datacenters en France métropolitaine
                </span>
                <p className="text-lg font-semibold text-white sm:text-xl">
                  Infrastructures certifiées ISO 27001 & Droit européen
                </p>
              </div>
              <span className="glass rounded-xl border border-white/10 px-4 py-2 text-xs text-neutral-300">
                Chiffrement TLS 1.3 & AES-256
              </span>
            </div>
          </div>
        </div>

        {/* Certifications & Conformités Clés */}
        <div className="mb-16 overflow-hidden rounded-3xl">
          <TrustBar />
        </div>

        {/* 4 Piliers de Sécurité */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="glass space-y-4 rounded-3xl border border-white/10 p-8">
            <div className="bg-primary-500/10 border-primary-500/20 text-primary-400 flex h-12 w-12 items-center justify-center rounded-xl border">
              <FileCheck2 className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-white">1. Conformité Stricte au RGPD</h2>
            <p className="text-muted text-sm leading-relaxed">
              Nous appliquons les principes de <em>Privacy by Design</em> (protection des données
              dès la conception) et de <em>Privacy by Default</em>. Les formulaires et bases de
              données respectent le principe de minimisation : seules les données strictement
              nécessaires au fonctionnement du service sont collectées.
            </p>
          </div>

          <div className="glass space-y-4 rounded-3xl border border-white/10 p-8">
            <div className="bg-secondary-500/10 border-secondary-500/20 text-secondary-400 flex h-12 w-12 items-center justify-center rounded-xl border">
              <Server className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-white">2. Hébergement Souverain en France</h2>
            <p className="text-muted text-sm leading-relaxed">
              Les applications web et plateformes conçues par DevEvoke (notamment la solution SaaS
              Floticar) sont hébergées sur des infrastructures cloud situées exclusivement en France
              (centres de données sécurisés ISO 27001). Vos données restent soumises au droit
              européen et français.
            </p>
          </div>

          <div className="glass space-y-4 rounded-3xl border border-white/10 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-white">3. Chiffrement & Protection Réseau</h2>
            <p className="text-muted text-sm leading-relaxed">
              Toutes les communications transitent par des protocoles chiffrés récents (HTTPS, TLS
              1.3). Les mots de passe sont hachés avec des algorithmes robustes (bcrypt/argon2). Les
              données sensibles stockées bénéficient d’un chiffrement au repos (AES-256).
            </p>
          </div>

          <div className="glass space-y-4 rounded-3xl border border-white/10 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-white">
              4. Contrôle d’Accès & Traçabilité (RBAC)
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Les accès sont cloisonnés par profils et rôles stricts (Directeur, Chef de service,
              Éducateur, Personnel administratif). Chaque utilisateur n’accède qu’aux informations
              nécessaires à sa mission, avec journalisation des connexions et actions sensibles.
            </p>
          </div>
        </div>

        {/* Détails Pratiques */}
        <div className="glass mb-16 space-y-8 rounded-3xl border border-white/10 p-8 sm:p-12">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Nos Pratiques de Sécurité Applicative
          </h2>

          <div className="text-muted space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-primary-400 mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <strong className="text-white">Validation stricte côté serveur :</strong>
                <p className="mt-0.5">
                  Chaque entrée utilisateur est validée et assainie pour prévenir les injections
                  SQL, failles XSS et attaques CSRF.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-primary-400 mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <strong className="text-white">Sauvegardes régulières automatisées :</strong>
                <p className="mt-0.5">
                  Sauvegardes quotidiennes externalisées et testées pour garantir un plan de reprise
                  d’activité rapide en cas d’incident.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-primary-400 mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <strong className="text-white">Transparence & Droit des personnes :</strong>
                <p className="mt-0.5">
                  Possibilité technique d’exporter, modifier ou supprimer les données d’un
                  utilisateur sur simple demande, conformément aux articles 15 à 22 du RGPD.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass border-primary-500/20 rounded-3xl border p-8 text-center sm:p-12">
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Vous avez des questions sur la sécurité de vos outils ?
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-xl text-sm sm:text-base">
            Échangez avec nos architectes pour étudier vos protocoles internes et sécuriser les
            accès de votre association médico-sociale.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary text-sm font-semibold">
              <span>Échanger sur votre projet</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/diagnostic-numerique" className="btn-outline text-sm">
              Faire le diagnostic numérique (3 min)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
