'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface OptionCardProps {
  id: string;
  label: string;
  detail?: string;
  badge?: string;
  isSelected: boolean;
  onSelect: () => void;
  indexKey?: string | number;
}

export default function OptionCard({
  label,
  detail,
  badge,
  isSelected,
  onSelect,
  indexKey,
}: OptionCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onSelect}
      className={`group focus:ring-primary-400 flex w-full cursor-pointer items-start gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 select-none focus:ring-2 focus:outline-none sm:gap-4 sm:p-5 ${
        isSelected
          ? 'bg-primary-500/15 border-primary-500 shadow-primary-500/15 scale-[1.01] text-white shadow-lg'
          : 'border-white/10 bg-neutral-900/60 text-neutral-300 hover:scale-[1.005] hover:border-white/20 hover:bg-neutral-800/80'
      }`}
    >
      {/* Indicator icon / badge */}
      <div
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border text-xs font-bold transition-colors duration-150 ${
          isSelected
            ? 'border-primary-400 bg-primary-500 text-white shadow-sm'
            : 'group-hover:border-primary-400/60 border-white/20 bg-black/40 text-neutral-400 group-hover:text-white'
        }`}
      >
        {isSelected ? (
          <CheckCircle2 className="h-4 w-4 text-white" />
        ) : (
          <span>{indexKey ?? '○'}</span>
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p
            className={`text-sm leading-snug font-semibold sm:text-base ${
              isSelected ? 'font-bold text-white' : 'group-hover:text-primary-300 text-neutral-200'
            } transition-colors`}
          >
            {label}
          </p>
          {badge && (
            <span
              className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] ${
                isSelected
                  ? 'bg-primary-500/20 text-primary-200 border-primary-500/30'
                  : 'border-white/10 bg-white/5 text-neutral-400'
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        {detail && <p className="mt-1 text-xs leading-relaxed text-neutral-400">{detail}</p>}
      </div>
    </button>
  );
}
