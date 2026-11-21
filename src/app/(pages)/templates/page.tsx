'use client';
import React, { useState } from 'react';

import { articles } from '@/data/dataWebTemplate';
import Template from '@/components/Template/template';
import { Fade } from '@/components/ui/Fade';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ServicesNavSwitcher from '@/components/ui/ServicesNavSwitcher';

const Page = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  // Extraire toutes les catégories uniques
  const categories = ['Tous', ...Array.from(new Set(articles.map((a) => a.type)))];

  // Filtrer les articles
  const filteredArticles =
    activeCategory === 'Tous' ? articles : articles.filter((a) => a.type === activeCategory);

  return (
    <div className="min-h-screen pb-24">
      {/* Fil d'Ariane & Navigation Switcher */}
      <Breadcrumb
        items={[{ label: 'Nos Expertises', href: '/services' }, { label: 'Socles & Templates' }]}
        backLink={{ href: '/services', label: 'Retour aux services' }}
      />
      <ServicesNavSwitcher />

      <header className="relative z-10 mx-auto mt-4 mb-10 px-4 text-center sm:mt-6 sm:mb-12">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          <span className="section-label mb-3 inline-block sm:mb-4">Socles & Architectures</span>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl">
            Socles Numériques <span className="text-highlight">Métiers</span>
          </h1>

          <p className="text-muted mx-auto mb-4 max-w-3xl text-sm leading-relaxed sm:text-lg">
            Découvrez nos modèles et socles pré-configurés pour le secteur médico-social et
            sanitaire (EHPAD, résidences autonomie, coordination de soins, services à domicile).
            Accélérez votre déploiement tout en assurant une conformité immédiate.
          </p>
        </Fade>
      </header>

      {/* Barre de filtres */}
      <section className="relative z-10 mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`min-h-[40px] cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                activeCategory === cat
                  ? 'bg-primary-500 border-primary-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                  : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grille de templates */}
      <section className="relative z-10 mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Template
                  image={article.image}
                  link={article.link}
                  name={article.type}
                  id={article.id}
                  title={article.title}
                  description={article.description}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="py-20 text-center text-gray-400">
            Aucun template trouvé pour cette catégorie.
          </div>
        )}
      </section>

      {/* Call to Action Final */}
      <section className="relative mb-16 overflow-hidden px-4 py-24">
        <div className="from-primary-500/10 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="glass border-primary-500/20 relative z-10 mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] sm:p-16">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Un template a retenu votre attention ?
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-2xl text-lg">
            Démarrez votre projet avec l'un de nos modèles de base. Nous nous chargeons de la
            personnalisation complète pour l'adapter parfaitement à votre image.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            Démarrer votre projet avec un socle →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
