import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  ShieldCheck,
  Cpu,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Users,
  Sparkles,
  HelpCircle,
  Eye,
  FileCheck2,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import MedicoSocialNavSwitcher from '@/components/ui/MedicoSocialNavSwitcher';
import { SITE_URL, buildAbsoluteUrl } from '@/config/site';

export default function MedicoSocialHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solutions Numériques pour le Secteur Médico-Social & Associatif',
    serviceType: 'Transformation numérique et ingénierie logicielle médico-sociale',
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
      'Pôle d’expertise numérique DevEvoke dédié au médico-social : logiciels métiers, applications mobiles hors-ligne pour SESSAD, outils pour IME, ESAT, EHPAD et digitalisation des processus associatifs. Hébergement souverain sécurisé en France.',
  };

  const structures = [
    {
      sigle: 'IME',
      nom: 'Instituts Médico-Éducatifs',
      desc: 'Gestion des admissions, suivi des projets personnalisés de scolarisation, communication avec les familles et coordination pluridisciplinaire.',
      link: '/solutions-medico-social/ime',
      badge: 'Enfance & Pédagogie',
      image: '/images/solutions/ime_pedagogy_learning.webp',
      alt: 'Atelier pédagogique et d’apprentissage en Institut Médico-Éducatif (IME)',
    },
    {
      sigle: 'SESSAD & SAVS',
      nom: 'Services d’Accompagnement à Domicile',
      desc: 'Outils mobiles pour éducateurs nomades, gestion des plannings de tournée, comptes-rendus d’interventions en milieu scolaire ou à domicile sans réseau.',
      link: '/solutions-medico-social/sessad',
      badge: 'Mobilité & Hors-Ligne',
      image: '/images/home/sessad_field_educator.webp',
      alt: 'Éducatrice spécialisée SESSAD en intervention de terrain auprès d’un jeune',
    },
    {
      sigle: 'ESAT',
      nom: 'Établissements d’Aide par le Travail',
      desc: 'Suivi de la production en atelier (bois, espaces verts, conditionnement), devis commerciaux et fiches d’activités adaptées aux travailleurs.',
      link: '/solutions-medico-social/esat',
      badge: 'Production & Inclusion',
      image: '/images/home/esat_workshop_activity.webp',
      alt: 'Travailleur et moniteur en atelier de production protégée au sein d’un ESAT',
    },
    {
      sigle: 'EHPAD & Résidences',
      nom: 'Établissements pour Personnes Âgées',
      desc: 'Transmissions d’équipes sécurisées, gestion des astreintes et portails familles pour maintenir un lien transparent avec les proches.',
      link: '/solutions-medico-social/ehpad',
      badge: 'Grand Âge & Lien Familles',
      image: '/images/home/ehpad_coordination_life.webp',
      alt: 'Soignante et résidente en échange bienveillant au sein d’un EHPAD',
    },
    {
      sigle: 'FAM & MAS',
      nom: 'Foyers d’Accueil Médicalisés',
      desc: 'Organisation du quotidien des résidents, protocoles de soins et traçabilité rigoureuse des interventions d’accompagnement.',
      link: '/contact',
      badge: 'Hébergement & Soins',
      image: '/images/about/about_field_immersion.webp',
      alt: 'Échange humain et accompagnement soignant en foyer d’accueil médicalisé',
    },
    {
      sigle: 'Associations Multi-Sites',
      nom: 'Sièges & Directions Générales',
      desc: 'Centralisation des indicateurs d’activité multi-établissements, harmonisation du système d’information et pilotage budgétaire unifié.',
      link: '/solutions-medico-social/associations',
      badge: 'Gouvernance & Reporting',
      image: '/images/home/hero_medicosocial_team.webp',
      alt: 'Équipe de direction et cadres associatifs réunis pour la gouvernance médico-sociale',
    },
  ];

  const commitments = [
    {
      icon: ShieldCheck,
      title: 'Hébergement Souverain en France',
      desc: 'Infrastructures cloud hautement sécurisées situées sur le sol français (centres de données certifiés ISO 27001), conformité RGPD intégrale et étanchéité des données.',
    },
    {
      icon: Users,
      title: 'Immersion & Co-Conception Terrain',
      desc: 'Nous passons du temps aux côtés de vos professionnels (éducateurs, moniteurs d’ateliers, secrétaires) pour concevoir des écrans évidents qui s’adoptent sans formation lourde.',
    },
    {
      icon: Smartphone,
      title: 'Mode Déconnecté Garanti',
      desc: 'Vos équipes en déplacement ne sont jamais bloquées : les applications continuent de fonctionner sans réseau et se synchronisent automatiquement au retour.',
    },
    {
      icon: Cpu,
      title: 'Code Propriétaire Sans Enfermement',
      desc: 'Aucune licence captive par utilisateur qui étrangle le budget de votre association. Vous êtes pleinement propriétaire du code développé.',
    },
  ];

  const faqs = [
    {
      q: 'Comment DevEvoke garantit la sécurité et la conformité des données des résidents ?',
      a: 'Toutes nos solutions appliquent les recommandations strictes de la CNIL et du RGPD : minimisation des données collectées, chiffrement AES des bases et des échanges HTTPS, politique de mots de passe renforcée, journal d’audit des accès et hébergement souverain en France sans transfert hors Union Européenne.',
    },
    {
      q: 'Nos professionnels sont peu à l’aise avec l’informatique. L’adoption est-elle garantie ?',
      a: 'C’est précisément notre raison d’être : nous ne concevons pas des progiciels usines à gaz avec 50 boutons par écran. Les interfaces sont épurées, rédigées dans le vocabulaire quotidien de vos professionnels, avec de gros boutons tactiles et une logique d’action en 2 à 3 clics.',
    },
    {
      q: 'Comment assurez-vous l’adhésion des équipes éducatives et soignantes ?',
      a: 'Nous co-construisons les outils en immersion avec les professionnels sur le terrain. En simplifiant drastiquement les démarches de saisie (grands boutons, mode hors-ligne, suppression de la paperasse), les outils deviennent de véritables alliés au quotidien plutôt qu’une contrainte administrative supplémentaire.',
    },
    {
      q: 'Comment s’organisent les échanges avec l’association ?',
      a: 'Un interlocuteur direct : Boucif Faradji, fondateur et architecte logiciel. Basé à Perpignan (Occitanie), nous intervenons dans vos établissements de la région et organisons des revues d’avancement régulières en visioconférence pour les associations partout en France.',
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
          items={[{ label: 'Pôle Médico-Social & Associatif' }]}
          backLink={{ href: '/', label: 'Retour au site' }}
        />
        <MedicoSocialNavSwitcher />

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5 py-12 lg:py-20">
          <div className="bg-primary-600/15 pointer-events-none absolute top-1/4 left-1/3 h-[400px] w-[550px] -translate-x-1/2 rounded-full blur-[160px]" />
          <div className="bg-secondary-600/10 pointer-events-none absolute right-1/4 bottom-1/4 h-[350px] w-[450px] rounded-full blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-7">
                <div className="bg-primary-500/10 border-primary-500/20 text-primary-300 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase">
                  <Building2 className="size-3.5" />
                  <span>Pôle d&apos;Excellence Sectoriel • Médico-Social</span>
                </div>

                <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Solutions numériques pensées pour les acteurs du{' '}
                  <span className="text-highlight">médico-social</span>
                </h1>

                <p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">
                  Allégez la charge administrative de vos équipes et renforcez le temps utile
                  consacré aux personnes accompagnées grâce à des logiciels métiers sur-mesure, des
                  applications mobiles nomades et des outils de coordination simples.
                </p>

                <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="from-primary-600 via-primary-500 to-secondary-500 shadow-primary-500/25 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:opacity-95 sm:w-auto"
                  >
                    <span>Parler de votre établissement</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/diagnostic-numerique"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-medium text-neutral-200 transition-all hover:bg-white/10 sm:w-auto"
                  >
                    Faire le diagnostic médico-social gratuit
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-6 text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                    Hébergement sécurisé France
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                    Conforme RGPD & CNIL
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-emerald-400" />
                    Co-conception avec le terrain
                  </span>
                </div>
              </div>

              {/* Photo Hero Médicaux-Sociale : Professionnel avec tablette métier */}
              <div className="relative lg:col-span-5">
                <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-900 shadow-2xl">
                  <Image
                    src="/images/solutions/professionnel-medico-social-tablette.webp"
                    alt="Professionnel du médico-social utilisant une solution numérique de coordination sur tablette tactile"
                    width={960}
                    height={540}
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="h-[320px] w-full object-cover object-center brightness-[0.97] transition-transform duration-700 group-hover:scale-102 sm:h-[420px]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-xl border border-white/15 bg-neutral-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Smartphone className="text-primary-400 size-3.5 shrink-0" />
                    <span>Application Métier & Coordination</span>
                  </div>

                  <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-xs text-neutral-200">
                    <span className="text-xs font-semibold">Suivi des usagers & mobilité</span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                      Ergonomie Terrain
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Solutions par Typologie d'Établissement */}
        <section className="border-b border-white/5 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
              <span className="section-label">
                <Sparkles className="size-3.5" />
                Écosystème Sectoriel
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Des réponses adaptées à chaque structure
              </h2>
              <p className="text-base text-neutral-400 sm:text-lg">
                Chaque type d’établissement répond à des contraintes réglementaires et
                opérationnelles spécifiques. Découvrez nos modules dédiés.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {structures.map((s, idx) => (
                <Link
                  key={idx}
                  href={s.link}
                  className="card-modern group hover:border-primary-500/40 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 text-left shadow-xl transition-all"
                >
                  <div>
                    {/* Photo de structure */}
                    <div className="relative h-48 w-full overflow-hidden bg-neutral-900 sm:h-52">
                      <Image
                        src={s.image}
                        alt={s.alt}
                        width={600}
                        height={400}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="size-full object-cover brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                      <div className="text-primary-300 absolute top-3 left-3 rounded-full border border-white/15 bg-neutral-950/80 px-3 py-1 text-xs font-black backdrop-blur-md">
                        {s.sigle}
                      </div>

                      <div className="bg-primary-950/80 border-primary-500/30 text-primary-200 absolute top-3 right-3 rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md">
                        {s.badge}
                      </div>
                    </div>

                    {/* Contenu carte */}
                    <div className="space-y-2.5 p-6">
                      <h3 className="group-hover:text-primary-300 text-lg leading-snug font-bold text-white transition-colors">
                        {s.nom}
                      </h3>
                      <p className="text-xs leading-relaxed font-normal text-neutral-300">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="text-primary-400 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-semibold transition-colors group-hover:text-white">
                      <span>Découvrir les solutions adaptées</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section Nos Engagements Médicosociaux */}
        <section className="border-b border-white/5 bg-neutral-900/30 py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
              <span className="section-label">
                <ShieldCheck className="size-3.5" />
                Éthique & Rigueur
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Nos engagements au service des professionnels du soin et de l’éducatif
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {commitments.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div key={idx} className="card-modern space-y-4 p-8">
                    <div className="bg-primary-500/10 border-primary-500/20 text-primary-400 flex size-12 items-center justify-center rounded-xl border">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{c.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-400">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Co-design Showcase Banner with Action Photo */}
        <section className="border-b border-white/5 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-primary-500/30 overflow-hidden rounded-3xl border bg-gradient-to-br from-neutral-900 to-neutral-950 shadow-2xl">
              <div className="grid grid-cols-1 items-center lg:grid-cols-12">
                {/* Photo Column */}
                <div className="relative h-[260px] w-full overflow-hidden sm:h-[380px] lg:col-span-5 lg:h-[420px]">
                  <Image
                    src="/images/solutions/atelier-coconception-medico-social.webp"
                    alt="Atelier collaboratif de co-conception numérique entre DevEvoke et des professionnels du médico-social"
                    width={960}
                    height={540}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="size-full object-cover object-center brightness-[0.97] contrast-[1.03]"
                  />
                  <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-neutral-950/90 lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:hidden" />

                  <div className="text-primary-300 absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-neutral-950/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                    <Users className="size-3.5" />
                    <span>Atelier de Cadrage Fonctionnel</span>
                  </div>
                </div>

                {/* Narrative Column */}
                <div className="space-y-5 p-6 text-left sm:p-10 lg:col-span-7 lg:p-12">
                  <div className="bg-primary-500/10 border-primary-500/20 text-primary-300 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold">
                    <Sparkles className="size-3.5" />
                    <span>Immersion & Co-Construction Terrain</span>
                  </div>

                  <h3 className="text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-4xl">
                    Des outils conçus avec et pour vos professionnels
                  </h3>

                  <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                    Chaque établissement possède ses spécificités. Nous nous déplaçons directement
                    dans vos structures pour observer les pratiques réelles aux côtés de vos équipes
                    administratives, soignantes et éducatives. Nous concevons ensemble des
                    interfaces ultra-simples qui suppriment les doublons de saisie, fluidifient les
                    transmissions et protègent rigoureusement les données sensibles.
                  </p>

                  <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
                    <Link
                      href="/contact"
                      className="from-primary-500 to-secondary-500 shadow-primary-500/20 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:opacity-95 sm:text-sm"
                    >
                      <span>Organiser un atelier de cadrage</span>
                      <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      href="/realisations"
                      className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center text-xs font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white sm:text-sm"
                    >
                      Consulter nos réalisations
                    </Link>
                  </div>
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
                Questions fréquentes du secteur médico-social
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
              Échangeons sur les besoins numériques de votre établissement
            </h2>
            <p className="mx-auto max-w-2xl text-base text-neutral-300">
              Planifiez un échange de cadrage de 30 minutes avec Boucif Faradji pour auditer vos
              outils actuels et esquisser ensemble des solutions pragmatiques.
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
                Découvrir l&apos;ensemble de nos services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
