'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUp, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingQuickNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.round((scrollY / docHeight) * 100)) : 0;

      setScrollProgress(progress);
      // Afficher dès qu'on a fait défiler de plus de 250px
      setIsVisible(scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  const isHome = pathname === '/';
  const isContact = pathname === '/contact';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Navigation rapide"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed right-[max(1rem,calc(env(safe-area-inset-right)+0.75rem))] bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] z-40 flex items-center gap-1.5 rounded-full border border-white/10 bg-neutral-900/90 p-1.5 shadow-2xl shadow-black/60 backdrop-blur-2xl sm:right-6 sm:bottom-6"
        >
          {/* Bouton Retour rapide (si pas sur la page d'accueil) */}
          {!isHome && (
            <button
              type="button"
              onClick={handleBack}
              aria-label="Retourner à la page précédente"
              title="Retour à la page précédente"
              className="hover:border-primary-500/30 flex cursor-pointer items-center gap-1.5 rounded-full border border-white/5 bg-white/5 px-3 py-2 text-xs font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white active:scale-95"
            >
              <ArrowLeft className="text-primary-400 size-3.5" />
              <span className="hidden sm:inline">Retour</span>
            </button>
          )}

          {/* Bouton Remonter en haut de page avec progression */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Remonter en haut de la page"
            title={`Haut de page (${scrollProgress}%)`}
            className="hover:border-primary-500/30 group relative flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/5 bg-white/5 text-neutral-300 transition-all hover:bg-white/10 hover:text-white active:scale-95"
          >
            {/* SVG Ring de progression */}
            <svg
              className="pointer-events-none absolute inset-0 size-full -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                className="text-white/5"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-primary-400 transition-all duration-150"
                strokeDasharray={`${scrollProgress}, 100`}
                strokeWidth="2.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <ArrowUp className="group-hover:text-primary-400 size-3.5 text-neutral-300 transition-colors" />
          </button>

          {/* CTA rapide Contact (si pas déjà sur contact) */}
          {!isContact && (
            <Link
              href="/contact"
              aria-label="Discuter de votre projet avec l'agence"
              title="Discuter de votre projet"
              className="from-primary-500 to-secondary-500 shadow-primary-500/20 flex items-center gap-1.5 rounded-full bg-gradient-to-r px-3.5 py-2 text-xs font-semibold text-white shadow-md transition-all hover:opacity-95 active:scale-95"
            >
              <MessageSquare className="size-3.5" />
              <span className="hidden md:inline">Parler de votre projet</span>
              <span className="md:hidden">Contact</span>
            </Link>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
