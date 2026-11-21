'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { UserCheck, Code2, Layers, ShieldCheck } from 'lucide-react';

import myPhoto from '@/images/about/photo-profil-1920.webp';

const founderPillars = [
  {
    icon: UserCheck,
    title: 'Interlocuteur Unique & Direct',
    desc: 'Pas de commercial intermédiaire ni de déperdition d’information : vous échangez directement avec celui qui conçoit, développe et déploie votre solution.',
  },
  {
    icon: Layers,
    title: 'Compréhension du Besoin Métier',
    desc: 'Chaque projet démarre par une immersion dans vos processus réels, vos contraintes d’équipe et vos objectifs opérationnels, avant tout choix technique.',
  },
  {
    icon: Code2,
    title: 'Maîtrise Technique Complète',
    desc: 'De l’architecture logicielle (Next.js, TypeScript, PostgreSQL) à la sécurité, aux API et à la maintenance, l’ensemble de la chaîne est sous contrôle rigoureux.',
  },
  {
    icon: ShieldCheck,
    title: 'Accompagnement de Bout en Bout',
    desc: 'DevEvoke assure un suivi sur le long terme : conception, cadrage fonctionnel, développement, mise en production souveraine et évolutions régulières.',
  },
];

const TeamSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <span className="section-label mb-3 inline-block">Structure Indépendante & Proximité</span>
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          Une agence portée par son <span className="text-highlight">fondateur</span>
        </h2>
        <p className="text-muted mx-auto max-w-2xl text-lg">
          Chez DevEvoke, pas d&apos;intermédiaires superflus. Vous bénéficiez d&apos;un dialogue
          direct, d&apos;une agilité totale et d&apos;un haut niveau d&apos;exigence technique pour
          vos projets numériques.
        </p>
      </div>

      {/* Founder Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass group relative mb-16 overflow-hidden rounded-3xl border border-white/10 p-8 md:p-12"
      >
        <div className="from-primary-400/10 absolute inset-0 z-0 bg-gradient-to-br to-transparent opacity-50" />

        <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row md:items-start">
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl border-2 border-white/15 shadow-2xl md:h-60 md:w-60">
            <Image
              src={myPhoto}
              alt="Boucif Faradji - Fondateur de DevEvoke"
              width={400}
              height={400}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold text-white">Boucif Faradji</h3>
              <p className="text-primary-400 mt-1 text-sm font-semibold tracking-wide uppercase">
                Fondateur & Développeur Full-Stack
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Développeur passionné par l’ingénierie logicielle et les architectures web modernes,
              j&apos;ai créé DevEvoke avec une vision claire : concevoir des solutions numériques et
              des logiciels métier sur mesure qui répondent aux contraintes réelles des entreprises,
              des organisations et des structures médico-sociales.
            </p>
            <p className="text-muted leading-relaxed">
              Que ce soit pour concevoir une plateforme SaaS métier, digitaliser un processus
              opérationnel complexe ou bâtir une application mobile professionnelle, DevEvoke
              privilégie toujours l&apos;utilité concrète, la pérennité du code et la proximité
              humaine.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-neutral-300 md:justify-start">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">
                Next.js / React
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">
                TypeScript
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">
                Node.js / PostgreSQL
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">
                React Native
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono">
                Hébergement France / RGPD
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {founderPillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="card-modern space-y-3 p-6 text-left"
            >
              <div className="text-primary-400 flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Icon className="size-5" />
              </div>
              <h3 className="text-base font-bold text-white">{p.title}</h3>
              <p className="text-muted text-xs leading-relaxed font-normal">{p.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
