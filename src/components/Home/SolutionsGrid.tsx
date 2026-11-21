import React from 'react';
import Link from 'next/link';
import {
  Globe,
  Cpu,
  Cloud,
  Smartphone,
  Workflow,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  LayoutGrid,
} from 'lucide-react';

interface SolutionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tag: string;
  description: string;
  href: string;
  highlight?: boolean;
}

const solutions: SolutionCardProps[] = [
  {
    icon: Globe,
    title: 'Développement Web & Plateformes',
    tag: 'Next.js & Performance',
    description:
      'Sites d’entreprise haut de gamme, portails de marque et dashboards interactifs ultra-rapides sous Next.js et React.',
    href: '/developpement-web',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles & Tablettes',
    tag: 'Mode Hors-Ligne Garanti',
    description:
      'Outils tactiles iOS & Android sous React Native conçus pour les équipes terrain, techniciens et professionnels nomades.',
    href: '/application-mobile',
  },
  {
    icon: Cloud,
    title: 'Conception de Plateformes SaaS',
    tag: 'Produit Cloud B2B',
    description:
      'Logiciels cloud multi-tenants, facturation récurrente Stripe intégrée et API REST pour commercialiser votre savoir-faire.',
    href: '/developpement-saas',
    highlight: true,
  },
  {
    icon: Cpu,
    title: 'Logiciels Métier Sur-Mesure',
    tag: 'Remplacement Excel',
    description:
      'Outils internes calqués sur vos protocoles pour centraliser vos processus réels et en finir avec les tableurs fragmentés.',
    href: '/solutions-metier',
    highlight: true,
  },
  {
    icon: Workflow,
    title: 'Automatisation des Processus',
    tag: 'Zéro Double Saisie',
    description:
      'Suppression des ressaisies manuelles chronophages, synchronisation d’outils par API et génération de bilans en un clic.',
    href: '/automatisation',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & Hébergement Souverain',
    tag: 'Conformité RGPD France',
    description:
      'Infrastructures cloud sécurisées en France (ISO 27001), sauvegardes quotidiennes chiffrées et conformité réglementaire totale.',
    href: '/securite-et-conformite',
  },
];

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="relative border-t border-white/5 bg-neutral-950 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="section-label">
            <Sparkles className="size-3.5" />
            Nos Piliers d’Ingénierie
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Des réponses technologiques adaptées à vos usages
          </h2>
          <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
            DevEvoke ne vend pas un progiciel unique rigide. Nous concevons la solution logicielle
            ou web qui répond au millimètre près à votre organisation.
          </p>
        </div>

        {/* 6 Solutions Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`card-modern group flex flex-col justify-between ${
                  item.highlight ? 'border-primary-500/30' : ''
                }`}
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="text-primary-400 group-hover:bg-primary-500/10 flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:scale-110">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-neutral-300 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="group-hover:text-primary-300 mb-3 text-xl font-bold text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <Link
                    href={item.href}
                    className="group-hover:text-primary-300 inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors"
                  >
                    <span>Découvrir cette expertise</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Links */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link
            href="/services"
            className="btn-outline inline-flex items-center gap-2 text-xs sm:text-sm"
          >
            <span>Consulter l’ensemble de nos services</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
