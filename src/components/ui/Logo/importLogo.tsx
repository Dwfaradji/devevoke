import React from 'react';
import LogoSVG from './LogoSvg';

interface ILogoProps {
  displayColor?: 'colorP' | 'colorS';
  className?: string;
  showText?: boolean;
  animated?: boolean;
}

const ImportLogo = ({ className, showText = true, animated = true }: ILogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className || ''}`}>
      <div className="relative flex size-9 shrink-0 items-center justify-center sm:size-10">
        {/* Glow ambient aura au survol */}
        <div className="bg-primary-500/15 pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
        <LogoSVG className="relative z-10 size-full" animated={animated} />
      </div>
      {showText && (
        <span className="flex items-center text-xl font-black tracking-tight text-white select-none sm:text-2xl">
          Dev<span className="text-primary-400">Evoke</span>
        </span>
      )}
    </div>
  );
};

export default ImportLogo;
