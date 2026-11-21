import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layers,
  Globe,
  Smartphone,
  Workflow,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';

export default function SolutionsMedicoSocialPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Solutions Numériques Médico-Social DevEvoke',
    description:
      'Catalogue des solutions logicielles et outils numériques développés par DevEvoke pour le secteur médico-social.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Développement de Logiciels Métiers & Applications Web Médico-Social',
        url: 'https://www.devevoke.com/developpement-logiciel-medico-social',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Applications Mobiles Hors-Ligne pour Équipes Terrain & SESSAD',
        url: 'https://www.devevoke.com/application-mobile',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Solutions Numériques pour Associations Gestionnaires',
        url: 'https://www.devevoke.com/solutions-medico-social/associations',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Solutions Numériques pour IME & DITEP',
        url: 'https://www.devevoke.com/solutions-medico-social/ime',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Solutions Numériques pour SESSAD',
        url: 'https://www.devevoke.com/solutions-medico-social/sessad',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Solutions Numériques pour ESAT',
        url: 'https://www.devevoke.com/solutions-medico-social/esat',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Solutions Numériques pour EHPAD',
        url: 'https://www.devevoke.com/solutions-medico-social/ehpad',
      },
      {
        '@type': 'ListItem',
        position: 8,
        name: 'Diagnostic Numérique Médico-Social',
        url: 'https://www.devevoke.com/diagnostic-numerique',
      },
    ],
  };

  interface SolutionCategory {
    title: string;
    desc: string;
    icon: React.ReactNode;
    link: string;
    linkLabel: string;
    badge?: string;
    points: string[];
  }

  const categories: SolutionCategory[] = [
    {
      title: 'Logiciels Métiers & Applications Web',
      desc: 'Développement sur-mesure d’outils centralisés pour fluidifier le dossier usager, les plannings et le suivi administratif.',
      icon: <Layers className="text-primary-400 size-6" />,
      link: '/developpement-logiciel-medico-social',
      linkLabel: 'Découvrir le développement logiciel',
      points: [
        'Portails administratifs et suivi d’activité interne',
        'Gestion des admissions et plannings d’équipes',
        'Tableaux de bord de direction et reporting d’activité',
        'Hébergement sécurisé en France et conformité RGPD',
      ],
    },
    {
      title: 'Portails Collaboratifs, Extranets & Espaces Familles',
      desc: 'Espaces sécurisés et ergonomiques pour fluidifier les liens entre professionnels, usagers, familles et partenaires institutionnels.',
      icon: <Globe className="text-secondary-400 size-6" />,
      link: '/developpement-web',
      linkLabel: 'Découvrir nos portails et extranets',
      badge: 'Espaces Sécurisés RGPD',
      points: [
        'Transmission sécurisée des bilans et documents',
        'Espace famille rassurant et conforme RGPD',
        'Messagerie chiffrée et agenda partagé',
        'Accessibilité RGAA et responsive sur tous écrans',
      ],
    },
    {
      title: 'Applications Mobiles & Tablettes Soignants',
      desc: 'Outils tactiles fluides conçus pour les éducateurs, soignants et intervenants nomades sur le terrain.',
      icon: <Smartphone className="text-accent size-6" />,
      link: '/application-mobile',
      linkLabel: 'Découvrir nos solutions mobiles',
      points: [
        'Saisie rapide des transmissions à la volée',
        'Mode hors-connexion (offline first) pour zones blanches',
        'Pointage kilométrique et signatures électroniques',
        'Sécurisation des accès (MFA et biométrie)',
      ],
    },
    {
      title: 'Automatisation des Processus & APIs',
      desc: 'Connectez vos outils historiques et éliminez les ressaisies manuelles chronophages.',
      icon: <Workflow className="size-6 text-emerald-400" />,
      link: '/automatisation',
      linkLabel: 'Découvrir l’automatisation des flux',
      points: [
        'Interconnexion avec vos logiciels de paie et comptabilité',
        'Dématérialisation des formulaires d’admission',
        'Rappels SMS / emails automatiques aux familles',
        'Génération automatique de documents CERFA et contrats',
      ],
    },
  ];

  const etablissements = [
    {
      slug: 'ime',
      title: 'Instituts Médico-Éducatifs (IME)',
      desc: 'Solutions pour coordonner les projets pédagogiques et éducatifs, sécuriser les transports d’enfants et simplifier les échanges avec les familles.',
      link: '/solutions-medico-social/ime',
      image: '/images/solutions/ime_pedagogy_learning.webp',
      badge: 'Enfance & Pédagogie',
    },
    {
      slug: 'sessad',
      title: 'SESSAD & Services Nomades',
      desc: 'Outils dédiés aux professionnels en mobilité : gestion des tournées scolaires et à domicile, saisie de notes hors-ligne et coordination des prises en charge.',
      link: '/solutions-medico-social/sessad',
      image: '/images/home/sessad_field_educator.webp',
      badge: 'Mobilité & Tournées',
    },
    {
      slug: 'esat',
      title: 'Établissements & Services d’Aide par le Travail (ESAT)',
      desc: 'Concilier gestion commerciale d’atelier et suivi du projet personnalisé d’accompagnement des travailleurs en situation de handicap.',
      link: '/solutions-medico-social/esat',
      image: '/images/home/esat_workshop_activity.webp',
      badge: 'Ateliers & Travail Protégé',
    },
    {
      slug: 'ehpad',
      title: 'EHPAD & Résidences Autonomie',
      desc: 'Modernisation des transmissions ciblées, portail familles rassurant et allègement de la charge administrative des équipes soignantes.',
      link: '/solutions-medico-social/ehpad',
      image: '/images/home/ehpad_coordination_life.webp',
      badge: 'Grand Âge & Lien Famille',
    },
    {
      slug: 'associations',
      title: 'Associations Gestionnaires Multi-Sites',
      desc: 'Pilotage unifié du système d’information, mutualisation des moyens (ressources, matériel) et reporting consolidé pour les conseils d’administration.',
      link: '/solutions-medico-social/associations',
      image: '/images/home/hero_medicosocial_team.webp',
      badge: 'Gouvernance & DSI',
    },
    {
      slug: 'mas-fam',
      title: 'Foyers de Vie, MAS & FAM',
      desc: 'Outils ergonomiques pour le suivi au long cours des résidents, le dossier de vie partagé et les activités socio-éducatives adaptées.',
      link: '/contact',
      image: '/images/about/about_field_immersion.webp',
      badge: 'Hébergement Médicalisé',
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
            { label: 'Catalogue des solutions' },
          ]}
          backHref="/medico-social"
          backLabel="Retour au pôle médico-social"
        />
        <MedicoSocialNavSwitcher />

        {/* HERO */}
        <header className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <div className="glass border-primary-500/30 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="bg-primary-400 h-2 w-2 animate-pulse rounded-full" />
            <span className="text-xs font-medium tracking-wide text-gray-200 uppercase sm:text-sm">
              Catalogue Numérique DevEvoke
            </span>
          </div>

          <h1 className="mb-8 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-6xl">
            Solutions numériques et logiciels pour le{' '}
            <span className="text-gradient drop-shadow-sm">secteur médico-social</span>
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-3xl text-lg leading-relaxed sm:text-xl">
            Découvrez l’ensemble des technologies créées par <strong>DevEvoke</strong> pour équiper
            les <strong>associations</strong>, <strong>IME</strong>, <strong>SESSAD</strong>,{' '}
            <strong>ESAT</strong> et <strong>EHPAD</strong>. Des outils pensés pour simplifier le
            travail des équipes et renforcer la qualité de l’accompagnement.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full text-base sm:w-auto">
              Présenter votre projet à un consultant
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/agence-digitale-medico-social"
              className="btn-outline w-full text-base sm:w-auto"
            >
              Notre expertise médico-sociale
            </Link>
          </div>
        </header>

        {/* SECTION 1 : NOS SOLUTIONS PAR THÉMATIQUE */}
        <section className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="section-label">Offre Technologique</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Nos 4 piliers d’ingénierie logicielle
              </h2>
              <p className="text-muted text-lg">
                Des solutions fiables, modulaires et évolutives pour moderniser chaque dimension de
                votre organisation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="glass hover:border-primary-500/30 group flex flex-col justify-between rounded-3xl border border-white/5 p-8 transition-all duration-300 sm:p-10"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 transition-transform group-hover:scale-110">
                        {cat.icon}
                      </div>
                      {cat.badge && (
                        <span className="bg-secondary-500/20 text-secondary-300 border-secondary-500/30 rounded-full border px-3 py-1 text-xs font-medium">
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">{cat.title}</h3>
                    <p className="text-muted mb-6 leading-relaxed">{cat.desc}</p>

                    <ul className="mb-8 space-y-3">
                      {cat.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={cat.link}
                    className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:translate-x-1"
                  >
                    {cat.linkLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 : SOLUTIONS PAR TYPE D'ÉTABLISSEMENT */}
        <section className="bg-surface/30 border-t border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="section-label">Adaptation Métier</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Des solutions adaptées à chaque établissement
              </h2>
              <p className="text-muted text-lg">
                Consultez nos approches ciblées selon votre type de structure médico-sociale ou
                sanitaire.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {etablissements.map((etab, i) => (
                <div
                  key={i}
                  className="glass hover:glass-strong group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 shadow-xl transition-all duration-300 hover:border-white/20"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={etab.image}
                        alt={etab.title}
                        width={600}
                        height={360}
                        className="size-full transform object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-500/80 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                          {etab.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="group-hover:text-primary-300 mb-2 text-xl font-bold text-white transition-colors">
                        {etab.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{etab.desc}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={etab.link}
                      className="text-primary-400 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors group-hover:text-white"
                    >
                      Découvrir l'offre dédiée →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 : SÉCURITÉ & HÉBERGEMENT */}
        <section className="bg-surface/40 border-t border-white/5 py-16">
          <div className="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <div className="bg-primary-500/10 text-primary-400 mx-auto inline-flex size-14 items-center justify-center rounded-full">
              <ShieldCheck className="size-8" />
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Garantie Sécurité Web, Confidentialité & RGPD
            </h2>
            <p className="text-muted mx-auto max-w-3xl text-base leading-relaxed">
              Toutes les solutions conçues par DevEvoke appliquent les meilleures pratiques de
              sécurité applicative et de conformité RGPD. Hébergement souverain sur serveurs situés
              en France, chiffrement TLS 1.3 et respect de la confidentialité professionnelle.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/securite-et-conformite" className="btn-primary text-sm">
                Sécurité & Conformité RGPD
              </Link>
              <Link href="/contact" className="btn-outline text-sm">
                Échanger avec le fondateur
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4 : CTA FINAL */}
        <section className="relative overflow-hidden px-4 py-24">
          <div className="from-primary-500/10 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          <div className="glass-strong border-primary-500/30 relative z-10 mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-[0_0_60px_rgba(59,130,246,0.2)] sm:p-16">
            <span className="section-label mb-4 inline-block">Un besoin spécifique ?</span>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
              Co-construisons la solution numérique de votre établissement
            </h2>
            <p className="text-muted mx-auto mb-10 max-w-2xl text-lg sm:text-xl">
              Vous avez un cahier des charges, une idée de logiciel ou un besoin de modernisation ?
              Nos architectes et développeurs vous conseillent sans engagement.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Contacter DevEvoke
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/diagnostic-numerique" className="btn-outline text-base">
                Faire le diagnostic gratuit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
