'use client';
import Link from 'next/link';
import React from 'react';
import { Fade } from '@/components/ui/Fade';
import Breadcrumb from '@/components/ui/Breadcrumb';
import LegalNavSwitcher from '@/components/PagesInfo/LegalNavSwitcher';

interface Text {
  titleH1?: string;
  title?: string;
  text?: string;
  titleFooter?: string;
  textFooter?: string;
}

interface PagesInfoProps {
  infosText: Text[];
}

const PagesInfo = ({ infosText }: PagesInfoProps) => {
  const mainTitle = infosText[0]?.titleH1 ?? 'Mentions légales';

  return (
    <div className="overflow-hidden pb-24">
      {/* Fil d'Ariane & Bouton Retour */}
      <Breadcrumb
        items={[{ label: 'Informations', href: '/a-propos' }, { label: mainTitle }]}
        backLink={{ href: '/', label: 'Retour au site' }}
      />

      {/* Navigation entre documents légaux et tarifs */}
      <LegalNavSwitcher />

      {/* Hero Header */}
      <header className="mx-auto mt-4 mb-16 px-4 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Informations</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {mainTitle.split(' ').map((word, idx, arr) =>
              idx === arr.length - 1 ? (
                <span key={idx} className="text-gradient drop-shadow-sm">
                  {word}
                </span>
              ) : (
                word + ' '
              )
            )}
          </h1>
          <p className="text-muted mx-auto max-w-2xl text-lg leading-relaxed">
            Dernière mise à jour :{' '}
            {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </Fade>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Fade direction="up" triggerOnce delay={200}>
          <article className="glass rounded-3xl border border-white/5 p-8 shadow-2xl sm:p-12 lg:p-16">
            <div className="prose prose-invert prose-lg prose-headings:text-white prose-a:text-primary-400 max-w-none">
              {infosText.map((item, i) => (
                <div key={i.toString()}>
                  {item.title && (
                    <h2 className="border-primary-500 mt-12 mb-6 border-l-4 pl-4 text-2xl font-bold text-white first:mt-0 sm:text-3xl">
                      {item.title}
                    </h2>
                  )}
                  {item.text && (
                    <div
                      className="text-muted leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-white/10 pt-10 text-center">
              <h3 className="mb-6 text-xl font-semibold text-white">Besoin d'en savoir plus ?</h3>
              <Link
                href="/contact"
                className="glass hover:glass-strong group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-4 font-medium text-white transition-all hover:border-white/20"
              >
                Contactez-Nous
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        </Fade>
      </div>
    </div>
  );
};

export default PagesInfo;
