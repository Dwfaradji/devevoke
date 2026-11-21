import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import floticarImg from '@/images/projects/floticar-dashboard.webp';
import {
  CalendarCheck,
  Wrench,
  AlertTriangle,
  Smartphone,
  FileSpreadsheet,
  ArrowRight,
  TrendingDown,
  Clock,
  Building,
  FileCheck,
  QrCode,
  Sparkles,
  Layers,
  Calculator,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function FloticarCaseStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Floticar (par DevEvoke)',
    operatingSystem: 'Web, iOS, Android (PWA)',
    applicationCategory: 'BusinessApplication',
    description:
      'Étude de cas : solution SaaS de gestion de flotte et de suivi des véhicules développée par DevEvoke pour les associations médico-sociales, IME et SESSAD.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Démonstration gratuite de 14 jours sans engagement',
    },
    creator: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
    },
  };

  const fonctionnalites = [
    {
      icon: <QrCode className="text-primary-400 size-6" />,
      title: 'Carnet de bord par QR Code (PWA)',
      desc: 'Aucune application à installer depuis les stores. Le conducteur flashe le QR code collé sur le tableau de bord avec son smartphone pour consigner le départ et le retour en 10 secondes.',
    },
    {
      icon: <CalendarCheck className="text-secondary-400 size-6" />,
      title: 'Planning de réservation partagé',
      desc: 'Visualisation en temps réel de la disponibilité des véhicules. Les éducateurs et soignants réservent en 3 clics selon leur planning d’intervention sans risque de doublon.',
    },
    {
      icon: <Wrench className="text-accent size-6" />,
      title: 'Alertes contrôles techniques & vidanges',
      desc: 'Ne ratez plus aucun contrôle technique obligatoire, vidange ou révision. Des alertes proactives avertissent les gestionnaires de parc pour garantir la sécurité des personnes accompagnées.',
    },
    {
      icon: <FileCheck className="size-6 text-emerald-400" />,
      title: 'Signalement immédiat d’anomalies & photos',
      desc: 'Prise de photo instantanée en cas d’anomalie ou de rayure au moment de la restitution du véhicule. Traçabilité complète des conducteurs pour responsabiliser les équipes.',
    },
    {
      icon: <TrendingDown className="size-6 text-pink-400" />,
      title: 'Suivi carburant & imputation des amendes',
      desc: 'Zéro amende majorée non imputée. Relevé kilométrique rigoureux et export comptable immédiat pour vos arrêtés de compte et vos financeurs (ARS, Départements).',
    },
    {
      icon: <Building className="size-6 text-cyan-400" />,
      title: 'Console multi-sites & multi-établissements',
      desc: 'Idéal pour les associations gestionnaires pilotant plusieurs IME, SESSAD ou ESAT. Chaque établissement gère son parc tout en offrant une vue consolidée à la direction générale.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="selection:bg-primary-500/30 selection:text-primary-200 min-h-screen bg-neutral-950 text-white">
        <Breadcrumb
          items={[
            { label: 'Réalisations', href: '/realisations' },
            { label: 'Étude de cas Floticar' },
          ]}
          backHref="/realisations"
          backLabel="Retour aux réalisations"
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5 py-12 md:py-16">
          <div className="from-primary-900/20 pointer-events-none absolute inset-0 bg-radial via-neutral-950/80 to-neutral-950" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="bg-primary-500/10 border-primary-500/30 text-primary-300 mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold">
              <Sparkles className="size-3.5" />
              <span>Étude de Cas Produit — Conçu & Développé par DevEvoke</span>
            </div>

            <h1 className="mx-auto mb-6 max-w-4xl text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Floticar : La dématérialisation du carnet de bord pour les{' '}
              <span className="text-highlight">flottes médico-sociales</span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Comment DevEvoke a créé une plateforme SaaS complète pour éliminer les carnets de bord
              papier, automatiser le suivi des entretiens et sécuriser la gestion des véhicules
              associatifs (IME, SESSAD, ESAT, EHPAD).
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://floticar.com/demande-de-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="from-primary-500 to-secondary-500 shadow-primary-500/20 flex items-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-95"
              >
                <span>Demander une démo de 14 jours</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white"
              >
                Parler d’un projet sur-mesure
              </Link>
            </div>
          </div>
        </section>

        {/* Visual Showcase: Field Photography + Dashboard UI Side-by-Side */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Field Photo: Minibus QR Code Scan */}
            <div className="group relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-900 shadow-2xl">
                <Image
                  src="/images/home/floticar_real_action.webp"
                  alt="Conducteur d'une association médico-sociale scannant le QR code sur le minibus de tournée"
                  width={600}
                  height={500}
                  className="h-[380px] w-full object-cover object-center brightness-[0.95] transition-transform duration-700 group-hover:scale-102 sm:h-[440px]"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-neutral-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <Smartphone className="text-secondary-400 size-3.5" />
                  <span>Côté Conducteur : Scan QR Code</span>
                </div>

                <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/10 bg-neutral-900/90 p-4 backdrop-blur-md">
                  <span className="block text-xs font-bold text-white">
                    Zéro application à installer
                  </span>
                  <p className="text-[11px] leading-snug text-neutral-300">
                    Fonctionne sur n&apos;importe quel smartphone en 10 secondes pour consigner le
                    départ et le retour.
                  </p>
                </div>
              </div>
            </div>

            {/* Dashboard UI: Fleet Console for Directors */}
            <div className="group relative lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-900 shadow-2xl">
                <Image
                  src={floticarImg}
                  alt="Interface du logiciel Floticar développé par DevEvoke pour le médico-social"
                  width={1920}
                  height={1080}
                  className="h-[380px] w-full object-cover object-top opacity-95 transition-opacity duration-500 group-hover:opacity-100 sm:h-[440px]"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />

                <div className="bg-primary-950/80 border-primary-500/30 text-primary-200 absolute top-4 left-4 rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
                  Côté Direction : Cockpit Centralisé
                </div>

                <div className="pointer-events-none absolute right-4 bottom-4 left-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <span className="text-primary-400 block text-[11px] font-bold tracking-wider uppercase">
                      Suivi Multi-Établissements
                    </span>
                    <p className="text-sm font-semibold text-white sm:text-base">
                      Contrôles techniques, alertes révisions et imputation des amendes
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                    SaaS Souverain en France
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Problem */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="text-primary-400 block text-xs font-semibold tracking-wider uppercase">
                  Contexte & Problématique
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Pourquoi la gestion de flotte était une source de stress pour les associations
                </h2>
                <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                  Dans une structure médico-sociale, le véhicule n’est pas un luxe : c’est un outil
                  opérationnel indispensable pour amener des enfants à l’école, permettre aux
                  éducateurs nomades de visiter les familles ou véhiculer des résidents.
                </p>
                <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                  Pourtant, la plupart des établissements fonctionnaient encore avec des carnets
                  papier dans la boîte à gants, des stylos manquants, des amendes non attribuées et
                  des contrôles techniques oubliés. Face à ce constat de terrain récurrent, DevEvoke
                  a décidé de concevoir une réponse logicielle moderne et légère :{' '}
                  <strong>Floticar</strong>.
                </p>
              </div>

              <div className="space-y-4 lg:col-span-6">
                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-neutral-900/60 p-5">
                  <AlertTriangle className="mt-1 size-6 shrink-0 text-amber-400" />
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-white">
                      Responsabilité juridique & sécurité
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      Contrôles techniques dépassés ou pneus usés : Floticar prévient tout risque en
                      alertant immédiatement le gestionnaire avant l’échéance critique.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-neutral-900/60 p-5">
                  <Clock className="text-secondary-400 mt-1 size-6 shrink-0" />
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-white">
                      Conflits de plannings et véhicules introuvables
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      Fini les doubles réservations de dernière minute : chaque membre du personnel
                      visualise en temps réel les véhicules libres et les conducteurs en cours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-neutral-900/60 p-5">
                  <FileSpreadsheet className="text-primary-400 mt-1 size-6 shrink-0" />
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-white">
                      Justification kilométrique et audits ARS
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      Exportation simplifiée des données kilométriques et de carburant pour les
                      audits budgétaires des financeurs publics (ARS, Départements).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="border-y border-white/5 bg-neutral-900/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="text-secondary-400 mb-2 block text-xs font-semibold tracking-wider uppercase">
                Fonctionnalités Clés
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Une architecture conçue pour l’adoption immédiate
              </h2>
              <p className="text-sm text-neutral-400 sm:text-base">
                Aucune formation complexe requise. Tout est pensé pour que le personnel de terrain
                adopte l’outil dès le premier trajet.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {fonctionnalites.map((f, idx) => (
                <div
                  key={idx}
                  className="hover:border-primary-500/30 space-y-3 rounded-2xl border border-white/5 bg-neutral-900/80 p-6 transition-all"
                >
                  <div className="w-fit rounded-xl border border-white/10 bg-white/5 p-2.5">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{f.title}</h3>
                  <p className="text-xs leading-relaxed text-neutral-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simulateur Flotte Automobile (sur Floticar) */}
        <section className="border-b border-white/5 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="glass-strong border-secondary-500/20 relative overflow-hidden rounded-3xl border p-8 text-center sm:p-12">
              <div className="bg-secondary-500/10 border-secondary-500/20 text-secondary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
                <Sparkles className="size-3.5" />
                <span>Simulateur interactif Floticar</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                Estimez les gains potentiels pour votre flotte
              </h2>
              <p className="text-muted mx-auto mb-8 max-w-2xl text-xs sm:text-sm">
                Calculez en quelques clics les économies administratives, le carburant et les coûts
                d&apos;amendes évités grâce au simulateur officiel Floticar.
              </p>
              <Link
                href="https://floticar.com/simulateur"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <Calculator className="size-4" />
                <span>Lancer le simulateur sur Floticar</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Closing Section: Agency Know-How & Bridge to Other Projects */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="border-primary-500/40 relative space-y-6 rounded-3xl border bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 p-8 text-center shadow-2xl sm:p-14">
            <span className="bg-primary-500/10 border-primary-500/30 text-primary-300 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold">
              <Layers className="size-3.5" />
              <span>Savoir-faire DevEvoke en Ingénierie Logicielle</span>
            </span>

            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Ce projet illustre notre capacité à concevoir des solutions adaptées à vos réalités
            </h2>

            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-neutral-300 sm:text-base">
              Floticar n’est pas le seul outil que nous pouvons vous apporter : c’est la
              démonstration concrète de notre savoir-faire. Vous avez un besoin métier spécifique
              (gestion de plannings, suivi d’usagers, portail familles, dématérialisation) ? Nous
              construisons la solution qui vous ressemble.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="from-primary-500 to-secondary-500 shadow-primary-500/25 flex items-center gap-2 rounded-xl bg-gradient-to-r px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-95"
              >
                <span>Parler de votre projet avec DevEvoke</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://floticar.com/demande-de-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white"
              >
                Demander une démo de Floticar
              </Link>
              <Link
                href="/logiciel-gestion-vehicules-medico-social"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-semibold text-neutral-950 transition-colors hover:bg-neutral-200 sm:w-auto"
              >
                Gestion de flotte médico-sociale
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
