import React from 'react';
import { Fade } from '@/components/ui/Fade';
import Image from 'next/image';

const AboutHeader = () => {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-32">
      {/* Arrière-plan avec le dégradé */}
      <div className="from-primary/20 via-secondary/10 pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b to-transparent blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Colonne Texte */}
          <div className="z-10 w-full text-center lg:w-1/2 lg:pr-8 lg:text-left">
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              <div className="glass mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                <span className="bg-primary-400 h-2 w-2 animate-pulse rounded-full" />
                <span className="text-sm font-medium tracking-wide text-white uppercase">
                  Agence Digitale & Solutions Métier
                </span>
              </div>

              <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                L&apos;ingénierie numérique pensée pour{' '}
                <span className="text-highlight">votre métier.</span>
              </h1>

              <p className="text-muted mb-6 text-lg leading-relaxed">
                <strong>DevEvoke</strong> est une agence digitale indépendante spécialisée dans la
                conception de plateformes web, applications mobiles, architectures SaaS et logiciels
                métier sur mesure. Nous accompagnons les entreprises, TPE, PME, startups,
                associations et établissements médico-sociaux dans la digitalisation durable et
                pragmatique de leurs activités.
              </p>
              <p className="text-muted mb-10 text-lg leading-relaxed">
                Notre engagement : <strong>supprimer les frictions opérationnelles</strong>,
                automatiser les tâches répétitives et concevoir des outils fiables que vos équipes
                adoptent avec enthousiasme, tout en garantissant un{' '}
                <strong>hébergement souverain en France</strong> et une conformité rigoureuse au
                RGPD.
              </p>

              {/* Engagements Clés */}
              <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="glass border-l-primary-500 rounded-2xl border border-l-4 border-white/5 p-3.5 sm:p-4">
                  <div className="mb-0.5 text-base font-bold text-white sm:mb-1 sm:text-2xl">
                    Sur-Mesure
                  </div>
                  <div className="text-muted-light text-[11px] sm:text-xs">
                    Calqué sur vos processus réels
                  </div>
                </div>
                <div className="glass border-l-secondary-500 rounded-2xl border border-l-4 border-white/5 p-3.5 sm:p-4">
                  <div className="mb-0.5 text-base font-bold text-white sm:mb-1 sm:text-2xl">
                    100% RGPD
                  </div>
                  <div className="text-muted-light text-[11px] sm:text-xs">
                    Sécurité et conformité CNIL
                  </div>
                </div>
                <div className="glass rounded-2xl border border-l-4 border-white/5 border-l-emerald-500 p-3.5 sm:p-4">
                  <div className="mb-0.5 text-base font-bold text-white sm:mb-1 sm:text-2xl">
                    France
                  </div>
                  <div className="text-muted-light text-[11px] sm:text-xs">
                    Hébergement cloud souverain
                  </div>
                </div>
                <div className="glass rounded-2xl border border-l-4 border-white/5 border-l-sky-500 p-3.5 sm:p-4">
                  <div className="mb-0.5 text-base font-bold text-white sm:mb-1 sm:text-2xl">
                    Proximité
                  </div>
                  <div className="text-muted-light text-[11px] sm:text-xs">
                    Interlocuteur direct & agilité
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Colonne Image: Photographie authentique d'atelier collaboratif */}
          <div className="relative z-10 w-full lg:w-1/2">
            <Fade direction="up" delay={200} triggerOnce>
              <div className="glass group relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                <Image
                  src="/images/home/workshop_coconception.webp"
                  alt="Atelier collaboratif de conception numérique DevEvoke avec une direction d'association médico-sociale"
                  width={1000}
                  height={750}
                  className="h-[260px] w-full transform object-cover object-center brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105 sm:h-[500px]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent opacity-50" />
                <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/10 bg-neutral-900/80 p-3 backdrop-blur-md sm:right-6 sm:bottom-6 sm:left-6 sm:p-4">
                  <span className="block text-xs font-bold text-white">
                    Immersion terrain & co-conception
                  </span>
                  <p className="text-[11px] text-neutral-300">
                    Chaque solution est imaginée avec vos professionnels pour garantir une adoption
                    naturelle.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
