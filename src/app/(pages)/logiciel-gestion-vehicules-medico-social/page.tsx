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
  ShieldCheck,
  TrendingDown,
  Clock,
  Building,
  FileCheck,
  Calculator,
  Sparkles,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export default function LogicielGestionVehiculesMedicoSocialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Floticar',
    operatingSystem: 'Web, iOS, Android (PWA)',
    applicationCategory: 'BusinessApplication',
    description:
      'Solution SaaS de gestion de flotte et de suivi des véhicules adaptée aux besoins des associations et établissements médico-sociaux (IME, SESSAD, ESAT, EHPAD).',
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
      icon: <CalendarCheck className="text-primary-400 size-6" />,
      title: 'Planning de Réservation Partagé',
      desc: 'Visualisez en temps réel la disponibilité des véhicules de service ou de fonction. Les professionnels (éducateurs, soignants, chefs de service) réservent en 3 clics selon leur planning d’intervention.',
    },
    {
      icon: <Smartphone className="text-secondary-400 size-6" />,
      title: 'Carnet de Bord Dématérialisé',
      desc: 'Adieu aux carnets papier perdus ou illisibles dans la boîte à gants. Relevé kilométrique, motif de déplacement et niveau de carburant renseignés directement sur smartphone au départ et au retour.',
    },
    {
      icon: <Wrench className="text-accent size-6" />,
      title: 'Alertes Entretiens & Contrôles Techniques',
      desc: 'Ne ratez plus aucun contrôle technique obligatoire, révision ou vidange. Des notifications proactives avertissent les gestionnaires de parc avant l’échéance pour garantir la sécurité des passagers.',
    },
    {
      icon: <FileCheck className="size-6 text-emerald-400" />,
      title: 'État des Lieux Numérique & Sinistres',
      desc: 'Prise de photos instantanée en cas d’anomalie ou de rayure au moment de la restitution du véhicule. Traçabilité complète des conducteurs pour responsabiliser les équipes.',
    },
    {
      icon: <TrendingDown className="size-6 text-pink-400" />,
      title: 'Maîtrise des Dépenses & Carburant',
      desc: 'Suivi rigoureux de la consommation de carburant, des cartes essence et des frais de péage. Exportation des données comptables pour vos arrêtés de compte et vos financeurs (ARS, Départements).',
    },
    {
      icon: <Building className="size-6 text-cyan-400" />,
      title: 'Gestion Multi-Sites & Multi-Établissements',
      desc: 'Idéal pour les associations gestionnaires pilotant plusieurs IME, SESSAD, ESAT ou foyers. Partitionnez la flotte par structure tout en conservant une vue consolidée au siège associatif.',
    },
  ];

  const casUsages = [
    {
      structure: 'Pour les IME (Instituts Médico-Éducatifs)',
      challenge: 'Transports quotidiens d’enfants et minibus adaptés PMR',
      solution:
        'Gestion rigoureuse des minibus partagés, suivi des contrôles de sécurité et assignation des chauffeurs pour assurer des trajets sécurisés sans retard.',
      link: '/solutions-medico-social/ime',
    },
    {
      structure: 'Pour les SESSAD (Soins & Éducation à Domicile)',
      challenge: 'Équipes nomades réalisant des tournées quotidiennes',
      solution:
        'Permet aux éducateurs spécialisés, psychologues et psychomotriciens de réserver une voiture de service en autonomie et de valider les kilomètres parcourus depuis leur smartphone.',
      link: '/solutions-medico-social/sessad',
    },
    {
      structure: 'Pour les Associations Gestionnaires Multi-Établissements',
      challenge: 'Flotte hétérogène éclatée sur plusieurs communes',
      solution:
        'Vue globale pour le Responsable Moyens Généraux ou le Directeur Administratif : taux d’utilisation des véhicules, anticipation des renouvellements et respect des budgets alloués.',
      link: '/solutions-medico-social/associations',
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
            { label: 'Gestion de Flotte Automobile' },
          ]}
          backHref="/solutions-medico-social"
          backLabel="Retour aux solutions"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO SECTION */}
        <header className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <div className="glass border-secondary-500/30 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="bg-secondary-400 h-2 w-2 animate-pulse rounded-full" />
            <span className="text-secondary-200 text-xs font-medium tracking-wide uppercase sm:text-sm">
              Solution SaaS Éditée par DevEvoke
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-6xl">
            Logiciel de gestion de flotte et suivi des véhicules pour{' '}
            <span className="text-gradient drop-shadow-sm">associations médico-sociales</span>
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
            <strong>Floticar</strong> est la solution logicielle en ligne conçue pour répondre aux
            contraintes spécifiques des <strong>associations gestionnaires</strong>,{' '}
            <strong>IME</strong>, <strong>SESSAD</strong> et établissements du médico-social.
            Centralisez vos réservations, automatisez les contrôles et maîtrisez vos coûts de
            transport.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Demander une démonstration de 14 jours
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/contact" className="btn-outline w-full text-base sm:w-auto">
              Contacter un conseiller Floticar
            </Link>
          </div>
        </header>

        {/* VISUEL DOUBLE TERRAIN & COCKPIT FLOTICAR */}
        <section className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-8 lg:grid-cols-12">
            {/* Field Action Photograph */}
            <div className="glass group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:col-span-5 lg:min-h-[480px]">
              <Image
                src="/images/home/floticar_real_action.webp"
                alt="Chauffeur et éducateur scannant le QR code sur minibus associatif avec Floticar"
                width={800}
                height={600}
                className="absolute inset-0 size-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent" />
              <div className="relative z-10 space-y-2 p-6 sm:p-8">
                <span className="bg-secondary-500/20 text-secondary-300 border-secondary-500/30 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
                  Usage Terrain Immédiat
                </span>
                <h3 className="text-xl font-bold text-white">Zéro application à télécharger</h3>
                <p className="text-sm leading-relaxed text-neutral-300">
                  Le conducteur scanne le QR code collé sur le tableau de bord du véhicule : l’état
                  des lieux et le relevé kilométrique s’ouvrent en 2 secondes sur son smartphone.
                </p>
              </div>
            </div>

            {/* Dashboard Console Preview */}
            <div className="glass group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.15)] lg:col-span-7">
              <div className="relative h-[280px] w-full overflow-hidden sm:h-[340px]">
                <Image
                  src={floticarImg}
                  alt="Interface du logiciel Floticar pour la gestion de flotte automobile en établissement médico-social"
                  width={1920}
                  height={1080}
                  className="h-auto w-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80" />
              </div>
              <div className="flex flex-col items-start justify-between gap-4 p-6 pt-0 sm:flex-row sm:items-center sm:p-8">
                <div>
                  <span className="text-primary-400 text-xs font-bold tracking-widest uppercase">
                    Cockpit Direction & Moyens Généraux
                  </span>
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    Supervision en temps réel du parc associatif
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  100% Web & Mobile
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1 : POURQUOI UNE GESTION SPÉCIFIQUE DANS LE MÉDICO-SOCIAL */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="section-label">Enjeux de Terrain</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Pourquoi la gestion d'un parc automobile est un défi majeur en association
                  médico-sociale ?
                </h2>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  Dans une structure médico-sociale, le véhicule n'est pas un simple moyen de
                  transport : c'est un <strong>outil de travail indispensable</strong> à la mission
                  d'accompagnement. Qu'il s'agisse de transporter des enfants scolarisés en IME, de
                  permettre aux éducateurs de SESSAD de visiter les familles, ou de véhiculer des
                  résidents de FAM/MAS vers des activités extérieures, l'indisponibilité d'un
                  véhicule paralyse le service.
                </p>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  Pourtant, de nombreuses associations fonctionnent encore avec des cahiers de
                  réservation papier, des tableaux Excel éparpillés et des entretiens gérés dans
                  l'urgence. <strong>Floticar</strong> a été adapté pour mettre fin à ces frictions
                  administratives tout en sécurisant la responsabilité juridique des directions
                  d'établissements.
                </p>
              </div>

              <div className="space-y-4 lg:col-span-6">
                <div className="glass flex items-start gap-4 rounded-2xl border border-white/5 p-6">
                  <AlertTriangle className="mt-1 size-8 shrink-0 text-amber-400" />
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">
                      Responsabilité juridique & sécurité
                    </h3>
                    <p className="text-muted text-sm">
                      Contrôles techniques dépassés ou pneus lisses : Floticar prévient tout risque
                      en bloquant la réservation d'un véhicule non conforme.
                    </p>
                  </div>
                </div>

                <div className="glass flex items-start gap-4 rounded-2xl border border-white/5 p-6">
                  <Clock className="text-secondary-400 mt-1 size-8 shrink-0" />
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">
                      Conflits de plannings évités
                    </h3>
                    <p className="text-muted text-sm">
                      Plus de double réservation de dernière minute : chaque membre du personnel
                      visualise en temps réel les véhicules libres.
                    </p>
                  </div>
                </div>

                <div className="glass flex items-start gap-4 rounded-2xl border border-white/5 p-6">
                  <FileSpreadsheet className="text-primary-400 mt-1 size-8 shrink-0" />
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">
                      Justification des frais kilométriques
                    </h3>
                    <p className="text-muted text-sm">
                      Exportation simplifiée des données kilométriques et carburant pour les audits
                      budgétaires des financeurs publics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 : FONCTIONNALITÉS CLÉS DE FLOTICAR */}
        <section className="bg-surface/30 border-y border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="section-label">Fonctionnalités Floticar</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Des outils pensés pour les chauffeurs, éducateurs et directions
              </h2>
              <p className="text-muted text-lg">
                Floticar regroupe toutes les fonctionnalités indispensables pour piloter votre
                flotte automobile en toute sérénité.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {fonctionnalites.map((f, idx) => (
                <div
                  key={idx}
                  className="glass hover:border-secondary-500/30 rounded-3xl border border-white/5 p-8 transition-all duration-300"
                >
                  <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/5">
                    {f.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 : CAS D'USAGE PAR TYPE D'ÉTABLISSEMENT */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="section-label">Adaptabilité Terrain</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Floticar en action dans vos établissements
              </h2>
              <p className="text-muted text-lg">
                Que votre flotte soit composée de 3 citadines ou de 40 minibus adaptés, Floticar
                s'adapte à votre organisation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {casUsages.map((item, i) => (
                <div
                  key={i}
                  className="glass flex flex-col justify-between rounded-3xl border border-white/5 p-8"
                >
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">{item.structure}</h3>
                    <div className="text-secondary-400 mb-4 text-xs font-semibold tracking-wider uppercase">
                      {item.challenge}
                    </div>
                    <p className="text-muted mb-6 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                  <Link
                    href={item.link}
                    className="text-primary-400 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:text-white"
                  >
                    Voir les solutions dédiées →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 : SÉCURITÉ DES DONNÉES & HÉBERGEMENT */}
        <section className="bg-surface/40 border-t border-white/5 py-16">
          <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <div className="bg-primary-500/10 text-primary-400 mx-auto inline-flex size-14 items-center justify-center rounded-full">
              <ShieldCheck className="size-8" />
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Une solution 100% hébergée en France et conforme au RGPD
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Toutes les données de trajets, d'utilisateurs et de véhicules gérées dans Floticar
              sont stockées sur des serveurs souverains sécurisés en France. Vos données restent
              votre propriété exclusive et ne sont jamais revendues ni partagées à des tiers.
            </p>
          </div>
        </section>

        {/* SECTION 4.5 : SIMULATEUR CALCULATEUR DE GAINS (SUR FLOTICAR) */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="glass-strong border-secondary-500/20 relative overflow-hidden rounded-3xl border p-8 text-center sm:p-12">
              <div className="bg-secondary-500/10 border-secondary-500/20 text-secondary-400 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
                <Sparkles className="size-3.5" />
                <span>Simulateur d&apos;économies interactif</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Estimez le potentiel d&apos;économies de votre flotte
              </h2>
              <p className="text-muted mx-auto mb-8 max-w-2xl text-sm sm:text-base">
                Évaluez en moins de 2 minutes vos gains sur le temps administratif, le carburant et
                l&apos;entretien grâce au simulateur officiel Floticar.
              </p>
              <Link
                href="https://floticar.com/simulateur"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base"
              >
                <Calculator className="size-4" />
                <span>Lancer le simulateur de flotte Floticar</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5 : CALL TO ACTION DÉMONSTRATION 14 JOURS */}
        <section className="relative overflow-hidden px-4 py-24">
          <div className="from-secondary-500/10 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          <div className="glass-strong border-secondary-500/30 relative z-10 mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-[0_0_60px_rgba(6,182,212,0.2)] sm:p-16">
            <span className="section-label mb-4 inline-block">Testez Floticar sans engagement</span>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
              Simplifiez la gestion des véhicules de votre association
            </h2>
            <p className="text-muted mx-auto mb-10 max-w-2xl text-lg sm:text-xl">
              Bénéficiez d'une démonstration personnalisée et testez gratuitement Floticar pendant
              14 jours avec votre équipe.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://floticar.com/demande-de-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Demander une démonstration de 14 jours
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/agence-digitale-medico-social" className="btn-outline text-base">
                Découvrir l'agence DevEvoke
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
