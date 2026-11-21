'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

interface ModalProps {
  showModal: boolean;
  setIsOpen: (isOpen: boolean) => void;
  contentModal: string;
  prices: Array<{
    id: string;
    subtitle: string;
    details: string[];
    price: string;
    title: string;
  }>;
}

const Modal: React.FC<ModalProps> = ({ showModal, setIsOpen, contentModal, prices }) => {
  const [modal, setModal] = useState<ModalProps['prices'][number] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const selectedModal = prices.find((data) => data.id === contentModal);
    setModal(selectedModal || null);
  }, [contentModal, prices]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (showModal) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal, setIsOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const handleCloseModal = () => setIsOpen(false);

  const handleRedirect = () => {
    setIsOpen(false);
    router.push('/contact');
  };

  return (
    <AnimatePresence>
      {showModal && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="absolute inset-0 bg-[var(--color-bg)]/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
            className="glass relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="z-10 flex flex-shrink-0 items-center justify-between border-b border-white/10 bg-black/20 p-4 backdrop-blur-md sm:p-6 md:px-8">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
                  <span className="text-gradient drop-shadow-sm">{modal?.title}</span>
                </h3>
                {modal?.subtitle && (
                  <p className="text-primary-400 mt-1 text-xs font-medium tracking-wider uppercase sm:text-sm">
                    {modal.subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                className="text-muted inline-flex size-11 min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/5 bg-white/5 transition-colors hover:bg-white/10 hover:text-white"
                onClick={handleCloseModal}
                aria-label="Fermer"
              >
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="custom-scrollbar flex-grow space-y-4 overflow-y-auto p-4 sm:space-y-6 sm:p-6 md:p-8">
              <ul className="space-y-3 sm:space-y-4">
                {modal?.details.map((detail, i) => (
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-300 sm:gap-3 sm:text-base md:text-lg"
                  >
                    <svg
                      className="text-primary-400 mt-0.5 size-5 shrink-0 sm:size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="z-10 flex flex-shrink-0 flex-col justify-between gap-4 border-t border-white/10 bg-black/40 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-6 md:px-8">
              <div>
                <span className="text-muted mb-0.5 block text-xs font-medium tracking-wider uppercase sm:mb-1 sm:text-sm">
                  À partir de
                </span>
                <span className="text-2xl font-bold text-white drop-shadow-sm sm:text-4xl">
                  {modal?.price}
                </span>
              </div>
              <button
                type="button"
                className="btn-primary flex min-h-[48px] w-full items-center justify-center px-8 py-3.5 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] sm:w-auto"
                onClick={handleRedirect}
              >
                Demander un devis
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
