'use client';

import React from 'react';
import { DiagnosticReport } from '@/lib/diagnostic/types';
import { Award, Clock, Lock, Play, RotateCcw, Sparkles } from 'lucide-react';

interface DiagnosticTriggerProps {
  onOpen: () => void;
  onReset: () => void;
  hasStarted: boolean;
  hasCompleted: boolean;
  report?: DiagnosticReport;
}

export default function DiagnosticTrigger({
  onOpen,
  onReset,
  hasStarted,
  hasCompleted,
  report,
}: DiagnosticTriggerProps) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="glass border-primary-500/30 relative overflow-hidden rounded-3xl border p-8 text-center shadow-2xl sm:p-12 sm:text-left">
        {/* Glows */}
        <div className="bg-primary-500/10 pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full blur-[130px]" />
        <div className="bg-secondary-500/10 pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full blur-[120px]" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            <div className="bg-primary-500/10 border-primary-500/20 text-primary-400 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Outil d'évaluation interactif • Médico-Social</span>
            </div>

            <h2 className="text-2xl leading-tight font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              {hasCompleted
                ? 'Votre diagnostic est prêt'
                : hasStarted
                  ? 'Reprenez votre diagnostic en cours'
                  : 'Évaluez votre maturité numérique'}
            </h2>

            <p className="max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
              {hasCompleted && report
                ? `Votre score de maturité calculé est de ${report.globalScore}/100 (${report.maturityLevel.label}). Consultez votre synthèse, vos priorités et votre feuille de route personnalisée.`
                : 'Identifiez en quelques minutes vos forces, vos points de vigilance et vos priorités d’action grâce à notre questionnaire guidé étape par étape.'}
            </p>

            {/* Badges de réassurance */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-300">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="text-primary-400 h-4 w-4" />≈ 4 minutes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="h-4 w-4 text-emerald-400" />
                Score & Radar immédiats
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Lock className="text-secondary-400 h-4 w-4" />
                Aucune donnée usager
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:items-start lg:col-span-4 lg:items-end">
            <button
              type="button"
              onClick={onOpen}
              className="btn-primary shadow-primary-500/25 flex w-full cursor-pointer items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>
                {hasCompleted
                  ? 'Consulter mes résultats'
                  : hasStarted
                    ? 'Continuer mon diagnostic'
                    : 'Faire mon diagnostic gratuit'}
              </span>
            </button>

            {hasStarted && (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex cursor-pointer items-center gap-1.5 py-1 text-xs text-neutral-400 transition-colors hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Recommencer à zéro</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
