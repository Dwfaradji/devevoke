'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Fade } from '@/components/ui/Fade';
import Link from 'next/link';
import { dataPriceOptions } from '@/data/data';

const PricingHeader = () => {
  return (
    <>
      {/* Hero Tarifs */}
      <header className="mx-auto mt-8 mb-20 px-4 text-center">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-4 inline-block">Tarifs</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Une tarification <span className="text-highlight">transparente</span>
          </h1>
          <p className="text-muted mx-auto max-w-3xl text-lg leading-relaxed">
            Obtenez le plan DevEvoke qui correspond parfaitement à vos besoins. Paiement flexible :
            30% à la commande, solde à la livraison du projet.
          </p>
        </Fade>
      </header>

      {/* Grille de services additionnels (Maintenance / Hébergement) */}
      <section className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {dataPriceOptions.map((option, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass hover:glass-strong group flex flex-col justify-between rounded-3xl border border-white/5 p-8 transition-all duration-300 hover:border-white/10"
            >
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">{option.title}</h2>
                <div className="mt-3 mb-4 flex flex-col gap-1">
                  {option.price.startsWith('À partir de') ? (
                    <>
                      <span className="text-muted text-sm font-medium tracking-wider uppercase">
                        À partir de
                      </span>
                      <span className="text-gradient text-4xl font-bold">
                        {option.price.replace('À partir de ', '')}
                      </span>
                    </>
                  ) : (
                    <span className="text-gradient text-4xl font-bold">{option.price}</span>
                  )}
                </div>
                <p className="text-muted-light mb-6 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {option.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg
                      className="text-primary-400 mt-0.5 size-5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-outline w-full justify-center">
                Nous contacter
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default PricingHeader;
