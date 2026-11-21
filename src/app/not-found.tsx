import React from 'react';
import Link from 'next/link';
import { Frown, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center p-8 text-center text-white">
      <div className="bg-primary-500/10 border-primary-500/20 text-primary-400 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <Frown className="h-10 w-10" />
      </div>
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Page introuvable (404)</h1>
      <p className="text-muted mb-8 max-w-md text-base">
        {"Désolé, la page que vous recherchez n'existe pas ou a été déplacée."}
      </p>

      <Link
        href="/"
        aria-label="Retour à la page d'accueil"
        className="btn-primary inline-flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Retour à l&apos;accueil</span>
      </Link>
    </main>
  );
};

export default NotFound;
