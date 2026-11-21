'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ImportLogo from '@/components/ui/Logo/importLogo';
import {
  ChevronDown,
  Globe,
  Cpu,
  Cloud,
  Smartphone,
  Workflow,
  ShieldCheck,
  ArrowRight,
  Building2,
  LayoutGrid,
} from 'lucide-react';

const solutionItems = [
  {
    title: 'Développement Web & Plateformes',
    desc: 'Sites d’entreprise Next.js, plateformes réactives et portails web.',
    href: '/developpement-web',
    icon: Globe,
  },
  {
    title: 'Applications Mobiles & Tablettes',
    desc: 'Outils tactiles iOS & Android hors-ligne pour équipes nomades.',
    href: '/application-mobile',
    icon: Smartphone,
  },
  {
    title: 'Conception de Plateformes SaaS',
    desc: 'Logiciels cloud multi-tenants, facturation Stripe et API REST.',
    href: '/developpement-saas',
    icon: Cloud,
  },
  {
    title: 'Logiciels Métier Sur-Mesure',
    desc: 'Remplacement de tableurs Excel et outils de gestion internes.',
    href: '/solutions-metier',
    icon: Cpu,
  },
  {
    title: 'Automatisation des Processus',
    desc: 'Suppression des doubles saisies et synchronisation via API.',
    href: '/automatisation',
    icon: Workflow,
  },
  {
    title: 'Sécurité & Hébergement Souverain',
    desc: 'Serveurs sécurisés ISO 27001 en France et conformité RGPD.',
    href: '/securite-et-conformite',
    icon: ShieldCheck,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu au changement de route
  useEffect(() => {
    setOpenMenu(false);
    setSolutionsDropdown(false);
  }, [pathname]);

  // Bloquer le scroll lors de l'ouverture mobile
  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMenu]);

  const handleMouseEnterSolutions = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setSolutionsDropdown(true);
  };

  const handleMouseLeaveSolutions = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdown(false);
    }, 200);
  };

  const isSolutionActive =
    pathname.startsWith('/developpement-web') ||
    pathname.startsWith('/application-mobile') ||
    pathname.startsWith('/developpement-saas') ||
    pathname.startsWith('/solutions-metier') ||
    pathname.startsWith('/automatisation') ||
    pathname.startsWith('/securite-et-conformite') ||
    pathname.startsWith('/services');

  return (
    <>
      <nav
        aria-label="Navigation principale"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/10 bg-neutral-950/85 shadow-2xl shadow-black/40 backdrop-blur-2xl'
            : 'border-b border-transparent bg-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Retour à l'accueil de DevEvoke"
            className="group relative z-10 flex shrink-0 items-center"
          >
            <ImportLogo displayColor="colorS" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterSolutions}
              onMouseLeave={handleMouseLeaveSolutions}
            >
              <button
                type="button"
                onClick={() => setSolutionsDropdown(!solutionsDropdown)}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isSolutionActive
                    ? 'bg-white/5 text-white'
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
                aria-expanded={solutionsDropdown}
                aria-haspopup="true"
              >
                <span>Expertises</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    solutionsDropdown ? 'text-primary-400 rotate-180' : 'text-neutral-400'
                  }`}
                />
              </button>

              {/* Mega-menu Dropdown */}
              {solutionsDropdown && (
                <div className="animate-in fade-in slide-in-from-top-2 absolute top-full left-0 z-50 mt-2 w-[540px] rounded-2xl border border-white/10 bg-neutral-900/95 p-5 shadow-2xl shadow-black/60 backdrop-blur-2xl duration-200">
                  <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                      Pôles d&apos;ingénierie logicielle
                    </span>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/medico-social"
                        className="text-secondary-400 hover:text-secondary-300 inline-flex items-center gap-1 text-xs font-medium"
                      >
                        <Building2 className="size-3" />
                        <span>Pôle Médico-Social</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {solutionItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          className="group flex items-start gap-3 rounded-xl border border-transparent p-3 text-left transition-all hover:border-white/5 hover:bg-white/5"
                        >
                          <div className="group-hover:text-primary-400 group-hover:bg-primary-500/10 shrink-0 rounded-lg bg-white/5 p-2 text-neutral-300 transition-colors">
                            <Icon className="size-4" />
                          </div>
                          <div>
                            <div className="group-hover:text-primary-300 text-xs font-semibold text-white transition-colors">
                              {item.title}
                            </div>
                            <div className="mt-0.5 line-clamp-1 text-[11px] text-neutral-400">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="items-cente mt-3 flex justify-end border-t border-white/5 pt-3 text-xs">
                    <Link
                      href="/services"
                      className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-1 text-xs font-medium"
                    >
                      <span>Tous les services</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/medico-social"
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                pathname === '/medico-social'
                  ? 'bg-white/5 text-white'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              Médico-Social
            </Link>

            <Link
              href="/realisations"
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                pathname === '/realisations'
                  ? 'bg-white/5 text-white'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              Réalisations
            </Link>

            <Link
              href="/diagnostic-numerique"
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                pathname === '/diagnostic-numerique'
                  ? 'bg-white/5 text-white'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              Diagnostic
            </Link>

            <Link
              href="/blog"
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith('/blog')
                  ? 'bg-white/5 text-white'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              Ressources
            </Link>

            <Link
              href="/a-propos"
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                pathname === '/a-propos'
                  ? 'bg-white/5 text-white'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              L’Agence
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-neutral-950 shadow-lg shadow-white/10 transition-all hover:bg-neutral-200 sm:text-sm"
            >
              <span>Parler de votre projet</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Burger Mobile */}
          <button
            type="button"
            aria-label={openMenu ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
            aria-expanded={openMenu}
            onClick={() => setOpenMenu(!openMenu)}
            className="focus:ring-primary-400 relative z-50 flex size-11 min-h-[44px] min-w-[44px] cursor-pointer flex-col items-center justify-center gap-[6px] rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 focus:ring-2 focus:outline-none active:scale-95 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                openMenu ? 'translate-y-[8px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                openMenu ? 'scale-x-0 opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                openMenu ? '-translate-y-[8px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-neutral-950/98 px-5 pt-[max(5.5rem,calc(env(safe-area-inset-top)+4.5rem))] pb-[max(2.5rem,calc(env(safe-area-inset-bottom)+1.5rem))] backdrop-blur-3xl transition-all duration-300 sm:px-8 lg:hidden ${
          openMenu ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-md flex-col space-y-6">
          {/* Main Links */}
          <div className="space-y-1.5 border-b border-white/10 pb-5">
            {[
              { href: '/services', label: 'Nos Expertises & Services' },
              { href: '/medico-social', label: 'Pôle Médico-Social' },
              { href: '/realisations', label: 'Réalisations & Études de Cas' },
              { href: '/diagnostic-numerique', label: 'Diagnostic Numérique Gratuit' },
              { href: '/blog', label: 'Ressources & Guides' },
              { href: '/a-propos', label: 'L’Agence & Fondateur' },
            ].map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-base font-semibold transition-all active:scale-[0.99] sm:text-lg ${
                    isActive
                      ? 'bg-primary-500/15 text-primary-300 border-primary-500/30 border'
                      : 'text-neutral-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    className={`size-4 transition-transform ${isActive ? 'text-primary-400 translate-x-0.5' : 'text-neutral-500'}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Quick Solutions Submenu */}
          <div className="space-y-2.5">
            <span className="block px-1 text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
              Solutions directes :
            </span>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {solutionItems.map((sol) => {
                const SolIcon = sol.icon;
                const isSolActive = pathname === sol.href || pathname.startsWith(sol.href);
                return (
                  <Link
                    key={sol.href}
                    href={sol.href}
                    className={`flex items-center gap-3 rounded-xl p-2.5 transition-all active:bg-white/10 ${
                      isSolActive
                        ? 'bg-primary-500/15 text-primary-300 border-primary-500/30 border'
                        : 'border border-transparent text-neutral-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="text-primary-400 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <SolIcon className="size-4" />
                    </div>
                    <span className="text-xs leading-tight font-medium sm:text-sm">
                      {sol.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="from-primary-500 to-secondary-500 shadow-primary-500/25 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r px-6 py-4 text-sm font-semibold text-white shadow-xl transition-transform active:scale-[0.98] sm:text-base"
            >
              <span>Parler de votre projet</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
