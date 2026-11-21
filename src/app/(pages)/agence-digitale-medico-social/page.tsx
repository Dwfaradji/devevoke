import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  ShieldCheck,
  Layers,
  Globe,
  Smartphone,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Lock,
  Server,
  Workflow,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export default function AgenceDigitaleMedicoSocialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Agence Digitale Médico-Social DevEvoke',
    serviceType: 'Transformation numérique et conception logicielle médico-sociale',
    provider: {
      '@type': 'Organization',
      name: 'DevEvoke',
      url: 'https://www.devevoke.com',
      logo: 'https://www.devevoke.com/icon.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Perpignan',
        addressRegion: 'Occitanie',
        addressCountry: 'FR',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    description:
      'Conception de solutions numériques, logiciels métiers, applications mobiles et portails collaboratifs pour les établissements médico-sociaux et associations gestionnaires.',
    audience: {
      '@type': 'Audience',
      audienceType:
        'Directions d’établissements médico-sociaux, DSI, associations gestionnaires, IME, SESSAD, ESAT, EHPAD',
    },
  };

  const etablissements = [
    {
      acronyme: 'IME',
      nom: 'Instituts Médico-Éducatifs',
      desc: 'Centralisation des dossiers éducatifs, gestion des transports quotidiens d’enfants et adolescents, coordination des équipes pluridisciplinaires et liaison sécurisée avec les familles.',
      link: '/solutions-medico-social/ime',
    },
    {
      acronyme: 'SESSAD',
      nom: 'Services d’Éducation Spéciale et de Soins à Domicile',
      desc: 'Gestion des tournées nomades, suivi des plannings d’interventions (école, domicile), dématérialisation des feuilles de route et optimisation du parc automobile partagé.',
      link: '/solutions-medico-social/sessad',
    },
    {
      acronyme: 'ESAT',
      nom: 'Établissements et Services d’Aide par le Travail',
      desc: 'Outils de gestion commerciale et d’atelier, suivi de la production, planification des activités et accompagnement du projet personnalisé des travailleurs handicapés.',
      link: '/solutions-medico-social/esat',
    },
    {
      acronyme: 'EHPAD',
      nom: 'Établissements pour Personnes Âgées Dépendantes',
      desc: 'Fluidification des transmissions soignantes, coordination du parcours de dépendance, portail de communication avec les proches et traçabilité des soins.',
      link: '/solutions-medico-social/ehpad',
    },
    {
      acronyme: 'MAS & FAM',
      nom: 'Maisons d’Accueil Spécialisées & Foyers d’Accueil Médicalisé',
      desc: 'Outils de suivi du projet de vie et du dossier de soins pour résidents en situation de grande dépendance, gestion des constantes et traçabilité des actes.',
      link: '/solutions-medico-social',
    },
    {
      acronyme: 'Associations',
      nom: 'Associations Gestionnaires Multi-Établissements',
      desc: 'Pilotage unifié du système d’information, consolidation des données administratives et budgétaires, portails extranets et gouvernance globale.',
      link: '/solutions-medico-social/associations',
    },
  ];

  const solutions = [
    {
      icon: <Layers className="text-primary-400 size-6" />,
      title: 'Logiciels Métiers & Applications Web',
      desc: 'Conception sur-mesure d’applications adaptées aux flux réels de vos structures : gestion administrative, suivi des usagers, transmission d’informations et tableaux de bord de direction.',
      href: '/developpement-logiciel-medico-social',
    },
    {
      icon: <Globe className="text-secondary-400 size-6" />,
      title: 'Portails Collaboratifs, Extranets & Espaces Familles',
      desc: 'Espaces sécurisés et conformes RGPD pour fluidifier la communication entre équipes pluridisciplinaires, usagers, familles et partenaires institutionnels.',
      href: '/solutions-metier',
    },
    {
      icon: <Smartphone className="text-accent size-6" />,
      title: 'Applications Mobiles & Tablettes Terrain',
      desc: 'Applications intuitives conçues pour les professionnels mobiles (éducateurs, soignants, coordinateurs). Mode hors-ligne, saisie rapide et ergonomie pensée pour le terrain.',
      href: '/application-mobile',
    },
    {
      icon: <Workflow className="size-6 text-emerald-400" />,
      title: 'Automatisation & Dématérialisation',
      desc: 'Réduction drastique des ressaisies manuelles, synchronisation des données entre logiciels existants et dématérialisation des formulaires d’admission ou de suivi.',
      href: '/automatisation',
    },
  ];

  const methodologie = [
    {
      step: '01',
      title: 'Immersion & Cadrage Métier',
      desc: 'Nous échangeons avec vos directions, chefs de service et équipes terrain pour comprendre vos contraintes réelles, vos réglementations et vos habitudes de travail.',
    },
    {
      step: '02',
      title: 'Conception Ergonomique (UX Soignants & Éducateurs)',
      desc: 'Prototypage d’interfaces épurées, accessibles et rassurantes. L’objectif est zéro charge mentale superflue pour les professionnels.',
    },
    {
      step: '03',
      title: 'Développement Sécurisé & Intégration',
      desc: 'Architecture logicielle robuste, intégration d’API avec vos logiciels en place, respect strict des normes de sécurité et chiffrement des flux.',
    },
    {
      step: '04',
      title: 'Déploiement, Formation & Support Continu',
      desc: 'Accompagnement au changement, formation personnalisée de vos équipes et support réactif basé en France avec maintenance évolutive.',
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
            { label: 'Agence Digitale Médico-Social' },
          ]}
          backHref="/medico-social"
          backLabel="Retour au pôle médico-social"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO SECTION */}
        <header className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <div className="glass mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
            <span className="bg-primary-400 h-2 w-2 animate-pulse rounded-full" />
            <span className="text-xs font-medium tracking-wide text-gray-200 uppercase sm:text-sm">
              Partenaire Technologique des Acteurs du Médico-Social
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-6xl">
            Agence digitale spécialisée dans le{' '}
            <span className="text-gradient drop-shadow-sm">secteur médico-social</span>
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
            <strong>DevEvoke</strong> est une agence numérique française qui conçoit des solutions
            logicielles, des applications web/mobiles et des outils SaaS sur-mesure pour les{' '}
            <strong>associations gestionnaires</strong> et les{' '}
            <strong>établissements médico-sociaux</strong> (IME, SESSAD, ESAT, EHPAD, MAS, FAM).
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Demander un échange stratégique
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/solutions-medico-social"
              className="btn-outline w-full text-base sm:w-auto"
            >
              Découvrir nos solutions médico-sociales
            </Link>
          </div>
        </header>

        {/* SECTION 1 : QUI EST DEVEVOKE & COMPRÉHENSION MÉTIER */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="section-label">Expertise & Positionnement</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Comprendre les défis humains et opérationnels du médico-social
                </h2>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  Le secteur médico-social ne ressemble à aucun autre. Les contraintes budgétaires,
                  la complexité des financements (ARS, Conseils Départementaux), la gestion des
                  plannings pluridisciplinaires et la charge administrative pèsent quotidiennement
                  sur les équipes soignantes et éducatives.
                </p>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  Chez <strong>DevEvoke</strong>, nous refusons les logiciels rigides inadaptés aux
                  réalités du terrain. Notre démarche d’agence digitale consiste à co-construire des{' '}
                  <strong>solutions numériques utiles</strong>, ergonomiques et conformes, capables
                  de libérer du temps administratif au profit de l’accompagnement des personnes
                  accueillies.
                </p>

                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  <div className="glass rounded-2xl border border-white/5 p-5">
                    <HeartHandshake className="text-primary-400 mb-2 size-6" />
                    <h3 className="mb-1 text-base font-semibold text-white">Centré sur l’humain</h3>
                    <p className="text-muted text-sm">
                      Des interfaces pensées pour des utilisateurs aux profils variés sans jargon
                      technologique.
                    </p>
                  </div>
                  <div className="glass rounded-2xl border border-white/5 p-5">
                    <ShieldCheck className="text-secondary-400 mb-2 size-6" />
                    <h3 className="mb-1 text-base font-semibold text-white">
                      Réglementation & RGPD
                    </h3>
                    <p className="text-muted text-sm">
                      Protection absolue des données sensibles et hébergement souverain en France.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-6">
                <div className="glass group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image
                    src="/images/about/about_field_immersion.webp"
                    alt="Immersion DevEvoke au sein d'un établissement médico-social"
                    width={800}
                    height={460}
                    className="h-[280px] w-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[320px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80" />
                  <div className="absolute right-6 bottom-4 left-6">
                    <span className="text-primary-300 text-xs font-bold tracking-widest uppercase">
                      Immersion terrain
                    </span>
                    <p className="text-sm font-medium text-white">
                      Observer le quotidien avant d’écrire la première ligne de code
                    </p>
                  </div>
                </div>

                <div className="glass-strong space-y-5 rounded-3xl border border-white/10 p-8 shadow-2xl">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-white sm:text-2xl">
                    <Sparkles className="text-primary-400 size-6" />
                    Les problématiques concrètes que nous résolvons
                  </h3>
                  <ul className="space-y-3.5">
                    {[
                      'Dispersion des données et multiplication des fichiers Excel non sécurisés',
                      'Complexité de la gestion et du suivi des véhicules pour les tournées SESSAD et transports IME',
                      'Lourdeur de la transmission des informations entre éducateurs, soignants et directions',
                      'Difficulté de pilotage multi-établissements pour les associations gestionnaires',
                      'Besoin de conformité stricte au RGPD Santé et aux exigences de la CNIL',
                      'Outils historiques obsolètes, lents et non utilisables sur smartphone ou tablette',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-muted flex items-start gap-3 text-sm sm:text-base"
                      >
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 : NOS SOLUTIONS NUMÉRIQUES MÉDICO-SOCIALES */}
        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="section-label">Catalogue d’Ingénierie</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Des solutions numériques adaptées aux organisations médico-sociales
              </h2>
              <p className="text-muted text-lg">
                Que vous ayez besoin d’un logiciel métier sur-mesure, d’une application mobile pour
                vos équipes nomades ou d’un portail collaboratif sécurisé, nous concevons des outils
                dimensionnés pour vos enjeux.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {solutions.map((sol, index) => (
                <div
                  key={index}
                  className="glass hover:border-primary-500/30 group flex flex-col justify-between rounded-3xl border border-white/5 p-8 transition-all duration-300 sm:p-10"
                >
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/5 transition-transform group-hover:scale-110">
                      {sol.icon}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">{sol.title}</h3>
                    <p className="text-muted mb-6 leading-relaxed">{sol.desc}</p>
                  </div>
                  <Link
                    href={sol.href}
                    className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:translate-x-1"
                  >
                    En savoir plus sur cette solution
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>

            {/* FOCUS DIAGNOSTIC & STRATÉGIE NUMÉRIQUE MÉDICO-SOCIALE */}
            <div className="glass-strong border-secondary-500/30 from-surface relative mt-12 overflow-hidden rounded-3xl border bg-gradient-to-br to-[#0a192f] p-8 shadow-2xl sm:p-12">
              <div className="bg-secondary-500/10 pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full blur-[100px]" />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
                <div className="space-y-4 lg:col-span-8">
                  <div className="bg-secondary-500/20 text-secondary-300 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                    Méthodologie DevEvoke
                  </div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Un audit et une feuille de route logicielle sur-mesure pour votre structure
                  </h3>
                  <p className="text-muted text-base leading-relaxed">
                    Les IME, SESSAD et associations composent souvent avec des outils hétérogènes,
                    des fichiers Excel dispersés et des ressaisies chronophages. Nous analysons vos
                    flux métier sur le terrain pour identifier les gains d&apos;efficacité immédiats
                    et concevoir des solutions pérennes conformes au RGPD.
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
                  <Link
                    href="/diagnostic-numerique"
                    className="btn-primary justify-center text-center text-sm"
                  >
                    Faire le diagnostic gratuit
                  </Link>
                  <Link href="/contact" className="btn-outline justify-center text-center text-sm">
                    Prendre rendez-vous
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 : ÉTABLISSEMENTS ET ACTEURS ACCOMPAGNÉS */}
        <section className="bg-surface/30 border-t border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="section-label">Typologies de Structures</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Les établissements médico-sociaux que nous accompagnons
              </h2>
              <p className="text-muted text-lg">
                Chaque structure médico-sociale possède son cadre légal, ses protocoles d’accueil et
                son fonctionnement interne. Nous adaptons chaque solution aux spécificités de votre
                établissement.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {etablissements.map((etab, i) => (
                <div
                  key={i}
                  className="glass flex flex-col justify-between rounded-3xl border border-white/5 p-6 transition-all duration-300 hover:border-white/20 sm:p-8"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-primary-400 font-mono text-xl font-extrabold">
                        {etab.acronyme}
                      </span>
                      <Building2 className="size-5 text-gray-500" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{etab.nom}</h3>
                    <p className="text-muted mb-6 text-sm leading-relaxed">{etab.desc}</p>
                  </div>
                  <Link
                    href={etab.link}
                    className="text-primary-400 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:text-white"
                  >
                    Découvrir les solutions {etab.acronyme} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 : MÉTHODOLOGIE PROJET B2B */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="section-label">Garantie Méthodologique</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Notre approche du numérique médico-social
              </h2>
              <p className="text-muted text-lg">
                La réussite d’un projet digital repose à 50% sur la qualité technologique et à 50%
                sur l’adhésion des équipes. Notre méthode garantit un accompagnement rigoureux de
                bout en bout.
              </p>
            </div>

            {/* BANDEAU CO-CONCEPTION PHOTOGRAPHIQUE */}
            <div className="glass group relative mb-14 overflow-hidden rounded-3xl border border-white/10">
              <div className="relative h-64 w-full overflow-hidden sm:h-80">
                <Image
                  src="/images/home/workshop_coconception.webp"
                  alt="Atelier collaboratif de co-conception avec les directeurs médico-sociaux"
                  width={1400}
                  height={600}
                  className="size-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-transparent" />
                <div className="absolute inset-0 flex max-w-2xl flex-col justify-center p-8 sm:p-12">
                  <span className="section-label mb-2 inline-block">Co-Design & Ergonomie</span>
                  <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                    Des ateliers d’immersion pour concevoir avec vos équipes
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                    Nous ne concevons pas des logiciels depuis une tour d’ivoire. DevEvoke s’assoit
                    aux côtés de vos professionnels pour valider chaque écran en conditions réelles.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {methodologie.map((m, idx) => (
                <div
                  key={idx}
                  className="glass relative rounded-3xl border border-white/5 p-6 sm:p-8"
                >
                  <div className="text-primary-500/30 mb-4 font-mono text-4xl font-extrabold">
                    {m.step}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{m.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 : SÉCURITÉ, HÉBERGEMENT SOUVERAIN & RGPD */}
        <section className="bg-surface/40 border-t border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-6">
                <span className="section-label">Protection des Données & Souveraineté</span>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Sécurité web, hébergement souverain et conformité RGPD
                </h2>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  Les organisations médico-sociales manipulent des flux d'informations
                  administratives et opérationnelles qui exigent une vigilance stricte en matière de
                  confidentialité et d'intégrité.
                </p>
                <p className="text-muted text-base leading-relaxed sm:text-lg">
                  DevEvoke applique les principes de <em>Privacy by Design</em> et de sécurité dès
                  la conception sur l’ensemble de ses réalisations web et logicielles. Nous
                  privilégions des infrastructures souveraines hébergées en France, assurant une
                  conformité rigoureuse avec les recommandations de la CNIL et les standards actuels
                  du web.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/securite-et-conformite" className="btn-primary text-sm">
                    Consulter nos engagements sécurité & RGPD
                  </Link>
                  <Link href="/contact" className="btn-outline text-sm">
                    Échanger avec un conseiller
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
                <div className="glass rounded-2xl border border-white/5 p-6">
                  <Server className="text-primary-400 mb-3 size-8" />
                  <h3 className="mb-2 font-bold text-white">Hébergement Souverain</h3>
                  <p className="text-muted text-xs leading-relaxed">
                    Serveurs physiques situés en France, garantissant la localisation européenne de
                    vos données.
                  </p>
                </div>
                <div className="glass rounded-2xl border border-white/5 p-6">
                  <Lock className="text-secondary-400 mb-3 size-8" />
                  <h3 className="mb-2 font-bold text-white">Chiffrement AES-256</h3>
                  <p className="text-muted text-xs leading-relaxed">
                    Chiffrement de bout en bout des données au repos et en transit (tunnels TLS 1.3
                    stricts).
                  </p>
                </div>
                <div className="glass rounded-2xl border border-white/5 p-6">
                  <FileText className="text-accent mb-3 size-8" />
                  <h3 className="mb-2 font-bold text-white">Traçabilité & Logs</h3>
                  <p className="text-muted text-xs leading-relaxed">
                    Journalisation inaltérable des accès et des actions conformément aux exigences
                    légales.
                  </p>
                </div>
                <div className="glass rounded-2xl border border-white/5 p-6">
                  <Clock className="mb-3 size-8 text-emerald-400" />
                  <h3 className="mb-2 font-bold text-white">PRA & Haute Disponibilité</h3>
                  <p className="text-muted text-xs leading-relaxed">
                    Plans de reprise d'activité garantissant la continuité des services en cas
                    d'incident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 : CALL TO ACTION B2B */}
        <section className="relative overflow-hidden px-4 py-24">
          <div className="from-primary-500/10 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          <div className="glass-strong border-primary-500/30 relative z-10 mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-[0_0_60px_rgba(59,130,246,0.2)] sm:p-16">
            <span className="section-label mb-4 inline-block">Parlons de votre projet</span>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
              Vous représentez une association ou un établissement médico-social ?
            </h2>
            <p className="text-muted mx-auto mb-10 max-w-2xl text-lg sm:text-xl">
              Échangeons sur vos besoins d’informatisation, la digitalisation de vos processus ou
              vos projets d’applications métiers sur-mesure. Nos consultants et architectes
              logiciels sont à votre disposition.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Demander un rendez-vous avec un expert
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/tarifs" className="btn-outline text-base">
                Découvrir nos modalités d'accompagnement
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
