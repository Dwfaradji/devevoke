'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CookieBannerProps {
  config: {
    delay: number;
    expires: number;
    themeMode: string;
    displayPosition: string;
    fullWidth: boolean;
    title: string;
    description: string;
    primaryColor: string;
    lightColor: string;
    moreInfoBtnLink: string;
    moreInfoBtnLabel: string;
    settingsBtnLabel: string;
    cookieTypesTitle: string;
    necessaryCookieTypeDesc: string;
    necessaryCookieTypeLabel: string;
    cookieTypes: Array<{
      type: string;
      value: keyof Cookies;
      description: string;
    }>;
    showDeclineBtn: boolean;
    acceptBtnLabel: string;
    declineInfoBtnLabel: string;
  };
}

interface Cookies {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ config }) => {
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false);
  const [cookies, setCookies] = useState<Cookies>({
    necessary: true,
    analytics: true, // Suivi Google Analytics accepté par défaut
    marketing: false,
    preferences: false,
  });

  const applyConsent = (preferences: Cookies) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
        ad_user_data: preferences.marketing ? 'granted' : 'denied',
        ad_personalization: preferences.marketing ? 'granted' : 'denied',
      });
    }
  };

  useEffect(() => {
    const hasRejected = document.cookie.includes('cookieConsent=false');
    const prefMatch = document.cookie.match(/cookiePreferences=([^;]+)/);

    if (prefMatch) {
      try {
        const savedCookies = JSON.parse(decodeURIComponent(prefMatch[1]));
        setCookies(savedCookies);
        applyConsent(savedCookies);
      } catch (e) {
        // Ignorer les erreurs de parsing
      }
    } else if (hasRejected) {
      const rejectedState = {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
      };
      setCookies(rejectedState);
      applyConsent(rejectedState);
    } else {
      // Par défaut, suivi Google Analytics actif dès la navigation
      applyConsent({ necessary: true, analytics: true, marketing: false, preferences: false });
    }

    const hasAnswered = document.cookie.includes('cookieConsent=true') || hasRejected;
    if (!hasAnswered) {
      const timer = setTimeout(() => setIsBannerVisible(true), config.delay);
      return () => clearTimeout(timer);
    }
  }, [config.delay]);

  // Permet de rouvrir le panneau depuis le footer ou un lien de la politique de confidentialité
  useEffect(() => {
    const handleOpenBanner = () => {
      setIsBannerVisible(true);
      setIsSettingsVisible(true);
    };
    window.addEventListener('openCookiePreferences', handleOpenBanner);
    return () => window.removeEventListener('openCookiePreferences', handleOpenBanner);
  }, []);

  const handleAccept = () => {
    const expiresDays = config.expires || 365;
    const maxAge = expiresDays * 24 * 60 * 60;
    document.cookie = `cookieConsent=true; max-age=${maxAge}; path=/; SameSite=Lax`;
    document.cookie = `cookiePreferences=${encodeURIComponent(
      JSON.stringify(cookies)
    )}; max-age=${maxAge}; path=/; SameSite=Lax`;
    applyConsent(cookies);
    setIsBannerVisible(false);
  };

  const handleReject = () => {
    const expiresDays = config.expires || 365;
    const maxAge = expiresDays * 24 * 60 * 60;
    const deactivatedState = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    document.cookie = `cookieConsent=false; max-age=${maxAge}; path=/; SameSite=Lax`;
    document.cookie = `cookiePreferences=${encodeURIComponent(
      JSON.stringify(deactivatedState)
    )}; max-age=${maxAge}; path=/; SameSite=Lax`;
    setCookies(deactivatedState);
    applyConsent(deactivatedState);
    setIsBannerVisible(false);
  };

  const toggleSettings = () => setIsSettingsVisible(!isSettingsVisible);

  return (
    <AnimatePresence>
      {isBannerVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass fixed right-4 bottom-4 left-4 z-50 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:right-6 sm:bottom-6 sm:left-auto sm:max-w-[400px]"
        >
          <div className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">
                🍪
              </span>
              <h4 className="text-lg font-bold tracking-tight text-white">{config.title}</h4>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              {config.description}{' '}
              <a
                href={config.moreInfoBtnLink}
                className="text-primary-400 hover:text-primary-300 mt-1 inline-block font-medium underline underline-offset-4 transition-colors"
              >
                {config.moreInfoBtnLabel}
              </a>
            </p>

            <AnimatePresence>
              {isSettingsVisible && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 overflow-hidden"
                >
                  <div className="space-y-5 border-t border-white/10 pt-4">
                    <h5 className="mb-2 text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">
                      {config.cookieTypesTitle}
                    </h5>

                    {/* Necessary cookies (disabled toggle) */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-200">
                          {config.necessaryCookieTypeLabel}
                        </div>
                        <div className="mt-1 text-xs leading-relaxed text-gray-500">
                          {config.necessaryCookieTypeDesc}
                        </div>
                      </div>
                      <div className="bg-primary-500/50 relative inline-flex h-5 w-9 shrink-0 cursor-not-allowed items-center rounded-full">
                        <span className="inline-block h-3 w-3 translate-x-5 transform rounded-full bg-white transition" />
                      </div>
                    </div>

                    {/* Dynamic cookies */}
                    {config.cookieTypes.map(({ type, value, description }) => (
                      <div key={value} className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-200">{type}</div>
                          <div className="mt-1 text-xs leading-relaxed text-gray-500">
                            {description}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCookies((prev) => ({ ...prev, [value]: !prev[value] }))}
                          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${cookies[value] ? 'bg-primary-500' : 'bg-white/10'}`}
                        >
                          <span
                            className={`${cookies[value] ? 'translate-x-5 bg-white' : 'translate-x-1 bg-gray-400'} inline-block h-3 w-3 transform rounded-full transition duration-200 ease-in-out`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAccept}
                className="from-primary-500 to-secondary-500 w-full cursor-pointer rounded-xl bg-gradient-to-r py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-opacity hover:opacity-90"
              >
                {isSettingsVisible ? 'Enregistrer mes choix' : config.acceptBtnLabel}
              </button>

              <div className="flex gap-3">
                <button
                  onClick={toggleSettings}
                  className="flex-1 cursor-pointer rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-gray-300 transition-colors hover:bg-white/10"
                >
                  {isSettingsVisible ? 'Masquer les options' : config.settingsBtnLabel}
                </button>
                {config.showDeclineBtn && (
                  <button
                    onClick={handleReject}
                    className="flex-1 cursor-pointer rounded-xl border border-white/5 bg-transparent py-2.5 text-xs font-semibold text-gray-400 transition-colors hover:bg-white/5 hover:text-gray-200"
                  >
                    {config.declineInfoBtnLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
