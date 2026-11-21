'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Modal from '@/components/ui/Modal/modal';
import { prices } from '@/data/data';

const PricingMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentModal, setContentModal] = useState('');

  const handleOpenModal = (id: string) => {
    setIsOpen(true);
    setContentModal(id);
  };

  return (
    <section className="relative py-8">
      {/* Background glow for pricing section */}
      <div className="bg-primary-600/10 pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      <div className="relative z-10 space-y-6">
        {prices.map((tarif, i) => {
          const isFeatured = tarif.id === '3'; // CRM sur mesure

          return (
            <motion.article
              key={tarif.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${
                isFeatured
                  ? 'from-surface-2 to-surface border-primary-400/30 z-10 border bg-gradient-to-br shadow-[0_0_40px_rgba(59,130,246,0.15)] lg:scale-[1.02]'
                  : 'glass hover:glass-strong border border-white/5 hover:border-white/10'
              }`}
            >
              {/* Highlight effect for featured */}
              {isFeatured && (
                <div className="from-primary-400 to-secondary-400 absolute inset-x-0 top-0 h-1 bg-gradient-to-r" />
              )}

              {/* Subtle hover gradient */}
              <div className="from-primary-400/0 via-primary-400/5 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex h-full flex-col lg:flex-row">
                {/* Infos */}
                <div className="flex-1 p-8 sm:p-10 lg:pr-12">
                  <div className="mb-4 flex flex-wrap items-center gap-4">
                    <h3 className="text-3xl font-bold tracking-tight text-white">{tarif.title}</h3>
                    {isFeatured && (
                      <span className="badge bg-primary-600/20 text-primary-400 border-primary-400/30 py-1 text-xs font-bold tracking-wider uppercase">
                        Populaire
                      </span>
                    )}
                  </div>

                  <h4 className="text-secondary-400 mb-4 text-xl font-medium">{tarif.subtitle}</h4>

                  <p className="text-muted mb-8 max-w-2xl text-base leading-relaxed">
                    {tarif.description}
                  </p>

                  {/* Partial list of details (preview) */}
                  <ul className="mb-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {tarif.details.slice(0, 4).map((detail, idx) => (
                      <li key={idx} className="text-muted-light flex items-start gap-3 text-sm">
                        <svg
                          className="text-primary-400 mt-0.5 h-5 w-5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-snug" title={detail}>
                          {detail}
                        </span>
                      </li>
                    ))}
                    {tarif.details.length > 4 && (
                      <li className="text-muted-light flex items-start gap-3 text-sm italic">
                        <span className="pl-8">+ {tarif.details.length - 4} autres avantages</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Prix + CTA */}
                <div className="flex flex-col items-center justify-center gap-5 border-t border-white/5 bg-black/20 px-5 py-6 backdrop-blur-sm sm:gap-6 sm:px-8 sm:py-10 lg:min-w-[320px] lg:border-t-0 lg:border-l">
                  <div className="text-center">
                    <p className="text-muted mb-1 text-xs font-medium tracking-wider uppercase sm:mb-2 sm:text-sm">
                      À partir de
                    </p>
                    <p className="text-3xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl">
                      {tarif.price}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenModal(tarif.id)}
                    className={
                      isFeatured
                        ? 'btn-primary min-h-[48px] w-full py-3.5 text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] sm:py-4 sm:text-base'
                        : 'btn-outline min-h-[48px] w-full py-3.5 text-sm sm:py-4 sm:text-base'
                    }
                    aria-label={`En savoir plus sur la ${tarif.title}`}
                  >
                    Découvrir l&apos;offre
                  </button>
                  <p className="text-muted-light mt-2 text-center text-xs">
                    Paiement flexible : 30% à la commande
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {isOpen && (
        <Modal
          showModal={isOpen}
          setIsOpen={setIsOpen}
          contentModal={contentModal}
          prices={prices}
        />
      )}
    </section>
  );
};

export default PricingMain;
