'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import callApi from '../../../utils/callApi';
import { EMAIL_VALIDATION_MESSAGES, validateProfessionalEmail } from '@/lib/validation/email';

const NewsLetters = () => {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // Honeypot trap
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const submittingRef = React.useRef(false);

  const envoyer = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (submittingRef.current || isSubmitting) {
      return;
    }

    const validation = validateProfessionalEmail(email);
    if (!validation.isValid) {
      setMessage(validation.message || EMAIL_VALIDATION_MESSAGES.INVALID_SYNTAX);
      setIsSuccess(false);
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);
    try {
      const response = await callApi({
        url: '/api/newsletters',
        data: { email: validation.normalizedEmail, website },
      });

      if (response?.data?.status === 200 || response?.data?.success) {
        setMessage(
          '🎉 Bienvenue dans la communauté DevEvoke ! Un email de confirmation vous a été envoyé.'
        );
        setIsSuccess(true);
        setEmail('');
        setWebsite('');
      } else {
        setMessage(
          response?.data?.error || 'Une erreur est survenue. Veuillez vérifier votre adresse.'
        );
        setIsSuccess(false);
      }
    } catch (err: any) {
      const serverError = err?.response?.data?.error;
      setMessage(
        serverError || 'Une erreur est survenue. Veuillez réessayer dans quelques instants.'
      );
      setIsSuccess(false);
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (message) setMessage(null);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section id="section7" className="relative py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Massive CTA Section (Premium SaaS Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-14 flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-white/5 bg-[#030712] p-6 shadow-2xl sm:mb-20 sm:gap-12 sm:p-14 lg:flex-row lg:p-20"
        >
          {/* Lueur d'ambiance asymétrique */}
          <div className="bg-primary-600/15 pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full blur-[120px]" />
          <div className="bg-secondary-600/10 pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full blur-[100px]" />

          {/* Typography (Gauche) */}
          <div className="relative z-10 flex max-w-2xl flex-col items-start text-left">
            <h2 className="mb-4 text-3xl leading-[1.05] font-extrabold tracking-tighter text-white sm:mb-6 sm:text-5xl lg:text-[4rem]">
              Prêt à dominer <br />
              <span className="text-highlight">votre marché ?</span>
            </h2>
            <p className="mb-0 text-base leading-relaxed font-light text-gray-400 sm:text-lg">
              Transformons votre vision en une plateforme digitale ultra-performante. Contactez-nous
              aujourd'hui pour obtenir un devis gratuit et personnalisé.
            </p>
          </div>

          {/* Bouton d'action (Droite) */}
          <div className="relative z-10 mt-2 flex w-full shrink-0 justify-center lg:mt-0 lg:w-auto lg:justify-end">
            <Link
              href="/contact"
              className="group relative inline-block w-full text-center sm:w-auto"
            >
              {/* Glow Edge Effect (Signature Vercel) */}
              <div className="from-primary-500 via-secondary-500 to-primary-500 animate-gradient-x absolute -inset-[1px] rounded-full bg-gradient-to-r opacity-60 blur-[2px] transition duration-500 group-hover:opacity-100" />
              <div className="from-primary-500 via-secondary-500 to-primary-500 animate-gradient-x absolute -inset-[1px] rounded-full bg-gradient-to-r opacity-80 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-black/80 sm:px-10 sm:py-5 sm:text-lg">
                Démarrer mon projet
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-label mb-2">Restez informé</span>
          <h3 className="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">
            Rejoignez notre newsletter
          </h3>
          <p className="mb-6 text-xs text-gray-400 sm:mb-8 sm:text-sm">
            Recevez nos dernières actualités, conseils tech et offres exclusives, sans spam.
          </p>

          <form
            onSubmit={envoyer}
            noValidate
            className="relative mx-auto flex max-w-md flex-col items-center gap-3 sm:flex-row"
          >
            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="pointer-events-none absolute -left-[9999px] h-1 w-1 opacity-0"
              aria-hidden="true"
            />
            <input
              id="newsletter-email"
              aria-label="Email professionnel"
              aria-invalid={Boolean(message && !isSuccess)}
              aria-describedby={message ? 'newsletter-email-feedback' : undefined}
              type="email"
              inputMode="email"
              placeholder="direction@votre-association.fr"
              value={email}
              onChange={handleChange}
              className="focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-full border border-white/10 bg-white/5 py-3.5 pr-28 pl-5 text-base text-white shadow-inner transition-all placeholder:text-gray-500 focus:ring-2 focus:outline-none sm:py-4 sm:pr-32 sm:pl-6 sm:text-sm"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-600 hover:bg-primary-500 absolute top-1.5 right-1.5 bottom-1.5 flex cursor-pointer items-center justify-center rounded-full px-4 text-xs font-medium text-white transition-colors disabled:bg-white/10 disabled:text-gray-500 sm:top-2 sm:right-2 sm:bottom-2 sm:px-6 sm:text-sm"
            >
              {isSubmitting ? 'Envoi...' : 'Rejoindre'}
            </button>
          </form>

          {message && (
            <motion.p
              id="newsletter-email-feedback"
              role={isSuccess ? 'status' : 'alert'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 text-sm font-medium ${isSuccess ? 'text-green-400' : 'text-red-400'}`}
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLetters;
