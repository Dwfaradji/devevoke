'use client';

import React from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

interface DiagnosticFooterProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
  estimatedTimeLeft?: string;
  nextButtonLabel?: string;
  prevButtonLabel?: string;
}

export default function DiagnosticFooter({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  isLastQuestion,
  estimatedTimeLeft,
  nextButtonLabel,
  prevButtonLabel = 'Retour',
}: DiagnosticFooterProps) {
  return (
    <footer className="relative z-20 flex shrink-0 items-center justify-between gap-4 border-t border-white/10 bg-neutral-900/95 px-5 py-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:px-8">
      {/* Bouton Retour */}
      {canGoPrev ? (
        <button
          type="button"
          onClick={onPrev}
          className="focus:ring-primary-400 inline-flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-neutral-400 transition-colors hover:text-white focus:ring-2 focus:outline-none sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{prevButtonLabel}</span>
        </button>
      ) : (
        <div className="w-16" />
      )}

      {/* Temps restant indicatif */}
      {estimatedTimeLeft && (
        <div className="hidden items-center gap-1.5 text-xs text-neutral-400 sm:flex">
          <Clock className="text-primary-400 h-3.5 w-3.5 shrink-0" />
          <span>{estimatedTimeLeft}</span>
        </div>
      )}

      {/* Bouton Continuer / Terminer */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        className="btn-primary shadow-primary-500/20 flex cursor-pointer items-center gap-2 px-5 py-2.5 text-xs font-bold shadow-md disabled:cursor-not-allowed disabled:opacity-30 sm:text-sm"
      >
        <span>
          {nextButtonLabel ? nextButtonLabel : isLastQuestion ? 'Voir mon diagnostic' : 'Continuer'}
        </span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </footer>
  );
}
