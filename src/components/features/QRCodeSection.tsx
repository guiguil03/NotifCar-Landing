'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const QRCodeSection: React.FC = () => {
  const { t } = useTranslation();
  const stats = t('qrcode.stats', { returnObjects: true }) as { value: string; label: string }[];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #3B7FFF, #1B6FA8, #26C29E)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-12">

        <div className="max-w-2xl mb-12 sm:mb-16 md:mb-20">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(38,51,225,0.08)', color: '#3B7FFF' }}
          >
            {t('qrcode.badge')}
          </span>
          <h2
            className="font-extrabold text-gray-900 leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
          >
            {t('qrcode.title')}{' '}
            <span style={{ color: '#3B7FFF' }}>
              {t('qrcode.titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            {t('qrcode.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden mb-12 sm:mb-16 shadow-sm">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-white px-3 py-5 sm:px-6 sm:py-8 flex flex-col gap-1.5 sm:gap-2 min-w-0">
              <span
                className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight tabular-nums break-all sm:break-normal"
                style={{ color: '#3B7FFF' }}
              >
                {stat.value}
              </span>
              <span className="text-gray-500 text-xs sm:text-sm leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Citation */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #F0F3FF 0%, #EBF9F5 100%)' }} />
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: 'linear-gradient(to bottom, #3B7FFF, #26C29E)' }} />
          <div className="relative px-5 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12">
            <svg className="absolute top-4 right-4 sm:top-6 sm:right-8 opacity-10 w-12 h-9 sm:w-20 sm:h-[60px]" viewBox="0 0 80 60" fill="#3B7FFF">
              <path d="M0 60V36C0 16.1 13.4 4.3 40.2 0L44 7.2C29.4 10.7 21.6 18 20.4 29H36V60H0Zm44 0V36C44 16.1 57.4 4.3 84.2 0L88 7.2C73.4 10.7 65.6 18 64.4 29H80V60H44Z"/>
            </svg>
            <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-4 max-w-3xl relative z-[1]">
              {t('qrcode.quoteText1')}{' '}
              <span className="font-bold" style={{ color: '#3B7FFF' }}>{t('qrcode.quoteHighlight1')}</span>{' '}
              {t('qrcode.quoteText2')}{' '}
              <span className="font-bold" style={{ color: '#3B7FFF' }}>{t('qrcode.quoteHighlight2')}</span>
            </p>
            <p className="text-gray-400 text-sm">{t('qrcode.quoteSub')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
