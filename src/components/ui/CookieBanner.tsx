import React, { useState, useEffect } from 'react';

const COOKIE_KEY = 'notifcar_cookie_consent';

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'all');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-4 sm:px-8 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{ background: 'linear-gradient(135deg, #2633E1 0%, #26C29E 100%)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-gray-800 font-semibold text-sm sm:text-base mb-0.5">Ce site utilise des cookies</p>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic.{' '}
            <a href="/politique-cookies" className="underline hover:text-blue-600 transition-colors">
              En savoir plus
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex-1 sm:flex-none text-sm font-medium px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Essentiels seulement
          </button>
          <button
            onClick={accept}
            className="flex-1 sm:flex-none text-sm font-semibold px-5 py-2 rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #2633E1 0%, #26C29E 100%)' }}
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
