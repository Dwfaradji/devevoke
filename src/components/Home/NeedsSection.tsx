import React from 'react';
import Link from 'next/link';
import {
  Lock,
  FileCheck2,
  Cpu,
  Users,
  Building2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface NeedItem {
  id: string;
  problem: string;
  solution: string;
  description: string;
  link: string;
  ctaText: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  highlight?: boolean;
}

const needs: NeedItem[] = [
  {
    id: 'custom-software',
    problem: '« Aucun logiciel du marché ne correspond exactement à nos processus réels »',
    solution: 'Logiciel métier sur-mesure',
    description:
      'Conception d’outils internes, portails professionnels et plateformes web adaptés à votre gouvernance, vos protocoles et vos équipes.',
    link: '/solutions-metier',
    ctaText: 'Voir notre approche logiciel',
    icon: Cpu,
    tag: 'Sur-mesure & Évolutif',
    highlight: true,
  },
  {
    id: 'website',
    problem: '« Notre site internet est vieillissant et ne génère pas de prospects qualifiés »',
    solution: 'Développement web & plateformes performantes',
    description:
      'Sites d’entreprise et plateformes web ultra-rapides sous Next.js, taillés pour la conversion, le référencement naturel (SEO) et l’image de marque.',
    link: '/developpement-web',
    ctaText: 'Découvrir le développement web',
    icon: Building2,
    tag: 'Visibilité & Conversion',
  },
  {
    id: 'mobile-app',
    problem: '« Nos intervenants sur le terrain perdent du temps avec des feuilles volantes »',
    solution: 'Application mobile & tablette hors-ligne',
    description:
      'Applications tactiles ergonomiques conçues pour les professionnels nomades (éducateurs, soignants, techniciens) : saisie rapide et mode déconnecté.',
    link: '/application-mobile',
    ctaText: 'Découvrir nos solutions mobiles',
    icon: Users,
    tag: 'Mobilité & Terrain',
  },
  {
    id: 'saas-product',
    problem: '« Nous voulons digitaliser un service et le proposer sous forme d’abonnement »',
    solution: 'Conception de plateforme SaaS',
    description:
      'Développement de votre produit logiciel cloud de A à Z : architecture multi-tenant, abonnements Stripe, espace client et sécurité renforcée.',
    link: '/developpement-saas',
    ctaText: 'Voir notre expertise SaaS',
    icon: Sparkles,
    tag: 'Produit Cloud B2B',
  },
  {
    id: 'automation',
    problem:
      '« Nos équipes passent des heures à ressaisir les mêmes données entre plusieurs outils »',
    solution: 'Automatisation & interconnexion d’outils',
    description:
      'Suppression des tâches manuelles répétitives, synchronisation automatique de vos bases et interconnexion de vos logiciels via APIs sécurisées.',
    link: '/automatisation',
    ctaText: 'Découvrir l’automatisation',
    icon: FileCheck2,
    tag: 'Productivité Immédiate',
  },
  {
    id: 'extranets-rgpd',
    problem: '« Nos échanges avec les usagers, familles et partenaires manquent de sécurité »',
    solution: 'Portails web & extranets sécurisés (RGPD)',
    description:
      'Espaces d’échange sécurisés, transmission chiffrée de documents sensibles et traçabilité complète des accès avec hébergement souverain en France.',
    link: '/solutions-metier',
    ctaText: 'Découvrir nos portails sécurisés',
    icon: Lock,
    tag: 'Conformité & Confiance',
  },
];

export default function NeedsSection() {
  return (
    <section className="bg-surface/50 relative border-t border-white/5 py-20 sm:py-28 lg:py-32">
      {/* Background Subtle Gradient */}
      <div className="bg-primary-600/5 pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <span className="section-label mb-3 inline-block">Partir de vos Réalités de Terrain</span>
          <h2 className="mb-5 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Quelle problématique souhaitez-vous{' '}
            <span className="text-gradient">résoudre en priorité ?</span>
          </h2>
          <p className="text-muted text-base leading-relaxed sm:text-lg">
            La technologie n’est qu’un moyen. Nous commençons toujours par écouter vos irritants
            quotidiens, vos contraintes métiers et vos objectifs opérationnels.
          </p>
        </div>

        {/* Needs Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {needs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 sm:p-7 ${
                  item.highlight
                    ? 'from-primary-950/40 via-surface to-surface border-primary-500/40 shadow-primary-950/30 hover:border-primary-400 bg-gradient-to-b shadow-xl'
                    : 'glass border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                        item.highlight
                          ? 'bg-primary-500/20 text-primary-400 border-primary-500/30 group-hover:scale-110'
                          : 'group-hover:text-primary-400 group-hover:border-primary-500/30 border-white/10 bg-white/5 text-gray-300'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-gray-300 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-primary-300 mb-2 text-sm font-semibold italic">
                    {item.problem}
                  </p>

                  <h3 className="group-hover:text-primary-400 mb-3 text-xl font-bold text-white transition-colors">
                    {item.solution}
                  </h3>

                  <p className="text-muted mb-6 text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <Link
                    href={item.link}
                    className="group-hover:text-primary-400 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="glass border-primary-500/20 mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border p-5 sm:mt-16 sm:flex-row sm:p-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="bg-primary-500/20 text-primary-400 border-primary-500/30 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white sm:text-base">
                Votre situation ne rentre dans aucune case ?
              </p>
              <p className="text-muted text-xs sm:text-sm">
                C’est normal : chaque établissement a ses particularités. Échangeons 30 minutes pour
                clarifier votre besoin.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-primary w-full shrink-0 text-sm sm:w-auto">
            <span>Demander un diagnostic offert</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
