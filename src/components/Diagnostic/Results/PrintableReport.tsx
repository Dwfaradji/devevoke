'use client';

import React from 'react';
import { DIAGNOSTIC_DISCLAIMER, DIMENSION_METADATA } from '@/lib/diagnostic/constants';
import { DiagnosticReport } from '@/lib/diagnostic/types';

interface PrintableReportProps {
  report: DiagnosticReport;
}

export default function PrintableReport({ report }: PrintableReportProps) {
  const {
    organization,
    completedAt,
    globalScore,
    maturityLevel,
    dimensionScores,
    activeDimensions,
    strengths,
    risks,
    priorities,
    roadmap,
    customSynthesis,
  } = report;

  return (
    <div
      id="printable-diagnostic-report"
      className="mx-auto hidden max-w-[210mm] bg-white p-8 font-sans text-xs leading-relaxed text-black print:block"
    >
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 12mm 15mm 15mm 15mm;
          }
          html, body {
            background: #ffffff !important;
            background-color: #ffffff !important;
            color: #111827 !important;
            overflow: visible !important;
            height: auto !important;
          }
          header, footer, nav, main, aside, button, .no-print {
            display: none !important;
          }
          * {
            scrollbar-width: none !important;
          }
          *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          .page-break {
            page-break-after: always;
            break-after: page;
          }
          .avoid-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>

      {/* EN-TÊTE DU RAPPORT */}
      <div className="border-primary-600 mb-6 flex items-start justify-between border-b-2 pb-4">
        <div>
          <span className="text-primary-700 block text-[10px] font-bold tracking-wider uppercase">
            DevEvoke • Ingénierie & Solutions Numériques Médico-Sociales
          </span>
          <h1 className="mt-1 text-xl font-black text-gray-900">
            Rapport de Diagnostic de Maturité Numérique
          </h1>
          <p className="mt-0.5 text-[11px] text-gray-600">
            Structure : <strong>{organization.name || 'Établissement médico-social'}</strong> (
            {organization.structureType}) • {completedAt}
          </p>
        </div>
        <div className="text-right">
          <div className="text-primary-700 text-3xl font-black">{globalScore}/100</div>
          <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-800 uppercase">
            {maturityLevel.label}
          </span>
        </div>
      </div>

      {/* SYNTHÈSE EXÉCUTIVE */}
      <div className="avoid-break mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h2 className="mb-1.5 text-sm font-bold tracking-wide text-gray-900 uppercase">
          1. Synthèse Exécutive
        </h2>
        <p className="mb-2 text-xs leading-relaxed text-gray-700">{maturityLevel.description}</p>
        <p className="rounded border border-gray-200 bg-white p-2.5 text-xs text-gray-800 italic">
          « {customSynthesis} »
        </p>
      </div>

      {/* SCORES PAR DIMENSION */}
      <div className="avoid-break mb-6">
        <h2 className="mb-2 text-sm font-bold tracking-wide text-gray-900 uppercase">
          2. Profil de Maturité par Dimension
        </h2>
        <table className="w-full border-collapse border border-gray-200 text-xs">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 p-2 font-bold">Dimension</th>
              <th className="w-24 border border-gray-200 p-2 text-right font-bold">Score</th>
              <th className="border border-gray-200 p-2 font-bold">Constat & Analyse</th>
            </tr>
          </thead>
          <tbody>
            {activeDimensions.map((dim) => {
              const score = dimensionScores[dim] ?? 0;
              const meta = DIMENSION_METADATA[dim];
              return (
                <tr key={dim} className="border-b border-gray-200">
                  <td className="border border-gray-200 p-2 font-semibold text-gray-900">
                    {meta.label}
                  </td>
                  <td className="text-primary-700 border border-gray-200 p-2 text-right font-mono font-bold">
                    {score} / 100
                  </td>
                  <td className="border border-gray-200 p-2 text-[11px] text-gray-600">
                    {meta.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* POINTS FORTS */}
      {strengths.length > 0 && (
        <div className="avoid-break mb-6">
          <h2 className="mb-2 text-sm font-bold tracking-wide text-gray-900 uppercase">
            3. Vos Principaux Points Forts
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {strengths.map((item) => (
              <div key={item.id} className="rounded border border-gray-200 bg-gray-50 p-3">
                <h3 className="mb-1 text-xs font-bold text-gray-900">{item.title}</h3>
                <p className="text-[11px] leading-snug text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SAUT DE PAGE PROPRE */}
      <div className="page-break" />

      {/* POINTS DE VIGILANCE */}
      <div className="avoid-break mb-6">
        <h2 className="mb-2 text-sm font-bold tracking-wide text-gray-900 uppercase">
          4. Points de Vigilance & Risques Identifiés
        </h2>
        {risks.length === 0 ? (
          <p className="text-xs text-gray-600">Aucun risque critique identifié.</p>
        ) : (
          <div className="space-y-2.5">
            {risks.map((risk) => (
              <div
                key={risk.id}
                className="avoid-break rounded border border-gray-200 bg-white p-3"
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900">{risk.title}</span>
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-800 uppercase">
                    Niveau : {risk.level}
                  </span>
                </div>
                <p className="mb-1.5 text-[11px] text-gray-600">{risk.description}</p>
                <p className="text-primary-800 rounded bg-gray-50 p-1.5 text-[11px] font-semibold">
                  Recommandation : {risk.recommendation}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* VOS 3 PRIORITÉS */}
      <div className="avoid-break mb-6">
        <h2 className="mb-2 text-sm font-bold tracking-wide text-gray-900 uppercase">
          5. Top 3 Priorités d'Action
        </h2>
        <div className="space-y-3">
          {priorities.map((item, idx) => (
            <div
              key={item.id}
              className="avoid-break rounded border border-gray-200 bg-gray-50 p-3"
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">
                  {idx + 1}. {item.title}
                </span>
                <span className="font-mono text-[10px] text-gray-600">
                  Horizon :{' '}
                  {item.horizon === '30-days'
                    ? '30 jours'
                    : item.horizon === '3-months'
                      ? '3 mois'
                      : '6 mois'}
                </span>
              </div>
              <p className="mb-1 text-[11px] text-gray-700">{item.description}</p>
              <p className="text-[11px] font-semibold text-gray-900">Action : {item.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEUILLE DE ROUTE */}
      <div className="avoid-break mb-6">
        <h2 className="mb-2 text-sm font-bold tracking-wide text-gray-900 uppercase">
          6. Plan d'Action Sequencé
        </h2>
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="rounded border border-gray-200 bg-white p-3">
            <h3 className="mb-1 border-b pb-1 font-bold text-gray-900">0 – 30 jours</h3>
            <ul className="list-disc space-y-1 pl-4 text-[11px] text-gray-700">
              {roadmap.thirtyDays.map((r) => (
                <li key={r.id}>{r.title}</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-gray-200 bg-white p-3">
            <h3 className="mb-1 border-b pb-1 font-bold text-gray-900">1 – 3 mois</h3>
            <ul className="list-disc space-y-1 pl-4 text-[11px] text-gray-700">
              {roadmap.threeMonths.map((r) => (
                <li key={r.id}>{r.title}</li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-gray-200 bg-white p-3">
            <h3 className="mb-1 border-b pb-1 font-bold text-gray-900">3 – 6 mois</h3>
            <ul className="list-disc space-y-1 pl-4 text-[11px] text-gray-700">
              {roadmap.sixMonths.map((r) => (
                <li key={r.id}>{r.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* DISCLAIMER & CONTACT */}
      <div className="avoid-break mt-6 space-y-2 border-t border-gray-200 pt-4 text-[10px] text-gray-500">
        <p>
          <strong>Avertissement :</strong> {DIAGNOSTIC_DISCLAIMER}
        </p>
        <p>
          Document édité par <strong>DevEvoke</strong> • Agence digitale spécialisée secteur
          médico-social • Contact : contact@devevoke.com • www.devevoke.com
        </p>
      </div>
    </div>
  );
}
