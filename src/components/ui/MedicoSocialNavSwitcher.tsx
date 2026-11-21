'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Building2,
  GraduationCap,
  Navigation,
  Briefcase,
  HeartPulse,
  Users,
  Car,
  FileSearch,
  Layers,
  Code2,
  Sparkles,
} from 'lucide-react';

const medicoSocialItems = [
  { href: '/medico-social', label: 'Pôle Médico-Social', icon: Building2 },
  { href: '/agence-digitale-medico-social', label: 'Agence Médico-Sociale', icon: Sparkles },
  { href: '/solutions-medico-social', label: 'Toutes les solutions', icon: Layers },
  { href: '/developpement-logiciel-medico-social', label: 'Logiciels Sur-Mesure', icon: Code2 },
  { href: '/solutions-medico-social/associations', label: 'Associations', icon: Users },
  { href: '/solutions-medico-social/ime', label: 'IME', icon: GraduationCap },
  { href: '/solutions-medico-social/sessad', label: 'SESSAD', icon: Navigation },
  { href: '/solutions-medico-social/esat', label: 'ESAT', icon: Briefcase },
  { href: '/solutions-medico-social/ehpad', label: 'EHPAD', icon: HeartPulse },
  { href: '/logiciel-gestion-vehicules-medico-social', label: 'Parc Auto ESMS', icon: Car },
  { href: '/diagnostic-numerique', label: 'Audit Gratuit', icon: FileSearch },
];

export default function MedicoSocialNavSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={`mx-auto my-4 w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="flex scrollbar-none items-center gap-1.5 overflow-x-auto border-b border-white/5 py-1 pb-2 sm:gap-2">
        <span className="text-secondary-400 mr-2 hidden shrink-0 text-[11px] font-semibold tracking-wider uppercase md:inline">
          Secteurs :
        </span>
        {medicoSocialItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 sm:px-3.5 sm:py-2 ${
                isActive
                  ? 'from-secondary-500/25 to-primary-500/20 border-secondary-500/40 shadow-secondary-500/10 border bg-gradient-to-r text-white shadow-sm'
                  : 'border border-transparent text-neutral-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon
                className={`size-3.5 ${isActive ? 'text-secondary-400' : 'text-neutral-500'}`}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
