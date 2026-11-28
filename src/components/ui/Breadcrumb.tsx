'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import { SITE_URL, buildAbsoluteUrl } from '@/config/site';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  backHref?: string;
  backLabel?: string;
  backLink?: {
    href?: string;
    label?: string;
  };
  className?: string;
  showHomeIcon?: boolean;
}

export default function Breadcrumb({
  items,
  backLink,
  backHref: explicitBackHref,
  backLabel: explicitBackLabel,
  className = '',
  showHomeIcon = true,
}: BreadcrumbProps) {
  const router = useRouter();

  // Déduire un lien de retour intelligent si non précisé :
  // utilise le dernier élément avec un href dans la hiérarchie ou /
  const fallbackParent = items.length > 1 ? items[items.length - 2] : null;
  const backHref = explicitBackHref || backLink?.href || fallbackParent?.href || '/';
  const backLabel =
    explicitBackLabel ||
    backLink?.label ||
    (fallbackParent ? `Retour à ${fallbackParent.label}` : 'Retour');

  const handleBack = (e: React.MouseEvent) => {
    // Si l'utilisateur clique et qu'il y a un historique navigateur interne
    if (typeof window !== 'undefined' && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  };

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: `${SITE_URL}/`,
      },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: item.label,
        ...(item.href
          ? {
              item: buildAbsoluteUrl(item.href),
            }
          : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
      />

      <nav
        aria-label="Fil d'Ariane et navigation retour"
        className={`mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 text-xs text-neutral-400 sm:px-6 sm:text-sm lg:px-8 ${className}`}
      >
        {/* Fil d'Ariane Desktop & Tablette */}
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {/* Racine Accueil */}
          <li className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
              title="Retour à l'accueil"
            >
              {showHomeIcon && <Home className="text-primary-400 size-3.5" />}
              <span className="hidden sm:inline">Accueil</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5 sm:gap-2">
                <ChevronRight className="size-3.5 shrink-0 text-neutral-600" aria-hidden="true" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="line-clamp-1 max-w-[140px] rounded-md px-1.5 py-1 font-medium text-neutral-400 transition-colors hover:bg-white/5 hover:text-white sm:max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    className="text-primary-300/90 line-clamp-1 max-w-[180px] font-semibold text-neutral-200 sm:max-w-[280px] md:max-w-none"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {/* Bouton de retour tactile intelligent */}
        <div className="shrink-0">
          <Link
            href={backHref}
            onClick={handleBack}
            className="hover:border-primary-500/30 group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 shadow-sm transition-all hover:bg-white/10 hover:text-white active:scale-95"
            title={backLabel}
          >
            <ArrowLeft className="text-primary-400 size-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span className="xs:inline hidden">{backLabel}</span>
            <span className="xs:hidden">Retour</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
