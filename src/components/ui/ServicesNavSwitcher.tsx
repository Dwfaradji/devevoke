'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  Workflow,
  ShieldCheck,
  LayoutGrid,
  Layers,
} from 'lucide-react';

const services = [
  { href: '/services', label: 'Vue d’ensemble', icon: Layers },
  { href: '/developpement-web', label: 'Dév Web & Next.js', icon: Globe },
  { href: '/application-mobile', label: 'Apps Mobiles', icon: Smartphone },
  { href: '/developpement-saas', label: 'Plateformes SaaS', icon: Cloud },
  { href: '/solutions-metier', label: 'Logiciels Métier', icon: Cpu },
  { href: '/automatisation', label: 'Automatisation', icon: Workflow },
  { href: '/securite-et-conformite', label: 'Sécurité & RGPD', icon: ShieldCheck },
  { href: '/templates', label: 'Socles & Templates', icon: LayoutGrid },
];

export default function ServicesNavSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={`mx-auto my-4 w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="flex scrollbar-none items-center gap-1.5 overflow-x-auto border-b border-white/5 py-1 pb-2 sm:gap-2">
        <span className="mr-2 hidden shrink-0 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase md:inline">
          Pôles :
        </span>
        {services.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 sm:px-3.5 sm:py-2 ${
                isActive
                  ? 'from-primary-500/20 to-secondary-500/20 border-primary-500/40 shadow-primary-500/10 border bg-gradient-to-r text-white shadow-sm'
                  : 'border border-transparent text-neutral-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon className={`size-3.5 ${isActive ? 'text-primary-400' : 'text-neutral-500'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
