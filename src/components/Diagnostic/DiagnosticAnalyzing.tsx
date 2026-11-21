'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface DiagnosticAnalyzingProps {
  onFinish: () => void;
}

export default function DiagnosticAnalyzing({ onFinish }: DiagnosticAnalyzingProps) {
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    'Évaluation des 6 dimensions de maturité...',
    'Détection des points de vigilance & risques...',
    'Génération de votre plan d’action personnalisé...',
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setStepIndex(1), 350);
    const timer2 = setTimeout(() => setStepIndex(2), 700);
    const finishTimer = setTimeout(() => onFinish(), 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="animate-in fade-in mx-auto my-auto flex max-w-xl flex-col items-center justify-center space-y-8 p-6 text-center duration-300 sm:p-12">
      {/* Pulsing circle graphic */}
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="bg-primary-500/20 absolute inset-0 animate-ping rounded-full opacity-40" />
        <div className="from-primary-600 shadow-primary-500/30 h-20 w-20 rounded-2xl bg-gradient-to-tr to-cyan-400 p-0.5 shadow-2xl">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-neutral-950">
            <Loader2 className="text-primary-400 h-8 w-8 animate-spin" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-primary-500/10 border-primary-500/20 text-primary-400 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Calcul en cours</span>
        </div>
        <h3 className="text-2xl font-black text-white sm:text-3xl">Analyse de vos réponses...</h3>
        <p className="mx-auto max-w-md text-xs leading-relaxed text-neutral-300 sm:text-sm">
          Nous calculons votre niveau de maturité, identifions vos points de vigilance et
          formalisons vos priorités d'action.
        </p>
      </div>

      {/* Checklist items */}
      <div className="w-full max-w-sm space-y-2.5 rounded-2xl border border-white/5 bg-neutral-900/60 p-4 text-left text-xs">
        {steps.map((text, idx) => {
          const isDone = idx < stepIndex;
          const isCurrent = idx === stepIndex;

          return (
            <div
              key={idx}
              className={`flex items-center gap-2.5 transition-colors duration-200 ${
                isDone
                  ? 'text-emerald-300'
                  : isCurrent
                    ? 'font-semibold text-white'
                    : 'text-neutral-400'
              }`}
            >
              {isDone ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              ) : isCurrent ? (
                <div className="border-primary-400 h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-t-transparent" />
              ) : (
                <div className="h-4 w-4 shrink-0 rounded-full border border-neutral-700" />
              )}
              <span>{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
