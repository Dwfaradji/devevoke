'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

import react from '@/images/about/react-1920.webp';
import nextJs from '@/images/about/nextjs-1920.webp';
import tailwind from '@/images/about/tailwind.webp';
import nodejs from '@/images/about/nodejs.webp';
import postGrey from '@/images/about/postgresql-1920.webp';
import symfony from '@/images/about/symphony.webp';

const AboutGrid = () => {
  const techs = [
    {
      name: 'React',
      desc: 'Interfaces réactives, modernes et fluides pour la coordination d’équipes et la gestion de plannings.',
      img: react,
    },
    {
      name: 'Next.js',
      desc: 'Performance maximale, éco-conception et temps de chargement instantanés sur smartphone et ordinateur.',
      img: nextJs,
    },
    {
      name: 'Tailwind CSS',
      desc: 'Design systems accessibles et contrastés conformes aux normes RGAA pour une lisibilité irréprochable.',
      img: tailwind,
    },
    {
      name: 'Node.js',
      desc: 'Architectures d’API sécurisées pour synchroniser vos logiciels administratifs sans doubles saisies.',
      img: nodejs,
    },
    {
      name: 'PostgreSQL',
      desc: 'Bases de données relationnelles robustes et chiffrées pour centraliser vos processus d’établissement.',
      img: postGrey,
    },
    {
      name: 'TypeScript',
      desc: 'Rigueur de typage garantissant la stabilité, la sécurité et la pérennité de votre outil dans le temps.',
      img: symfony,
    },
  ];

  return (
    <section className="mx-auto mb-20 max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          Notre Socle Technologique <span className="text-highlight">Moderne</span>
        </h2>
        <p className="text-muted mx-auto max-w-2xl text-lg">
          Nous utilisons les frameworks les plus robustes et maintenables du marché (Next.js,
          TypeScript, React, Tailwind) pour concevoir des solutions performantes, pérennes et
          conformes au RGPD.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass hover:glass-strong group flex flex-col items-center justify-center rounded-3xl border border-white/5 p-8 text-center transition-all duration-300 hover:border-white/10"
          >
            <div className="relative mb-6 h-16 w-16 shrink-0 opacity-70 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0">
              <Image src={tech.img} alt={tech.name} fill className="object-contain" />
            </div>
            <h3 className="group-hover:text-primary-400 mb-2 text-lg font-bold text-white transition-colors duration-300">
              {tech.name}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{tech.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutGrid;
