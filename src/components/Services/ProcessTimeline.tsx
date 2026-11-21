'use client';
import React from 'react';
import { motion } from 'motion/react';
import { pageInfosProcess } from '@/data/data';

const ProcessTimeline = () => {
  // Filter out the H1 title and just get the steps (and final summary)
  const steps = pageInfosProcess.filter((step) => step.title && step.text);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background glow */}
      <div className="bg-secondary-600/10 pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-label mb-4 inline-block">Méthodologie</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Notre processus de <span className="text-gradient">création</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="from-primary/50 via-secondary/30 absolute top-0 bottom-0 left-4 w-px -translate-x-1/2 bg-gradient-to-b to-transparent md:left-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex flex-col items-center gap-8 md:flex-row md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="bg-surface border-primary/40 absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border shadow-[0_0_15px_rgba(59,130,246,0.3)] md:left-1/2">
                    <div className="bg-primary h-3 w-3 rounded-full" />
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full pl-12 md:w-1/2 md:pl-0 ${isEven ? 'md:pl-12' : 'text-left md:pr-12 md:text-right'}`}
                  >
                    <div className="glass rounded-2xl border border-white/5 p-6 transition-colors hover:border-white/10">
                      <span className="text-primary-400 mb-2 block text-xs font-bold tracking-widest uppercase">
                        Étape {index + 1}
                      </span>
                      <h3 className="mb-3 text-xl font-bold text-white">
                        {step.title?.replace(/^Étape \d+ : /, '') || ''}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
