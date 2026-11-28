import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Server,
  HeadphonesIcon,
  Sparkles,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';
import { SITE_URL } from '@/config/site';

export default function DeveloppementLogicielMedicoSocialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Développement Logiciel Médico-Social Sur-Mesure',
    serviceType:
      'Conception et développement de logiciels sur-mesure pour établissements médico-sociaux',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: SITE_URL,
    },
    description:
      'Service de développement informatique d’applications web, logiciels ERP et plateformes métiers pour structures sociales et médico-sociales.',
  };

  const etapes = [
    {
      num: '01',
      title: 'Audit des Usages & Cahier des Charges',
      desc: 'Analyse précise des flux d’informations au sein de votre structure, entretiens avec les directions et les soignants/éducateurs.',
    },
    {
      num: '02',
      title: 'Architecture & UX Design Métier',
      desc: 'Conception de maquettes interactives testées avec vos utilisateurs. Définition des règles de sécurité et des droits d’accès.',
    },
    {
      num: '03',
      title: 'Développement Agile & Sécurisé',
      desc: 'Développement itératif (Next.js, TypeScript, PostgreSQL), protocoles de chiffrement et tests d’intégration continus.',
    },
    {
      num: '04',
      title: 'Déploiement Sécurisé & Formation',
      desc: 'Mise en production sur infrastructure souveraine en France, formation pratique des équipes et accompagnement au changement.',
    },
  ];

  const atouts = [
    {
      icon: <Layers className="text-primary-400 size-6" />,
      title: 'Un outil 100% adapté à vos protocoles',
      desc: 'Finies les fonctionnalités superflues ou les formulaires rigides imposés par les progiciels du marché. Chaque écran répond exactement à votre méthode de travail.',
    },
    {
      icon: <Server className="text-secondary-400 size-6" />,
      title: 'Hébergement Souverain & RGPD',
      desc: 'Vos données sont hébergées en France sur des serveurs sécurisés garantissant une haute disponibilité et une conformité rigoureuse au RGPD.',
    },
    {
      icon: <Cpu className="text-accent size-6" />,
      title: 'Interopérabilité & Connexion API',
      desc: 'Intégrez facilement votre nouveau logiciel avec vos systèmes existants : paie, comptabilité, messagerie sécurisée MSSanté et annuaires.',
    },
    {
      icon: <HeadphonesIcon className="size-6 text-emerald-400" />,
      title: 'Support réactif & Évolutivité',
      desc: 'Un interlocuteur technique dédié basé en France. Votre logiciel évolue avec vos besoins et les nouvelles exigences réglementaires.',
    },
  ];

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
            { label: 'Développement Logiciel Sur-Mesure' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <div className="glass border-primary-500/30 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="bg-primary-400 h-2 w-2 animate-pulse rounded-full" />
            <span className="text-xs font-medium tracking-wide text-gray-200 uppercase sm:text-sm">
              Ingénierie Logicielle Sur-Mesure
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-6xl">
            Développement de logiciels métiers pour le{' '}
            <span className="text-gradient drop-shadow-sm">secteur médico-social</span>
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Concevez une application web ou un progiciel parfaitement aligné sur le fonctionnement
            de votre établissement médico-social (IME, SESSAD, ESAT, EHPAD) ou de votre association
            gestionnaire.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Présenter votre cahier des charges
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/solutions-medico-social"
              className="btn-outline w-full text-base sm:w-auto"
            >
              Voir nos autres solutions
            </Link>
          </div>
        </header>

        {/* ATOUTS DU SUR-MESURE */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="section-label">Pourquoi le Sur-Mesure ?</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Pourquoi choisir un développement sur-mesure pour votre établissement ?
              </h2>
              <p className="text-muted text-lg">
                Les progiciels généralistes du marché imposent souvent des interfaces lourdes, des
                coûts de licence exorbitants et une rigidité qui freine l’adhésion des
                professionnels.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {atouts.map((atout, idx) => (
                <div
                  key={idx}
                  className="glass flex flex-col justify-between rounded-3xl border border-white/5 p-8 sm:p-10"
                >
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/5">
                      {atout.icon}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">{atout.title}</h3>
                    <p className="text-muted text-base leading-relaxed">{atout.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXEMPLES D'APPLICATIONS DÉVELOPPÉES */}
        <section className="bg-surface/30 border-y border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="section-label">Cas d'Usage Concrets</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Quelles applications logicielles pouvons-nous développer pour vous ?
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  De la gestion opérationnelle quotidienne au pilotage stratégique de plusieurs
                  établissements, nous concevons des logiciels adaptés à tous les services :
                </p>

                <ul className="space-y-4 pt-2">
                  {[
                    'Dossier usager personnalisé et transmissions ciblées entre soignants et éducateurs',
                    'Outil de planification et d’optimisation des tournées d’intervention pour SESSAD',
                    'Portail de communication sécurisé avec les familles et représentants légaux',
                    'Gestion d’ateliers de production et facturation commerciale pour ESAT',
                    'Outil de suivi logistique, plannings de réservation et gestion des ressources partagées',
                    'Tableaux de bord d’activité et reporting réglementaire pour directions générales',
                  ].map((item, i) => (
                    <li key={i} className="text-muted flex items-start gap-3 text-sm sm:text-base">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 lg:col-span-6">
                <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image
                    src="/images/home/workshop_coconception.webp"
                    alt="Atelier de co-conception d'application métier médico-sociale"
                    width={800}
                    height={460}
                    className="h-[260px] w-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[300px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-85" />
                  <div className="absolute right-6 bottom-4 left-6">
                    <span className="text-primary-300 text-xs font-bold tracking-widest uppercase">
                      Co-conception UX
                    </span>
                    <p className="text-sm font-medium text-white">
                      Un logiciel taillé sur-mesure pour vos protocoles internes
                    </p>
                  </div>
                </div>

                <div className="glass-strong space-y-6 rounded-3xl border border-white/10 p-8 shadow-2xl">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-white sm:text-2xl">
                    <Sparkles className="text-primary-400 size-6" />
                    Stack Technologique Moderne & Durable
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Nous refusons les technologies obsolètes. Nos développements s’appuient sur les
                    frameworks les plus performants du marché garantissant vitesse, maintenabilité
                    et sécurité :
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <span className="mb-1 block font-bold text-white">Next.js & React</span>
                      <span className="text-muted text-xs">
                        Interfaces ultra-réactives, légères et ergonomiques
                      </span>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <span className="mb-1 block font-bold text-white">Node & TypeScript</span>
                      <span className="text-muted text-xs">
                        Typage strict et logique métier sécurisée
                      </span>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <span className="mb-1 block font-bold text-white">PostgreSQL & Redis</span>
                      <span className="text-muted text-xs">
                        Bases relationnelles chiffrées et haute performance
                      </span>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <span className="mb-1 block font-bold text-white">
                        Docker & Cloud Souverain
                      </span>
                      <span className="text-muted text-xs">
                        Conteneurisation sécurisée sur serveurs situés en France
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTHODOLOGIE DE DÉVELOPPEMENT */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="section-label">Processus de Réalisation</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Les étapes d’un projet logiciel avec DevEvoke
              </h2>
              <p className="text-muted text-lg">
                Une méthode structurée pour respecter vos budgets, vos délais et garantir l'adhésion
                totale de vos équipes.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {etapes.map((etape, idx) => (
                <div
                  key={idx}
                  className="glass flex flex-col justify-between rounded-3xl border border-white/5 p-8"
                >
                  <div>
                    <span className="text-primary-400 mb-4 block font-mono text-3xl font-extrabold">
                      {etape.num}
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-white">{etape.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{etape.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden px-4 py-24">
          <div className="from-primary-500/10 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          <div className="glass-strong border-primary-500/30 relative z-10 mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-[0_0_60px_rgba(59,130,246,0.2)] sm:p-16">
            <span className="section-label mb-4 inline-block">Concrétisons votre outil</span>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
              Vous avez un projet de développement logiciel médico-social ?
            </h2>
            <p className="text-muted mx-auto mb-10 max-w-2xl text-lg sm:text-xl">
              Discutez de votre projet avec un consultant DevEvoke. Nous établissons un diagnostic
              clair et un devis transparent sans engagement.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Prendre contact avec nos architectes
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/agence-digitale-medico-social" className="btn-outline text-base">
                Découvrir l'agence médico-sociale
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
