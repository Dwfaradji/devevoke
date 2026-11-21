'use client';
import React from 'react';
import { motion } from 'motion/react';

const TrustBar = () => {
  const certifications = [
    {
      name: 'Conformité Européenne',
      short: 'RGPD',
      color: 'from-emerald-300 to-teal-200',
    },
    {
      name: 'Hébergement Français',
      short: 'SOUVERAIN',
      color: 'from-sky-300 to-cyan-200',
    },
    {
      name: 'Accessibilité Numérique',
      short: 'RGAA',
      color: 'from-violet-300 to-pink-200',
    },
    {
      name: 'Sécurité Applicative',
      short: 'CHIFFREMENT',
      color: 'from-amber-300 to-yellow-200',
    },
  ];

  return (
    <section className="border-y border-white/5 bg-black/50 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium tracking-widest text-gray-400 uppercase">
          Infrastructures et logiciels conformes aux plus hautes exigences
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-10">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-strong group flex flex-col items-center justify-center rounded-2xl border border-white/5 p-4 transition-all duration-300 hover:border-white/20"
            >
              <div
                className={`bg-gradient-to-r bg-clip-text text-2xl font-black text-transparent md:text-3xl ${cert.color} mb-2`}
              >
                {cert.short}
              </div>
              <div className="text-center text-xs font-medium text-gray-300 transition-colors group-hover:text-white">
                {cert.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
