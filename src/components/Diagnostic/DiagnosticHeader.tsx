'use client';

import React from 'react';
import { Sparkles, X } from 'lucide-react';

interface DiagnosticHeaderProps {
  currentStepNumber: number;
  totalStepsCount: number;
  currentPhaseKey:
    | 'profile'
    | 'organization'
    | 'businessTools'
    | 'data'
    | 'security'
    | 'results'
    | 'report';
  onCloseRequest: () => void;
  showCloseButton?: boolean;
}

export default function DiagnosticHeader({
  currentStepNumber,
  totalStepsCount,
  currentPhaseKey,
  onCloseRequest,
  showCloseButton = true,
}: DiagnosticHeaderProps) {
  const percent =
    totalStepsCount > 0
      ? Math.min(100, Math.round((currentStepNumber / totalStepsCount) * 100))
      : 0;

  const phases: Array<{ key: string; label: string }> = [
    { key: 'profile', label: 'Profil' },
    { key: 'organization', label: 'Organisation' },
    { key: 'businessTools', label: 'Outils' },
    { key: 'data', label: 'Données' },
    { key: 'security', label: 'Sécurité' },
    { key: 'results', label: 'Résultats' },
  ];

  return (
    <header className="relative z-20 flex shrink-0 flex-col gap-3 border-b border-white/10 bg-neutral-900/95 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3.5 backdrop-blur-md sm:px-8">
      <div className="flex items-center justify-between gap-4">
        {/* Brand & Module title */}
        <div className="flex items-center gap-2.5">
          <div className="bg-primary-500/10 border-primary-500/20 text-primary-400 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="flex items-center gap-1.5 text-xs font-black tracking-tight text-white uppercase">
              <span>DevEvoke</span>
              <span className="text-primary-400 font-normal">•</span>
              <span className="font-medium text-neutral-300 normal-case">
                Diagnostic médico-social
              </span>
            </span>
            <span className="text-[10px] text-neutral-400">
              {currentPhaseKey === 'results' || currentPhaseKey === 'report' ? (
                <span className="font-medium text-emerald-400">Restitution & Recommandations</span>
              ) : (
                <span>
                  Étape {currentStepNumber} sur {totalStepsCount}
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Phase navigation indicator (desktop only) */}
        <div className="hidden items-center gap-2 text-xs font-medium text-neutral-400 lg:flex">
          {phases.map((phase, idx) => {
            const isActive = currentPhaseKey === phase.key;
            return (
              <React.Fragment key={phase.key}>
                <span
                  className={`rounded-lg px-2 py-0.5 text-[11px] transition-colors ${
                    isActive
                      ? 'bg-primary-500/20 text-primary-300 border-primary-500/30 border font-semibold'
                      : 'text-neutral-400'
                  }`}
                >
                  {phase.label}
                </span>
                {idx < phases.length - 1 && <span className="text-[10px] text-neutral-400">→</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Close button */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onCloseRequest}
            aria-label="Fermer le diagnostic"
            className="focus:ring-primary-400 flex size-11 min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white focus:ring-2 focus:outline-none"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
        <div
          className="from-primary-500 via-primary-400 h-full rounded-full bg-gradient-to-r to-emerald-400 transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </header>
  );
}
