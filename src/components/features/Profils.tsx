import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type Page } from '../../hooks/useNavigation';

interface ProfilsProps {
  onNavigate?: (page: Page) => void;
}

const profilIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="1" y="3" width="15" height="13" rx="2" />
    <path d="M16 8h4l3 5v3h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
];

const Profils: React.FC<ProfilsProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const profils = t('profiles.items', { returnObjects: true }) as {
    title: string; subtitle: string; points: string[];
  }[];

  const current = profils[active];
  const color = '#3B7FFF';

  const handleSelect = (i: number) => {
    if (i === active) return;
    setActive(i);
    setAnimKey(k => k + 1);
  };

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">

        <div className="max-w-xl mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(59,127,255,0.08)', color: '#3B7FFF' }}
          >
            {t('profiles.badge')}
          </span>
          <h2 className="font-extrabold text-gray-900 leading-tight mb-4" style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
            {t('profiles.title')}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            {t('profiles.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-start">

          {/* Tabs */}
          <div className="w-full lg:w-56 flex-shrink-0">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {profils.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => handleSelect(i)}
                  className="flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-4 rounded-xl text-left w-full min-h-[48px] transition-all duration-200 border min-w-0"
                  style={{
                    background: active === i ? `${color}08` : 'transparent',
                    borderColor: active === i ? `${color}22` : 'transparent',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: active === i ? `${color}12` : '#f3f4f6',
                      color: active === i ? color : '#9ca3af',
                    }}
                  >
                    {profilIcons[i]}
                  </div>
                  <span
                    className="font-semibold text-xs sm:text-sm transition-colors duration-200 truncate"
                    style={{ color: active === i ? color : '#6b7280' }}
                    title={p.title}
                  >
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenu */}
          <div
            key={animKey}
            className="flex-1 rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            style={{ animation: 'profil-enter 0.28s ease both' }}
          >
            <style>{`
              @keyframes profil-enter {
                from { opacity: 0; transform: translateY(8px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <div className="h-1 w-full" style={{ background: color }} />
            <div className="p-5 sm:p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}12`, color }}>
                  {profilIcons[active]}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">{current.title}</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{current.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-3.5 mb-8">
                {current.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${color}12`, color }}>
                      <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3">
                        <path d="M5.5 10.3l2.4 2.4 6.6-6.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-base">{pt}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: color }}
              >
                {t('profiles.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profils;
