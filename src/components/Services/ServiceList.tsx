'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { services } from '@/data/data';

const ServiceList = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-16">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Illustration / Graphic */}
              <div className="glass group relative h-64 w-full overflow-hidden rounded-3xl border border-white/5 sm:h-80 lg:w-5/12">
                <div className="from-primary-400/20 absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Abstract graphic representing the service */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="from-primary to-secondary h-32 w-32 rounded-full bg-gradient-to-tr opacity-40 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-70" />
                  <span className="absolute text-8xl font-black text-white/5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex w-full flex-col justify-center lg:w-7/12">
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{service.title}</h2>
                <p className="text-muted mb-8 text-lg leading-relaxed">{service.description}</p>

                {/* Sub-items / Tech */}
                <ul className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <div className="mt-1 flex-shrink-0">
                        <svg
                          className="text-primary-400 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{item.title}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct link to dedicated solution */}
                {(() => {
                  const linksMap: Record<number, { href: string; label: string }> = {
                    0: {
                      href: '/developpement-web',
                      label: 'Découvrir le développement web sur-mesure →',
                    },
                    1: {
                      href: '/application-mobile',
                      label: 'Découvrir nos applications mobiles →',
                    },
                    2: {
                      href: '/developpement-saas',
                      label: 'Découvrir la conception & développement SaaS →',
                    },
                    3: {
                      href: '/solutions-metier',
                      label: 'Découvrir nos logiciels métier sur-mesure →',
                    },
                    4: {
                      href: '/automatisation',
                      label: 'Découvrir l’automatisation des processus & API →',
                    },
                    5: {
                      href: '/securite-et-conformite',
                      label: 'Consulter nos garanties sécurité & hébergement France →',
                    },
                  };
                  const target = linksMap[service.id];
                  return target ? (
                    <div>
                      <Link
                        href={target.href}
                        className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors sm:text-sm"
                      >
                        {target.label}
                      </Link>
                    </div>
                  ) : null;
                })()}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceList;
