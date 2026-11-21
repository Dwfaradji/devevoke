import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, CheckCircle2, Users, Lock, CalendarCheck } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative flex min-h-[92svh] w-full flex-col justify-center overflow-hidden border-b border-white/5 bg-gradient-to-b from-neutral-950 via-[#070d1d] to-neutral-950 pt-12 pb-16 sm:pt-24 sm:pb-20 lg:pt-36 lg:pb-28">
      {/* Subtle atmospheric glow lights */}
      <div className="bg-primary-600/15 pointer-events-none absolute top-1/4 left-1/4 h-[500px] w-[600px] -translate-x-1/2 rounded-full blur-[160px]" />
      <div className="bg-secondary-600/10 pointer-events-none absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full blur-[150px]" />
      <div className="bg-grid mask-image:linear-gradient(to_bottom,transparent,black,transparent) pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Narrative Positioning & CTAs (SSR immédiat, aucun blocage JS) */}
          <div className="space-y-6 text-center sm:space-y-7 lg:col-span-7 lg:text-left">
            {/* Sector Badge */}
            <div className="bg-primary-500/10 border-primary-500/20 text-primary-300 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-primary-500 relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span>Agence Digitale Spécialisée Médico-Social &amp; Développement Sur-Mesure</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[54px]">
              Solutions digitales &amp; développement sur-mesure pour le{' '}
              <span className="text-highlight">secteur médico-social</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto max-w-2xl text-base leading-relaxed font-normal text-neutral-300 sm:text-lg lg:mx-0">
              DevEvoke accompagne les établissements médico-sociaux (ESMS, IME, SESSAD, DITEP, ESAT,
              EHPAD) et associations gestionnaires dans la création et la refonte de sites web, le
              développement de logiciels métiers, d’applications mobiles hors-ligne et
              l’automatisation de leurs processus.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
              <Link
                href="/contact"
                className="from-primary-600 via-primary-500 to-secondary-500 shadow-primary-500/25 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-95 sm:w-auto"
              >
                <span>Parler de votre projet</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solutions-medico-social"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-medium text-neutral-200 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white sm:w-auto"
              >
                Découvrir nos solutions médico-sociales
              </Link>
            </div>

            {/* Reassurance Trust Markers */}
            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-6 text-left text-xs text-neutral-300 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                <span>Hébergement 100% France</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary-400 size-4 shrink-0" />
                <span>Conforme RGPD &amp; CNIL</span>
              </div>
              <div className="col-span-2 flex items-center gap-2 sm:col-span-1">
                <Users className="size-4 shrink-0 text-sky-400" />
                <span>Direct avec le fondateur</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Photography + Floating UI Glass Cards */}
          <div className="relative lg:col-span-5">
            <div className="group relative">
              {/* Outer decorative gradient border */}
              <div className="from-primary-500/30 via-secondary-500/20 to-primary-600/30 pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr opacity-70 blur-lg transition duration-700 group-hover:opacity-100" />

              {/* Main Photo Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-900 shadow-2xl">
                <Image
                  src="/images/home/hero_medicosocial_team.webp"
                  alt="Session de travail et coordination sur logiciel métier sur-mesure"
                  width={800}
                  height={600}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 42vw"
                  className="h-[340px] w-full object-cover object-center brightness-[0.95] contrast-[1.05] filter transition-transform duration-700 group-hover:scale-[1.02] sm:h-[480px] lg:h-[500px]"
                />

                {/* Gradient vignette for text overlay readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />

                {/* Floating Glass Pill Top Left */}
                <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-neutral-950/80 px-3 py-1 shadow-xl backdrop-blur-md sm:top-5 sm:left-5 sm:px-3.5 sm:py-1.5">
                  <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-medium text-white sm:text-xs">
                    Ingénierie Full-Stack Sur-Mesure
                  </span>
                </div>

                {/* Floating Glass Tag Top Right (visible sm+ to avoid mobile badge collision) */}
                <div className="bg-primary-950/80 border-primary-500/30 text-primary-200 absolute top-5 right-5 hidden rounded-xl border px-3 py-1.5 text-[10px] font-semibold shadow-xl backdrop-blur-md sm:block sm:text-[11px]">
                  Web • Mobile • SaaS • Métier
                </div>

                {/* Bottom Overlay Card: Real Impact */}
                <div className="absolute inset-x-3 bottom-3 space-y-2 rounded-2xl border border-white/15 bg-neutral-900/90 p-3 shadow-2xl backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:space-y-2.5 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary-500/20 text-primary-300 flex size-6 items-center justify-center rounded-lg sm:size-7">
                        <CalendarCheck className="size-3.5 sm:size-4" />
                      </div>
                      <span className="text-[11px] font-bold text-white sm:text-xs">
                        Outils Métiers &amp; Automatisation
                      </span>
                    </div>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-medium text-emerald-400 sm:text-[10px]">
                      Zéro double saisie
                    </span>
                  </div>

                  <p className="text-[10px] leading-snug text-neutral-300 sm:text-[11px]">
                    Des interfaces simples créées avec vos professionnels pour libérer du temps
                    utile et éliminer la complexité.
                  </p>

                  <div className="flex items-center justify-between border-t border-white/5 pt-1 text-[9px] text-neutral-400 sm:text-[10px]">
                    <span className="flex items-center gap-1">
                      <Lock className="text-primary-400 size-3" />
                      Données sécurisées en France
                    </span>
                    <span className="text-secondary-400 font-medium">
                      Mode hors-ligne disponible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
