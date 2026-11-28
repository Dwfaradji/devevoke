import React from 'react';
import Link from 'next/link';
import {
  Cloud,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Zap,
  CreditCard,
  Layers,
  Sparkles,
  HelpCircle,
  Server,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ServicesNavSwitcher from '@/components/ui/ServicesNavSwitcher';
import { SITE_URL, buildAbsoluteUrl } from '@/config/site';

export default function DeveloppementSaasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Développement de Plateformes SaaS & Logiciels Cloud Sur-Mesure',
    serviceType: 'Conception logicielle SaaS, multi-tenant et architecture cloud',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: SITE_URL,
      logo: buildAbsoluteUrl('/icon.png'),
      founder: {
        '@type': 'Person',
        name: 'Boucif Faradji',
        jobTitle: 'Fondateur & Développeur Full-Stack',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Perpignan',
        addressRegion: 'Occitanie',
        addressCountry: 'FR',
      },
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Occitanie' },
      { '@type': 'Country', name: 'France' },
    ],
    description:
      'Conception et développement de plateformes SaaS B2B sur-mesure sous Next.js, PostgreSQL et TypeScript par DevEvoke. Architecture multi-tenant, facturation Stripe et API REST.',
  };

  const painPoints = [
    {
      title: 'Les limites bloquantes des outils No-Code',
      desc: 'Dès que le modèle de données devient relationnel complexe ou que le volume d’utilisateurs augmente, les plateformes No-Code deviennent lentes, rigides et extrêmement coûteuses en licences mensuelles.',
    },
    {
      title: 'Devis exorbitants des grandes agences traditionnelles',
      desc: 'Facturer des chefs de projet, des directeurs de clientèle et des comités de pilotage superflus avant même d’avoir écrit la moindre ligne de code ou validé le moindre écran avec des utilisateurs.',
    },
    {
      title: 'Risque de failles de cloisonnement multi-tenant',
      desc: 'Une architecture multi-locataire mal sécurisée peut provoquer des fuites de données critiques entre clients distincts, ruinant instantanément la crédibilité de votre service SaaS.',
    },
    {
      title: 'Lenteur d’itération face aux retours utilisateurs',
      desc: 'Des mois d’attente pour la moindre mise à jour logicielle alors qu’un produit SaaS exige des déploiements continus et des ajustements hebdomadaires basés sur les usages réels.',
    },
  ];

  const pillars = [
    {
      icon: Layers,
      title: 'Architecture Multi-Tenant Étanche',
      badge: 'Sécurité & Isolation',
      desc: 'Cloisonnement strict des données entre chaque entreprise ou organisation cliente. Système d’authentification moderne (JWT / sessions sécurisées) et gestion granulaire des rôles et permissions (RBAC).',
      features: [
        'Isolation totale des bases de données',
        'Permissions administrateur, gestionnaire, membre',
        'Journal d’audit et traçabilité des actions',
        'Conformité RGPD native',
      ],
    },
    {
      icon: CreditCard,
      title: 'Monétisation & Facturation Stripe',
      badge: 'Billing & Abonnements',
      desc: 'Intégration complète de Stripe Billing pour automatiser vos revenus récurrents : abonnements mensuels ou annuels, périodes d’essai, factures conformes TVA et portail client en libre-service.',
      features: [
        'Paiement par CB, prélèvement SEPA',
        'Gestion automatisée des échecs de paiement',
        'Génération de factures PDF certifiées',
        'Quotas d’utilisation et plans tarifaires',
      ],
    },
    {
      icon: Server,
      title: 'API REST, Webhooks & Intégrations',
      badge: 'Interopérabilité',
      desc: 'Conception d’API REST documentées pour connecter votre solution aux outils du marché (CRM, ERP, messageries, comptabilité) et permettre à vos clients d’automatiser leurs flux.',
      features: [
        'Documentation OpenAPI / Swagger',
        'Webhooks sécurisés temps réel',
        'Exports de données CSV / JSON / PDF',
        'Clés d’API avec limitation de débit',
      ],
    },
    {
      icon: Zap,
      title: 'Stack Moderne & Déploiement Continu',
      badge: 'Performance & Évolutivité',
      desc: 'Développement sur une stack pérenne (Next.js, TypeScript, PostgreSQL, Prisma, Docker) capable de monter en charge sans refonte et déployable sur des serveurs souverains en France.',
      features: [
        'Temps de réponse serveur < 100ms',
        'Mises à jour sans interruption de service',
        'Sauvegardes automatisées quotidiennes',
        'Hébergement souverain France',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Quel est le budget et le délai moyen pour lancer un MVP SaaS ?',
      a: 'Un MVP SaaS robuste et prêt à être commercialisé (authentification, espace client, logique métier cœur, paiement Stripe) se conçoit généralement en 2 à 3 mois pour un budget optimisé grâce à la suppression de tout intermédiaire non technique.',
    },
    {
      q: 'Quelle est la preuve de la compétence de DevEvoke en ingénierie SaaS ?',
      a: 'DevEvoke conçoit et opère des architectures logicielles cloud complètes pour le secteur médico-social et les professionnels. Nous maîtrisons l’ensemble de la chaîne : modélisation multi-tenant étanche, UX métier intuitive, abonnements et facturation automatisés, conformité RGPD et montées de version sans interruption.',
    },
    {
      q: 'Comment s’organise la propriété intellectuelle du produit SaaS ?',
      a: 'L’intégralité de la propriété intellectuelle et des droits patrimoniaux sur le code source développé pour votre projet vous est cédée contractuellement. Vous êtes le seul propriétaire de votre actif logiciel.',
    },
    {
      q: 'Proposez-vous un accompagnement après le lancement commercial ?',
      a: 'Oui. DevEvoke assure la maintenance technique, la surveillance de l’infrastructure, les correctifs de sécurité et le développement itératif de vos nouvelles fonctionnalités au rythme des besoins de vos abonnés.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-neutral-950 pb-20 text-white">
        <Breadcrumb
          items={[
            { label: 'Nos Expertises', href: '/services' },
            { label: 'Conception de Plateformes SaaS' },
          ]}
          backLink={{ href: '/services', label: 'Retour aux services' }}
        />
        <ServicesNavSwitcher />

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5 py-12 lg:py-20">
          <div className="bg-primary-600/15 pointer-events-none absolute top-1/4 left-1/3 h-[400px] w-[550px] -translate-x-1/2 rounded-full blur-[160px]" />
          <div className="bg-secondary-600/10 pointer-events-none absolute right-1/4 bottom-1/4 h-[350px] w-[450px] rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="bg-primary-500/10 border-primary-500/20 text-primary-300 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase">
                <Cloud className="size-3.5" />
                <span>Ingénierie SaaS & Produits Cloud B2B</span>
              </div>

              <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Conception & développement de plateformes{' '}
                <span className="text-highlight">SaaS sur-mesure</span>
              </h1>

              <p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">
                Transformez votre savoir-faire métier ou votre idée de startup en une solution
                logicielle cloud B2B : architecture multi-tenant sécurisée, abonnements Stripe
                automatisés et évolutivité garantie.
              </p>

              <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="from-primary-600 via-primary-500 to-secondary-500 shadow-primary-500/25 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:opacity-95 sm:w-auto"
                >
                  <span>Parler de votre projet SaaS</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/realisations"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-medium text-neutral-200 transition-all hover:bg-white/10 sm:w-auto"
                >
                  Découvrir nos réalisations
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Multi-tenant étanche
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Paiement Stripe intégré
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  Code source 100% cédé
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Problématiques */}
        <section className="border-b border-white/5 bg-neutral-900/30 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
              <span className="section-label">
                <AlertTriangle className="size-3.5 text-amber-400" />
                Pièges Courants
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Les écueils fréquents lors de la création d’un SaaS
              </h2>
              <p className="text-base text-neutral-400">
                Concevoir un logiciel multi-utilisateurs requiert une rigueur d’ingénierie stricte
                pour éviter la dette technique et les blocages de croissance.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {painPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="card-modern space-y-3 border-l-4 border-l-rose-500/60 p-8"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-rose-400">
                    <AlertTriangle className="size-4" />
                    <span>Écueil n°0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Nos Piliers SaaS */}
        <section className="border-b border-white/5 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
              <span className="section-label">
                <Sparkles className="size-3.5" />
                Ingénierie Produit
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Les fondations techniques d’un SaaS rentable
              </h2>
              <p className="text-base text-neutral-400 sm:text-lg">
                Une architecture conçue pour accueillir des milliers d’utilisateurs avec une
                fiabilité irréprochable.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="card-modern flex flex-col justify-between space-y-6 p-8 lg:p-10"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="bg-primary-500/10 border-primary-500/20 text-primary-400 rounded-xl border p-3">
                          <Icon className="size-6" />
                        </div>
                        <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                      <p className="text-sm leading-relaxed text-neutral-300">{pillar.desc}</p>
                    </div>

                    <div className="space-y-2.5 border-t border-white/5 pt-4">
                      {pillar.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2.5 text-xs text-neutral-300"
                        >
                          <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Proof of Competence: SaaS Engineering Showcase Banner */}
        <section className="border-b border-white/5 bg-neutral-900/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="card-modern border-primary-500/30 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 sm:p-12">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="space-y-4 lg:col-span-8">
                  <div className="bg-primary-500/10 border-primary-500/20 text-primary-300 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold">
                    <Sparkles className="size-3.5" />
                    <span>Ingénierie Logicielle & Produits Cloud</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Des architectures SaaS éprouvées sur le terrain médico-social
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                    De la gestion des plannings d&apos;équipes nomades aux portails extranets
                    sécurisés, nous concevons des logiciels SaaS pensés pour simplifier le quotidien
                    des structures et associations. Modélisation multi-établissements,
                    synchronisation fluide et sécurité des données sensibles.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2 text-xs text-neutral-400">
                    <span>✓ Cloisonnement multi-entités étanche</span>
                    <span>✓ Interfaces pensées pour les soignants et éducateurs</span>
                    <span>✓ Hébergement souverain & conforme RGPD</span>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-3 lg:col-span-4 lg:items-end">
                  <Link
                    href="/realisations"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-neutral-200 sm:w-auto"
                  >
                    <span>Explorer nos réalisations SaaS</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-primary-400 hover:text-primary-300 text-xs transition-colors"
                  >
                    Échanger sur votre projet logiciel →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-b border-white/5 py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 space-y-4 text-center">
              <span className="section-label">
                <HelpCircle className="size-3.5" />
                Foire Aux Questions
              </span>
              <h2 className="text-3xl font-bold text-white">
                Questions fréquentes sur la création d’un SaaS
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="card-modern space-y-2 p-6">
                  <h3 className="flex items-start gap-2 text-base font-bold text-white sm:text-lg">
                    <span className="text-primary-400">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="pl-6 text-sm leading-relaxed text-neutral-300">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="bg-gradient-to-b from-neutral-950 to-neutral-900 py-20">
          <div className="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Prêt à concrétiser votre produit SaaS ?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-neutral-300">
              Échangeons pendant 30 minutes avec Boucif Faradji pour évaluer la faisabilité
              technique de votre logiciel cloud et définir la feuille de route vers votre MVP.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Link
                href="/contact"
                className="from-primary-500 to-secondary-500 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:opacity-95 sm:w-auto"
              >
                <span>Planifier un échange de cadrage</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-neutral-200 transition-all hover:bg-white/10 sm:w-auto"
              >
                Explorer tous nos services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
