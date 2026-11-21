import React from 'react';
import Image from 'next/image';
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  RefreshCw,
  Layers,
  Users2,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    num: '01',
    name: 'Comprendre',
    title: 'Immersion & écoute du terrain',
    desc: 'Échange avec vos directions, chefs de service et équipes terrain pour cartographier vos processus réels et identifier les vrais points de friction.',
    icon: Search,
  },
  {
    num: '02',
    name: 'Concevoir',
    title: 'Co-design UX & ergonomie',
    desc: 'Maquettage interactif simplifié calqué sur vos habitudes d’accompagnement. Pas de jargon technique, des boutons clairs et une accessibilité totale.',
    icon: PenTool,
  },
  {
    num: '03',
    name: 'Développer',
    title: 'Ingénierie moderne & robuste',
    desc: 'Architecture Next.js / TypeScript pérenne, bases relationnelles sécurisées et synchronisation fluide avec mode hors-ligne pour le terrain.',
    icon: Code2,
  },
  {
    num: '04',
    name: 'Déployer',
    title: 'Mise en production sécurisée',
    desc: 'Hébergement souverain sur serveurs français, respect rigoureux du RGPD / CNIL et formation humaine des équipes pour une adoption immédiate.',
    icon: Rocket,
  },
  {
    num: '05',
    name: 'Faire évoluer',
    title: 'Support & accompagnement continu',
    desc: 'Mises à jour préventives, assistance réactive et évolutions continues selon la croissance de votre organisation.',
    icon: RefreshCw,
  },
];

export default function MethodologySection() {
  return (
    <section className="relative border-t border-white/5 bg-neutral-900/40 py-12 sm:py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <span className="section-label">
            <Layers className="size-3.5" />
            Méthodologie DevEvoke
          </span>
          <h2 className="mb-4 text-2xl leading-tight font-bold tracking-tight text-white sm:mb-5 sm:text-4xl lg:text-5xl">
            Une approche humaine et pragmatique, pensée pour vos équipes
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-lg">
            De la première immersion jusqu&apos;au suivi dans le temps, nous construisons la
            solution avec les professionnels qui l&apos;utiliseront au quotidien.
          </p>
        </div>

        {/* Featured Photo Banner: Co-design in Action */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/90 shadow-2xl sm:mb-16">
          <div className="grid grid-cols-1 items-center lg:grid-cols-12">
            {/* Photo Column */}
            <div className="relative h-[240px] w-full overflow-hidden sm:h-[400px] lg:col-span-6 lg:h-[440px]">
              <Image
                src="/images/home/workshop_coconception.webp"
                alt="Atelier collaboratif de co-conception numérique entre DevEvoke et des décideurs d'organisation"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover object-center brightness-[0.95] contrast-[1.05]"
              />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-neutral-900/90 lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent lg:hidden" />

              <div className="text-primary-300 absolute top-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-neutral-950/80 px-3 py-1.5 text-xs font-semibold backdrop-blur-md sm:top-4 sm:left-4">
                <Users2 className="size-3.5" />
                <span>Atelier de Cadrage Fonctionnel</span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="space-y-4 p-5 text-left sm:space-y-5 sm:p-10 lg:col-span-6 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="size-3.5" />
                <span>Co-Conception Inclusive</span>
              </div>

              <h3 className="text-xl leading-snug font-bold text-white sm:text-3xl">
                Nous nous déplaçons dans vos structures pour observer les pratiques réelles
              </h3>

              <p className="text-xs leading-relaxed font-normal text-neutral-300 sm:text-base">
                Un logiciel médico-social ne s&apos;imagine pas derrière un bureau d&apos;ingénieurs
                à distance. Nous nous asseyons avec vos directeurs, éducateurs et soignants pour
                tester les maquettes en conditions réelles et valider chaque écran avant le moindre
                développement.
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2 text-xs text-neutral-300 sm:gap-6">
                <div className="space-y-1">
                  <span className="block text-lg font-bold text-white sm:text-xl">100%</span>
                  <span className="text-[11px] text-neutral-400 sm:text-xs">
                    Adapté aux processus
                  </span>
                </div>
                <div className="space-y-1 border-l border-white/10 pl-2 sm:pl-6">
                  <span className="block text-lg font-bold text-emerald-400 sm:text-xl">Zéro</span>
                  <span className="text-[11px] text-neutral-400 sm:text-xs">Jargon technique</span>
                </div>
                <div className="space-y-1 border-l border-white/10 pl-2 sm:pl-6">
                  <span className="text-primary-400 block text-lg font-bold sm:text-xl">
                    Sur-mesure
                  </span>
                  <span className="text-[11px] text-neutral-400 sm:text-xs">Évolutif</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="card-modern group hover:border-primary-500/40 relative flex flex-col justify-between p-5 text-left sm:p-6"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-primary-500/30 group-hover:text-primary-400 font-mono text-3xl font-black transition-colors">
                      {st.num}
                    </span>
                    <div className="group-hover:text-primary-300 group-hover:bg-primary-500/10 rounded-xl bg-white/5 p-2.5 text-neutral-300 transition-colors">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <span className="text-secondary-400 mb-1 block text-[11px] font-semibold tracking-wider uppercase">
                    Étape {idx + 1} • {st.name}
                  </span>

                  <h4 className="mb-2 text-base leading-snug font-bold text-white">{st.title}</h4>

                  <p className="text-xs leading-relaxed font-normal text-neutral-400">{st.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
