import React from 'react';
import Image from 'next/image';
import photoProfil from '@/images/about/photo-profil-1920.webp';
import { Users2, Sliders, CheckCircle2, Cpu, HeartHandshake, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Users2,
    title: 'Compréhension du terrain',
    desc: 'Nous cherchons d’abord à comprendre les contraintes humaines et organisationnelles de votre établissement avant de proposer la moindre brique technique.',
  },
  {
    icon: Sliders,
    title: 'Solutions sur-mesure',
    desc: 'Aucune solution générique imposée. Votre outil informatique est calqué sur votre histoire associative et vos protocoles internes.',
  },
  {
    icon: CheckCircle2,
    title: 'Approche pragmatique',
    desc: 'Priorité absolue à l’utilité réelle et à l’adoption par les professionnels. Nous concevons des outils simples pour enlever de la charge mentale, pas pour en ajouter.',
  },
  {
    icon: Cpu,
    title: 'Technologie moderne & souveraine',
    desc: 'Développement sur des socles techniques actuels (Next.js, TypeScript, PostgreSQL), hébergement souverain en France et conformité rigoureuse au RGPD.',
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement dans la durée',
    desc: 'DevEvoke n’est pas un prestataire ponctuel qui disparaît après la livraison. Nous assurons la maintenance, le support et l’évolution pérenne de vos solutions.',
  },
];

export default function WhyDevEvoke() {
  return (
    <section className="relative border-t border-white/5 bg-neutral-950 py-12 sm:py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <span className="section-label">
            <ShieldCheck className="size-3.5" />
            Pourquoi Choisir DevEvoke
          </span>
          <h2 className="mb-4 text-2xl leading-tight font-bold tracking-tight text-white sm:mb-5 sm:text-4xl lg:text-5xl">
            Un partenaire numérique qui comprend vos enjeux métier
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-lg">
            Ce qui nous distingue : l’alliance entre une véritable expertise logicielle moderne et
            une immersion sincère dans le quotidien de vos équipes.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="mb-10 grid grid-cols-1 gap-5 sm:mb-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.slice(0, 3).map((r, idx) => {
            const Icon = r.icon;
            return (
              <div key={idx} className="card-modern group space-y-4 p-5 text-left sm:p-8">
                <div className="text-primary-400 group-hover:bg-primary-500/10 flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:scale-110">
                  <Icon className="size-6" />
                </div>
                <h3 className="group-hover:text-primary-300 text-lg font-bold text-white transition-colors sm:text-xl">
                  {r.title}
                </h3>
                <p className="text-xs leading-relaxed font-normal text-neutral-400 sm:text-sm">
                  {r.desc}
                </p>
              </div>
            );
          })}

          {reasons.slice(3).map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx + 3}
                className="card-modern lg:col-span-1.5 group space-y-4 p-5 text-left sm:p-8"
              >
                <div className="text-secondary-400 group-hover:bg-secondary-500/10 flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all group-hover:scale-110">
                  <Icon className="size-6" />
                </div>
                <h3 className="group-hover:text-primary-300 text-lg font-bold text-white transition-colors sm:text-xl">
                  {r.title}
                </h3>
                <p className="text-xs leading-relaxed font-normal text-neutral-400 sm:text-sm">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Human Quote Banner with Real Portrait */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 p-5 shadow-2xl sm:p-10">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-8 sm:text-left">
            {/* Founder Avatar with subtle aura */}
            <div className="relative shrink-0">
              <div className="from-primary-500 to-secondary-500 absolute -inset-1 rounded-full bg-gradient-to-tr opacity-60 blur-sm" />
              <div className="relative size-20 overflow-hidden rounded-full border-2 border-white/20 shadow-xl sm:size-24">
                <Image
                  src={photoProfil}
                  alt="Boucif Faradji, Fondateur de DevEvoke"
                  width={120}
                  height={120}
                  sizes="96px"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Quote & Signature */}
            <div className="flex-1 space-y-3">
              <blockquote className="text-sm leading-relaxed font-medium text-neutral-200 italic sm:text-lg">
                « Nous ne venons pas imposer un logiciel prêt à l&apos;emploi. Nous venons vous
                écouter, comprendre vos irritants et construire l&apos;outil simple qui libère du
                temps utile pour vos équipes. »
              </blockquote>
              <div className="flex flex-col justify-between gap-1 pt-1 sm:flex-row sm:items-center">
                <span className="text-sm font-bold text-white">Boucif Faradji</span>
                <span className="text-primary-400 text-xs font-semibold tracking-wider uppercase">
                  Fondateur & Développeur Full-Stack
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
