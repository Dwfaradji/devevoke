import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Building2, ArrowRight, ShieldCheck } from 'lucide-react';

const featuredStructures = [
  {
    sigle: 'SESSAD & IME',
    badge: 'Enfance & Éducation Nomade',
    title: 'Outils mobiles et coordination pluridisciplinaire',
    desc: 'Des applications sur tablette et smartphone pensées pour les éducateurs et rééducateurs en tournée, avec saisie rapide de comptes-rendus et mode hors-ligne sans réseau.',
    image: '/images/home/sessad_field_educator.webp',
    alt: 'Éducatrice spécialisée en intervention auprès d’un jeune en atelier d’apprentissage',
    tag: 'Mode Déconnecté',
    href: '/solutions-medico-social/sessad',
  },
  {
    sigle: 'ESAT',
    badge: 'Travail Protégé & Ateliers',
    title: 'Pilotage de production & suivi des travailleurs',
    desc: 'Un logiciel sur-mesure pour planifier les ateliers (bois, espaces verts, conditionnement), éditer les devis et consolider le suivi des projets personnalisés sans alourdir les moniteurs.',
    image: '/images/home/esat_workshop_activity.webp',
    alt: 'Travailleurs et moniteur d’atelier en ESAT consultant un planning de production',
    tag: 'Gestion d’Ateliers',
    href: '/solutions-medico-social/esat',
  },
  {
    sigle: 'EHPAD & Résidences',
    badge: 'Grand Âge & Transmissions',
    title: 'Portail usagers, familles et transmissions sécurisées',
    desc: 'Espaces numériques intuitifs pour fluidifier les transmissions entre équipes jour/nuit et partager en toute transparence la vie de l’établissement avec les familles.',
    image: '/images/home/ehpad_coordination_life.webp',
    alt: 'Animatrice en EHPAD partageant une activité sur tablette avec une résidente dans un salon lumineux',
    tag: 'Lien Familles',
    href: '/solutions-medico-social/ehpad',
  },
];

const otherEstablishments = [
  {
    sigle: 'FAM & MAS',
    title: 'Foyers & Maisons d’Accueil Spécialisées',
    focus: 'Organisation du quotidien des résidents, astreintes et traçabilité des interventions.',
    href: '/medico-social',
  },
  {
    sigle: 'Associations Multi-Sites',
    title: 'Associations Gestionnaires',
    focus:
      'Centralisation des données, reporting de gouvernance et pilotage consolidé multi-établissements.',
    href: '/solutions-medico-social/associations',
  },
  {
    sigle: 'SAAD & SSIAD',
    title: 'Services d’Aide & Soins à Domicile',
    focus: 'Gestion des plannings d’interventions, feuilles de route et coordination sécurisée.',
    href: '/solutions-metier',
  },
];

export default function SectorSection() {
  return (
    <section className="relative border-t border-white/5 bg-neutral-900/60 py-12 sm:py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <span className="section-label">
            <Building2 className="size-3.5" />
            Pôle Sectoriel d’Excellence
          </span>
          <h2 className="mb-4 text-2xl leading-tight font-bold tracking-tight text-white sm:mb-5 sm:text-4xl lg:text-5xl">
            Une expertise éprouvée dans le médico-social & associatif
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300 sm:text-lg">
            Parce que les contraintes humaines et réglementaires du médico-social exigent une
            rigueur d’ingénierie absolue, DevEvoke y a développé un savoir-faire approfondi pour
            simplifier le quotidien des établissements.
          </p>
        </div>

        {/* 3 Featured Photographic Cards */}
        <div className="mb-10 grid grid-cols-1 gap-6 sm:mb-16 sm:gap-8 lg:grid-cols-3">
          {featuredStructures.map((struct, idx) => (
            <Link
              key={idx}
              href={struct.href}
              className="group hover:border-primary-500/40 hover:shadow-primary-500/10 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 shadow-xl transition-all duration-500 hover:shadow-2xl"
            >
              {/* Photo Header */}
              <div className="relative h-48 w-full overflow-hidden sm:h-60">
                <Image
                  src={struct.image}
                  alt={struct.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="h-full w-full object-cover object-center brightness-[0.92] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />

                {/* Floating Tag */}
                <div className="text-primary-300 absolute top-3 left-3 rounded-full border border-white/15 bg-neutral-950/80 px-3 py-1 text-[11px] font-semibold backdrop-blur-md sm:top-4 sm:left-4">
                  {struct.sigle}
                </div>

                <div className="bg-primary-950/80 border-primary-500/30 absolute top-3 right-3 rounded-full border px-3 py-1 font-mono text-[10px] text-emerald-300 backdrop-blur-md sm:top-4 sm:right-4">
                  {struct.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-7">
                <div className="space-y-2">
                  <span className="text-secondary-400 block text-[11px] font-semibold tracking-wider uppercase">
                    {struct.badge}
                  </span>
                  <h3 className="group-hover:text-primary-300 text-lg leading-snug font-bold text-white transition-colors sm:text-xl">
                    {struct.title}
                  </h3>
                  <p className="text-xs leading-relaxed font-normal text-neutral-300 sm:text-sm">
                    {struct.desc}
                  </p>
                </div>

                <div className="text-primary-400 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-semibold transition-colors group-hover:text-white">
                  <span>Découvrir les solutions adaptées</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Establishments Row */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {otherEstablishments.map((est, idx) => (
            <Link
              key={idx}
              href={est.href}
              className="card-modern group hover:border-primary-500/40 flex flex-col justify-between p-5 text-left sm:p-6"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-primary-400 font-mono text-sm font-bold">{est.sigle}</span>
                  <ArrowRight className="size-4 text-neutral-500 transition-all group-hover:translate-x-1 group-hover:text-white" />
                </div>
                <h4 className="group-hover:text-primary-300 mb-1.5 text-base font-bold text-white transition-colors">
                  {est.title}
                </h4>
                <p className="text-xs leading-relaxed text-neutral-400">{est.focus}</p>
              </div>
              <div className="text-primary-400 mt-3 border-t border-white/5 pt-3 text-[11px] font-medium">
                Consulter les cas d&apos;usage →
              </div>
            </Link>
          ))}
        </div>

        {/* Reassurance Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center text-xs text-neutral-400 sm:mt-16 sm:flex-row sm:p-6 sm:text-left">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="size-4 shrink-0 text-emerald-400" />
            <span>
              Toutes les données associatives sont hébergées sur des serveurs souverains en France
              et chiffrées selon les préconisations CNIL.
            </span>
          </div>
          <Link
            href="/medico-social"
            className="hover:text-primary-300 inline-block pt-1 font-semibold text-white sm:pt-0 sm:whitespace-nowrap"
          >
            Explorer notre hub médico-social complet →
          </Link>
        </div>
      </div>
    </section>
  );
}
