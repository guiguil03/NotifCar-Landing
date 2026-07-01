'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const scenarioIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
      <path d="M12 22V12M3 7l9 5 9-5"/>
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="8" width="22" height="10" rx="2"/>
      <path d="M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2"/>
      <circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
    </svg>
  ),
];

const scenarioColors = [
  { tagColor: '#6366f1', tagBg: 'rgba(99,102,241,0.10)' },
  { tagColor: '#8b5cf6', tagBg: 'rgba(139,92,246,0.10)' },
  { tagColor: '#0ea5e9', tagBg: 'rgba(14,165,233,0.10)' },
];

const lossPcts = [60, 75, 88, 50];

const Scenarios: React.FC = () => {
  const { t } = useTranslation();
  const items = t('scenarios.items', { returnObjects: true }) as {
    tag: string; title: string; description: string; sans: string; avec: string;
  }[];
  const losses = t('scenarios.losses', { returnObjects: true }) as { label: string; value: string }[];

  return (
    <section id="scenarios" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pt-10 sm:pt-12 pb-16 sm:pb-24 md:pb-32">

        <div className="max-w-xl mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(38,51,225,0.08)', color: '#3B7FFF' }}
          >
            {t('scenarios.badge')}
          </span>
          <h2
            className="font-extrabold text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}
          >
            {t('scenarios.title')}{' '}
            <span style={{ color: '#3B7FFF' }}>{t('scenarios.titleHighlight')}</span>
          </h2>
        </div>

        {/* 3 cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {items.map((s, idx) => {
            const { tagColor, tagBg } = scenarioColors[idx];
            return (
              <div key={s.title} className="rounded-2xl p-6 flex flex-col gap-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: tagBg, color: tagColor }}>
                    {scenarioIcons[idx]}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm leading-tight">{s.title}</p>
                    <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: tagColor }}>{s.tag}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                <div className="h-px bg-gray-100" />
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: 'rgba(239,68,68,0.10)', color: '#ef4444' }}>✗</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-1 text-red-400">{t('scenarios.withoutLabel')}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.sans}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: 'rgba(38,194,158,0.12)', color: '#26C29E' }}>✓</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#26C29E' }}>{t('scenarios.withLabel')}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.avec}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Barres de pertes */}
        <div className="rounded-2xl border border-gray-100 shadow-sm px-4 py-8 sm:px-10 md:px-12 sm:py-10 md:py-12 bg-gray-50">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
            <h3 className="font-bold text-gray-900" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>
              {t('scenarios.lossesTitle')}
            </h3>
            <p className="text-gray-400 text-sm">{t('scenarios.lossesSubtitle')}</p>
          </div>
          <div className="space-y-7">
            {losses.map((l, idx) => (
              <div key={l.label}>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-gray-600 text-sm">{l.label}</span>
                  <span className="font-bold text-sm text-red-500">{l.value}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-gray-200">
                  <div className="h-full rounded-full" style={{ width: `${lossPcts[idx]}%`, background: 'linear-gradient(90deg, #3B7FFF, #26C29E)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scenarios;
