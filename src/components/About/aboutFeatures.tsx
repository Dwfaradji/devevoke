'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

export const AboutMethodology = () => {
  return (
    <section className="mx-auto mb-10 max-w-7xl overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-1/2"
        >
          <div className="bg-primary/20 absolute inset-0 z-0 rounded-full blur-[100px]" />
          <div className="glass relative z-10 overflow-hidden rounded-3xl border border-white/10 p-2 shadow-2xl">
            <Image
              src="/images/about/about_field_immersion.webp"
              alt="Immersion et co-conception de solutions logicielles dans un établissement médico-social"
              width={800}
              height={600}
              className="h-[380px] w-full rounded-2xl object-cover object-center brightness-[0.95] contrast-[1.05] sm:h-[450px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
            <span className="bg-primary-400 h-2 w-2 animate-pulse rounded-full" />
            <span className="text-sm font-medium tracking-wide text-white uppercase">
              Immersion & Écoute
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Une méthodologie de conception{' '}
            <span className="text-highlight">centrée sur le terrain</span>
          </h2>
          <p className="text-muted mb-6 text-lg leading-relaxed">
            Dans les entreprises comme dans le médico-social, nous savons qu&apos;un outil conçu
            uniquement depuis un bureau lointain est voué au rejet. DevEvoke va directement à la
            rencontre des équipes pour comprendre les véritables frictions opérationnelles (tournées
            nomades, zones blanches réseau, plannings éclatés).
          </p>
          <ul className="space-y-4">
            {[
              'Immersion terrain et cartographie des processus associatifs',
              'Ateliers de co-conception avec les professionnels d’établissement',
              "Prototypage rapide et tests d'utilisabilité (normes RGAA)",
              'Développement itératif avec validation étape par étape',
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <svg
                  className="text-primary-500 mr-3 h-6 w-6 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export const AboutSecurity = () => {
  return (
    <section className="mx-auto mb-20 max-w-7xl overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-16 lg:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-1/2"
        >
          <div className="bg-secondary/20 absolute inset-0 z-0 rounded-full blur-[100px]" />
          <div className="glass relative z-10 overflow-hidden rounded-3xl border border-white/10 p-2 shadow-2xl">
            <Image
              src="/images/about/about_sovereign_security.webp"
              alt="Infrastructure cloud souveraine en France et sécurité des données associatives"
              width={800}
              height={600}
              className="h-[380px] w-full rounded-2xl object-cover object-center brightness-[0.95] sm:h-[450px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
            <span className="bg-secondary-400 h-2 w-2 animate-pulse rounded-full" />
            <span className="text-sm font-medium tracking-wide text-white uppercase">
              Souveraineté & RGPD
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            La priorité accordée à la <span className="text-highlight">Sécurité des Données</span>
          </h2>
          <p className="text-muted mb-6 text-lg leading-relaxed">
            Les données associatives et le suivi des usagers exigent une rigueur sans faille. Chez
            DevEvoke, nous concevons des applications web et mobiles robustes : cloisonnement des
            accès par rôles (RBAC), chiffrement des flux (HTTPS / TLS 1.3), protection contre les
            failles courantes (XSS, injections) et hébergement souverain en France.
          </p>
          <ul className="space-y-4">
            {[
              'Hébergement sécurisé sur serveurs souverains en France',
              "Contrôle d'accès strict par rôles (RBAC) et traçabilité",
              'Sauvegardes chiffrées automatisées et régulières',
              'Conformité rigoureuse aux préconisations de la CNIL et au RGPD',
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <svg
                  className="text-secondary-500 mr-3 h-6 w-6 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
