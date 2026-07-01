'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function Section({ title, children }: { title: string; children: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm border border-gray-100">
      <h2 className="text-sm font-bold mb-3" style={{ color: '#285AFF' }}>{title}</h2>
      <p className="text-sm text-gray-500 leading-relaxed">{children}</p>
    </div>
  );
}

const CGUPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F0F4F8' }}>
      <Header />

      {/* Hero */}
      <div className="relative overflow-hidden pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:pt-28 pb-12 sm:pb-14 px-4 sm:px-6 text-center"
        style={{ background: 'linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%)' }}>
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'white', border: '1px solid rgba(255,255,255,0.28)' }}>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
            </svg>
            {t('cgu.heroBadge')}
          </span>
          <h1 className="font-black text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            {t('cgu.heroTitle')}
          </h1>
          <p className="text-white/70 text-base max-w-md mx-auto">{t('cgu.heroSubtitle')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-12 pb-[max(2.5rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))]">
        <Section title={t('cgu.s1Title')}>{t('cgu.s1Body')}</Section>
        <Section title={t('cgu.s2Title')}>{t('cgu.s2Body')}</Section>
        <Section title={t('cgu.s3Title')}>{t('cgu.s3Body')}</Section>
        <Section title={t('cgu.s4Title')}>{t('cgu.s4Body')}</Section>
        <Section title={t('cgu.s5Title')}>{t('cgu.s5Body')}</Section>
        <Section title={t('cgu.s6Title')}>{t('cgu.s6Body')}</Section>
        <Section title={t('cgu.s7Title')}>{t('cgu.s7Body')}</Section>
        <Section title={t('cgu.s8Title')}>{t('cgu.s8Body')}</Section>
        <Section title={t('cgu.s9Title')}>{t('cgu.s9Body')}</Section>
        <Section title={t('cgu.s10Title')}>{t('cgu.s10Body')}</Section>
      </div>

      <Footer />
    </div>
  );
};

export default CGUPage;
