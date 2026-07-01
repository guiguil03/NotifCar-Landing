'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const featureColors = ['#3B7FFF', '#6366f1', '#0ea5e9', '#f59e0b', '#26C29E', '#ef4444'];

const featureIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" strokeLinecap="round" />
    <circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <circle cx="12" cy="11" r="3" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <rect x="3" y="11" width="18" height="11" rx="2" strokeLinecap="round" />
    <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
  </svg>,
];

const Fonctionnalites: React.FC = () => {
  const { t } = useTranslation();
  const items = t('features.items', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section id="features" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">

        <div className="text-center max-w-xl mx-auto mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(59,127,255,0.08)', color: '#3B7FFF' }}
          >
            {t('features.badge')}
          </span>
          <h2 className="font-extrabold text-gray-900 leading-tight mb-4" style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
            {t('features.title')}
          </h2>
          <p className="text-gray-500 text-lg">{t('features.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((f, idx) => (
            <div key={f.title} className="rounded-2xl p-5 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: featureColors[idx] + '12', color: featureColors[idx] }}
              >
                {featureIcons[idx]}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fonctionnalites;
