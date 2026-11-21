'use client';
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Laptop, Server, Award, Sparkles } from 'lucide-react';

const AboutMore = () => {
  const values = [
    {
      title: 'Protection des Données & Éthique',
      desc: 'Nous appliquons les principes de Privacy by Design et de minimisation. Nos architectures respectent scrupuleusement le RGPD et les préconisations de la CNIL pour sécuriser les données des usagers et de leurs familles.',
      icon: <ShieldCheck className="text-primary-400 h-8 w-8" />,
    },
    {
      title: 'Sobriété & Ergonomie Métier',
      desc: 'L’informatique doit libérer du temps pour l’accompagnement. Nous concevons des interfaces épurées, accessibles (RGAA) et ultra-intuitives pour les éducateurs, équipes soignantes et personnels administratifs.',
      icon: <Sparkles className="text-secondary-400 h-8 w-8" />,
    },
    {
      title: 'Accompagnement Humain & Proximité',
      desc: 'DevEvoke est une agence digitale française indépendante. Nous privilégions le dialogue direct avec les directions et les équipes terrain, sans intermédiaires commerciaux inutiles.',
      icon: <HeartHandshake className="h-8 w-8 text-pink-400" />,
    },
  ];

  const strengths = [
    {
      title: 'Expertise Logicielle, Web & SaaS',
      desc: 'Une équipe d’ingénieurs et de designers UI/UX spécialisés dans la conception de plateformes web modernes, d’applications mobiles et d’outils métiers sur-mesure pour les acteurs du médico-social.',
      details: [
        'Développement Full-Stack Next.js, React et TypeScript de pointe.',
        'Applications mobiles et tablettes adaptées aux tournées terrain (mode hors-ligne).',
        "Conception de logiciels métiers sur-mesure et d'automatisations administratives.",
      ],
      icon: <Laptop className="h-6 w-6 text-white" />,
      color: 'bg-primary-500/20',
    },
    {
      title: 'Hébergement Souverain en France',
      desc: 'Vos données restent hébergées sur des infrastructures cloud sécurisées localisées exclusivement sur le territoire français.',
      details: [
        'Hébergement 100% basé en France (serveurs certifiés ISO 27001).',
        'Chiffrement des flux (TLS 1.3) et chiffrement des données stockées (AES-256).',
        "Sauvegardes quotidiennes externalisées et contrôle d'accès strict (RBAC).",
      ],
      icon: <Server className="h-6 w-6 text-white" />,
      color: 'bg-secondary-500/20',
    },
    {
      title: 'Spécialisation Médico-Sociale',
      desc: 'Une compréhension concrète des organisations associatives et des défis rencontrés au quotidien dans les établissements.',
      details: [
        'Prise en compte des réalités multi-sites des associations gestionnaires.',
        'Outils adaptés aux contraintes des IME, SESSAD, ESAT, EHPAD et FAM.',
        'Zéro jargon technique superflu : des solutions directement opérationnelles.',
      ],
      icon: <Award className="h-6 w-6 text-white" />,
      color: 'bg-emerald-500/20',
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background decoration */}
      <div className="bg-primary-600/10 pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION 1: NOS VALEURS */}
        <div className="mb-24">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="section-label">Notre ADN</span>
            <h2 className="mt-4 mb-6 text-3xl font-bold text-white md:text-5xl">
              Des valeurs ancrées dans{' '}
              <span className="text-highlight">le service public & associatif</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-400">
              Nous concevons la technologie comme un soutien discret et efficace au service des
              équipes qui accompagnent au quotidien les personnes vulnérables.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass flex flex-col justify-between rounded-3xl border border-white/5 p-8 transition-all duration-300 hover:border-white/20"
              >
                <div>
                  <div className="mb-6 w-fit rounded-2xl border border-white/10 bg-white/5 p-4">
                    {val.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">{val.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: NOS FORCES */}
        <div>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="section-label">Pourquoi DevEvoke</span>
            <h2 className="mt-4 mb-6 text-3xl font-bold text-white md:text-5xl">
              L'alliance de l’expertise logicielle et de la{' '}
              <span className="text-highlight">connaissance du terrain</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {strengths.map((str, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-strong hover:border-primary-500/40 flex flex-col justify-between rounded-3xl border border-white/10 p-8 transition-all duration-300"
              >
                <div>
                  <div className={`rounded-2xl p-3 ${str.color} mb-6 w-fit border border-white/10`}>
                    {str.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white">{str.title}</h3>
                  <p className="mb-8 text-sm leading-relaxed text-gray-400">{str.desc}</p>

                  <ul className="space-y-3">
                    {str.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="bg-primary-400 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMore;
