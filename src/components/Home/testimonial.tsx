'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logo.webp';

const AnimatedWord = ({
  children,
  delay,
  highlight = false,
}: {
  children: React.ReactNode;
  delay: number;
  highlight?: boolean;
}) => (
  <span className="relative -mb-4 inline-block overflow-hidden px-1 pt-2 pb-4">
    <motion.span
      initial={{ y: '120%', opacity: 0, rotate: 5 }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      className={`inline-block ${highlight ? 'text-highlight font-extrabold' : 'text-white'}`}
    >
      {children}
    </motion.span>
  </span>
);

interface TestimonialProps {
  ctaHref?: string;
  ctaLabel?: string;
}

const Testimonial = ({
  ctaHref = '/contact',
  ctaLabel = 'Discuter de votre projet',
}: TestimonialProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={containerRef}
      id="section5"
      className="relative flex items-center justify-center overflow-hidden bg-[#030712] py-24 md:py-40"
    >
      {/* Liquid Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="bg-primary-600/10 absolute top-1/2 left-1/4 h-[50vw] max-h-[800px] w-[50vw] max-w-[800px] -translate-y-1/2 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="bg-secondary-600/10 absolute top-1/2 right-1/4 h-[40vw] max-h-[600px] w-[40vw] max-w-[600px] -translate-y-1/2 rounded-full blur-[100px]"
        />
        {/* Grille de fond subtile */}
        <div className="mask-image:linear-gradient(to_bottom,transparent,black,transparent) absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      </div>

      {/* Floating abstract geometric shapes tied to scroll */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 hidden h-32 w-32 rounded-full border border-white/5 backdrop-blur-3xl lg:block"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-20 bottom-40 hidden h-48 w-48 rotate-12 rounded-3xl border border-white/5 backdrop-blur-3xl lg:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Citation Monumentale */}
        <div className="mx-auto mb-16 flex max-w-5xl flex-wrap justify-center gap-x-2.5 text-center text-2xl leading-[1.25] font-bold tracking-tight sm:mb-20 sm:gap-x-4 sm:text-5xl lg:gap-x-5 lg:text-6xl">
          {[
            'Nous',
            'ne',
            'développons',
            'pas',
            'de',
            'simples',
            'logiciels.',
            'Nous',
            'forgeons',
            'des',
          ].map((word, i) => (
            <AnimatedWord key={i} delay={i * 0.03}>
              {word}
            </AnimatedWord>
          ))}
          <AnimatedWord delay={10 * 0.03} highlight>
            solutions
          </AnimatedWord>
          <AnimatedWord delay={11 * 0.03} highlight>
            numériques
          </AnimatedWord>
          {['qui', 'simplifient', 'le', 'quotidien', 'des', 'équipes', 'et', 'des', 'usagers.'].map(
            (word, i) => (
              <AnimatedWord key={`end-${i}`} delay={(12 + i) * 0.03}>
                {word}
              </AnimatedWord>
            )
          )}
        </div>

        {/* Espace Auteur & Logo Ultra Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative cursor-pointer"
        >
          {/* Lueur au survol */}
          <div className="bg-primary-500/20 absolute inset-0 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

          <div className="relative flex items-center gap-6 rounded-full border border-white/10 bg-black/40 p-2 pr-8 shadow-2xl backdrop-blur-2xl transition-transform duration-500 hover:scale-105">
            {/* Logo encerclé */}
            <div className="border-primary-500/20 shadow-primary-500/10 relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-neutral-900/90 p-2.5 shadow-lg md:size-20">
              <Image
                src={logo}
                alt="Logo DevEvoke"
                width={80}
                height={80}
                className="relative z-10 size-full object-contain"
              />
            </div>

            {/* Informations */}
            <div className="flex flex-col py-2 text-left">
              <span className="mb-0.5 text-xl font-bold tracking-tight text-white">
                Boucif Faradji
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-primary-500 relative inline-flex h-2 w-2 rounded-full"></span>
                </span>
                <span className="text-primary-400 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  Fondateur & Lead Architecte Numérique Médico-Social
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action (A propos) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <Link
            href={ctaHref}
            className="group flex items-center gap-4 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
          >
            <span className="group-hover:bg-primary-500 h-[1px] w-12 bg-gray-600 transition-colors" />
            <span className="font-medium tracking-[0.15em] uppercase">{ctaLabel}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
