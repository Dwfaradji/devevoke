'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.webp';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-white/10 bg-neutral-950 text-neutral-400 sm:mt-24">
      {/* Subtle top glow */}
      <div className="via-primary-500/30 absolute top-0 left-1/2 h-px w-3/4 max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:mb-16 sm:gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Col */}
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" aria-label="DevEvoke" className="group inline-flex items-center gap-3">
              <div className="shadow-primary-500/10 group-hover:border-primary-500/30 relative size-10 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 p-1 shadow-md transition-all duration-300 group-hover:scale-105">
                <Image
                  src={logo}
                  alt="DevEvoke Logo"
                  width={40}
                  height={40}
                  className="size-full object-contain"
                />
              </div>
              <span className="flex items-center text-xl font-black tracking-tight text-white">
                Dev<span className="text-primary-400">Evoke</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
              DevEvoke est une agence digitale française spécialisée dans les solutions numériques
              et le développement sur-mesure pour le secteur médico-social (ESMS, associations
              gestionnaires, IME, SESSAD, DITEP, ESAT, EHPAD) : sites web Next.js, logiciels
              métiers, applications mobiles et automatisation. Basée à Perpignan (Occitanie),
              intervention partout en France.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="https://www.linkedin.com/company/devevoke/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DevEvoke sur LinkedIn"
                className="hover:border-primary-500/40 hover:bg-primary-500/10 flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 transition-all hover:text-white"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/Dwfaradji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub DevEvoke"
                className="hover:border-primary-500/40 hover:bg-primary-500/10 flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 transition-all hover:text-white"
              >
                <GitHubIcon />
              </Link>
            </div>
          </div>

          {/* Col 1: Expertises */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Expertises & Pôles
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/developpement-web" className="transition-colors hover:text-white">
                  Développement Web Sur-Mesure
                </Link>
              </li>
              <li>
                <Link href="/application-mobile" className="transition-colors hover:text-white">
                  Applications Mobiles & Tablettes
                </Link>
              </li>
              <li>
                <Link href="/developpement-saas" className="transition-colors hover:text-white">
                  Conception de Plateformes SaaS
                </Link>
              </li>
              <li>
                <Link href="/solutions-metier" className="transition-colors hover:text-white">
                  Logiciels Métier Sur-Mesure
                </Link>
              </li>
              <li>
                <Link href="/automatisation" className="transition-colors hover:text-white">
                  Automatisation des Processus
                </Link>
              </li>
              <li>
                <Link href="/securite-et-conformite" className="transition-colors hover:text-white">
                  Sécurité & Hébergement Souverain
                </Link>
              </li>
              <li>
                <Link href="/templates" className="transition-colors hover:text-white">
                  Socles & Modèles (Templates)
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary-300 text-primary-400 font-medium transition-colors"
                >
                  Tous nos services & méthodologie →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Pôle Médico-Social */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Univers Médico-Social
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/agence-digitale-medico-social"
                  className="hover:text-primary-300 text-primary-400 font-medium transition-colors"
                >
                  Agence Digitale Médico-Social
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-medico-social"
                  className="transition-colors hover:text-white"
                >
                  Solutions Médico-Sociales
                </Link>
              </li>
              <li>
                <Link
                  href="/developpement-logiciel-medico-social"
                  className="transition-colors hover:text-white"
                >
                  Développement Logiciel ESMS
                </Link>
              </li>
              <li>
                <Link href="/medico-social" className="transition-colors hover:text-white">
                  Transformation Numérique ESMS
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-medico-social/associations"
                  className="transition-colors hover:text-white"
                >
                  Associations Gestionnaires
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-medico-social/ime"
                  className="transition-colors hover:text-white"
                >
                  Solutions pour IME &amp; DITEP
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-medico-social/sessad"
                  className="transition-colors hover:text-white"
                >
                  Solutions pour SESSAD &amp; SAVS
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-medico-social/esat"
                  className="transition-colors hover:text-white"
                >
                  Gestion Ateliers ESAT
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions-medico-social/ehpad"
                  className="transition-colors hover:text-white"
                >
                  Solutions pour EHPAD
                </Link>
              </li>
              <li>
                <Link href="/diagnostic-numerique" className="transition-colors hover:text-white">
                  Diagnostic Numérique Gratuit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Entreprise & Contact */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              L’Agence & Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/a-propos" className="transition-colors hover:text-white">
                  L’Agence & Fondateur
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="transition-colors hover:text-white">
                  Réalisations & Projets
                </Link>
              </li>
              <li>
                <Link href="/info-procedure" className="transition-colors hover:text-white">
                  Processus de Réalisation
                </Link>
              </li>
              <li>
                <Link href="/foire-aux-questions" className="transition-colors hover:text-white">
                  Foire Aux Questions (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Articles & Guides Conseils
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="transition-colors hover:text-white">
                  Informations Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-300 font-medium text-white transition-colors"
                >
                  Échanger avec le fondateur →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner with Hosting & Legal */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-neutral-400 sm:flex-row sm:pt-8 sm:text-left">
          <div>
            &copy; {currentYear} <span className="font-medium text-neutral-300">DevEvoke</span> —
            Agence digitale & solutions métier sur-mesure (Perpignan, Occitanie & France).
            Hébergement souverain ISO 27001 en France.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start sm:gap-x-6">
            <Link href="/mentions-legal" className="py-1 transition-colors hover:text-white">
              Mentions Légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="py-1 transition-colors hover:text-white"
            >
              Confidentialité & RGPD
            </Link>
            <Link href="/cgv" className="py-1 transition-colors hover:text-white">
              CGV
            </Link>
            <Link
              href="/securite-et-conformite"
              className="py-1 transition-colors hover:text-white"
            >
              Sécurité & Conformité
            </Link>
            <Link href="/info-tarif" className="py-1 transition-colors hover:text-white">
              Modalités Tarifaires
            </Link>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('openCookiePreferences'));
                }
              }}
              className="cursor-pointer border-none bg-transparent py-1 text-xs text-neutral-400 transition-colors hover:text-white"
            >
              Gestion des cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
