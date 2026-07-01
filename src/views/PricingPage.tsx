'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import { useAppNavigation } from '../hooks/useNavigation';

const PLAN_META = [
  { accent: '#6b7280', ctaStyle: 'ghost' as const, isPopular: false, isEnterprise: false, tag: null, price: { monthly: '0', yearly: '0' }, suffix: '€' },
  { accent: '#3B7FFF', ctaStyle: 'filled' as const, isPopular: true,  isEnterprise: false, tag: 'popular', price: { monthly: '5,99', yearly: '4,49' }, suffix: '€' },
  { accent: '#26C29E', ctaStyle: 'teal'   as const, isPopular: false, isEnterprise: true,  tag: 'custom', price: { monthly: 'Devis', yearly: 'Devis' }, suffix: '' },
];

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  const { navigateTo } = useAppNavigation();
  const yearly = false;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const planTranslations = t('pricing.plans', { returnObjects: true }) as { name: string; desc: string; cta: string; features: { label: string; ok: boolean }[] }[];
  const faqs = t('pricing.pricingFaqs', { returnObjects: true }) as { q: string; a: string }[];
  const guarantees = t('pricing.guarantees', { returnObjects: true }) as { label: string; sub: string }[];

  const plans = PLAN_META.map((meta, i) => ({ ...meta, ...planTranslations[i] }));

  const guaranteeIcons = [
    <svg key="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" /></svg>,
    <svg key="nolock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l-4-4 4-4M5 10h14a4 4 0 010 8h-1" /></svg>,
    <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <style>{`
        @keyframes gradient-border {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Hero */}
      <div className="relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%)' }}>
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #8DD8FF 0%, transparent 70%)' }} />
        <div className="relative z-10 text-center px-4 sm:px-6 pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:pt-28 pb-16 sm:pb-28">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
            {t('pricing.badge')}
          </span>
          <h1 className="font-black text-white leading-none mb-5"
            style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '-0.03em' }}>
            {t('pricing.title')}
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-md mx-auto mb-8 sm:mb-10 px-1">
            {t('pricing.subtitle')}
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 lg:px-16 -mt-10 sm:-mt-14 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => {
            const cardContent = (
              <div className="relative flex flex-col h-full bg-white rounded-2xl"
                style={{
                  padding: '2rem',
                  borderRadius: plan.isPopular ? '23px' : '20px',
                  boxShadow: plan.isPopular
                    ? '0 20px 60px rgba(59,127,255,0.18), 0 4px 16px rgba(0,0,0,0.08)'
                    : '0 2px 16px rgba(0,0,0,0.06)',
                  marginTop: plan.isPopular ? '-8px' : '0',
                }}>
                <div style={{
                  position: 'absolute', top: 0, left: '24px', right: '24px', height: '3px',
                  borderRadius: '0 0 4px 4px',
                  background: plan.isPopular
                    ? 'linear-gradient(90deg, #3B7FFF, #818CF8)'
                    : plan.isEnterprise ? '#26C29E' : '#e5e7eb',
                }} />

                {plan.tag && (
                  <span className="inline-block text-[10px] font-black uppercase tracking-widest mb-5 px-3 py-1 rounded-full w-fit"
                    style={plan.isPopular
                      ? { background: 'rgba(59,127,255,0.1)', color: '#3B7FFF', border: '1px solid rgba(59,127,255,0.2)' }
                      : { background: 'rgba(38,194,158,0.1)', color: '#26C29E', border: '1px solid rgba(38,194,158,0.2)' }}>
                    {t(`pricing.${plan.tag}`)}
                  </span>
                )}

                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: plan.accent }}>{plan.name}</p>

                <div className="mb-1">
                  {plan.price.monthly === 'Devis' ? (
                    <p className="font-black text-gray-900 text-3xl">{t('pricing.onRequest')}</p>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="font-black text-gray-900" style={{ fontSize: '3rem', lineHeight: 1, letterSpacing: '-0.03em' }}>
                        {yearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-400 text-sm">{plan.suffix}{t('pricing.month')}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-500 mb-7 leading-relaxed">{plan.desc}</p>
                <div className="h-px bg-gray-100 mb-6" />

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3">
                      <div style={{
                        width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: f.ok ? (plan.isPopular ? 'rgba(59,127,255,0.12)' : 'rgba(38,194,158,0.12)') : '#f3f4f6',
                      }}>
                        {f.ok ? (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4l3 3 5-6" stroke={plan.isPopular ? '#3B7FFF' : '#26C29E'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <div style={{ width: '7px', height: '1.5px', background: '#d1d5db', borderRadius: '1px' }} />
                        )}
                      </div>
                      <span className={`text-sm ${f.ok ? 'text-gray-700' : 'text-gray-300'}`}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                {plan.ctaStyle === 'filled' ? (
                  <button className="w-full py-4 rounded-xl text-sm font-black text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #3B7FFF, #5B9FFF)', boxShadow: '0 8px 24px rgba(59,127,255,0.35)' }}>
                    {plan.cta}
                  </button>
                ) : plan.ctaStyle === 'teal' ? (
                  <button onClick={() => navigateTo('contact')}
                    className="w-full py-4 rounded-xl text-sm font-black transition-all hover:opacity-80"
                    style={{ background: 'rgba(38,194,158,0.1)', color: '#26C29E', border: '1px solid rgba(38,194,158,0.25)' }}>
                    {plan.cta}
                  </button>
                ) : (
                  <button className="w-full py-4 rounded-xl text-sm font-black text-gray-600 transition-all hover:bg-gray-50 border border-gray-200">
                    {plan.cta}
                  </button>
                )}
              </div>
            );

            return plan.isPopular ? (
              <div key={plan.name} style={{ padding: '1.5px', borderRadius: '24px', background: 'linear-gradient(135deg, #3B7FFF, #818CF8, #3B7FFF)', backgroundSize: '200% 200%', animation: 'gradient-border 4s ease infinite' }}>
                {cardContent}
              </div>
            ) : (
              <div key={plan.name}>{cardContent}</div>
            );
          })}
        </div>
      </div>

      {/* Guarantees */}
      <div className="border-y border-gray-100 bg-gray-50 py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 text-center">
          {guarantees.map((g, i) => (
            <div key={g.label} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-blue-500" style={{ background: 'rgba(59,127,255,0.08)' }}>
                {guaranteeIcons[i]}
              </div>
              <p className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight px-0.5">{g.label}</p>
              <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5 leading-snug">{g.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24 w-full">
        <h2 className="font-black text-gray-900 text-center mb-12"
          style={{ fontSize: 'clamp(24px, 3vw, 38px)', letterSpacing: '-0.02em' }}>
          {t('pricing.faqTitle')}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border transition-all"
              style={{ borderColor: openFaq === i ? '#3B7FFF' : '#f0f0f0' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 text-left min-h-[52px]">
                <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">{faq.q}</span>
                <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: openFaq === i ? '#3B7FFF' : '#f3f4f6',
                    color: openFaq === i ? 'white' : '#6b7280',
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                  }}>
                  +
                </div>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA bottom */}
      <div className="relative overflow-hidden px-4 sm:px-6 py-14 sm:py-20 text-center pb-[max(3.5rem,calc(2.5rem+env(safe-area-inset-bottom,0px)))]"
        style={{ background: 'linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%)' }}>
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
        <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(24px, 3vw, 40px)', letterSpacing: '-0.02em' }}>
          {t('pricing.ctaTitle')}
        </h2>
        <p className="text-white/70 text-base mb-9 max-w-sm mx-auto">
          {t('pricing.ctaSubtitle')}
        </p>
        <button onClick={() => navigateTo('contact')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all hover:opacity-90"
          style={{ background: 'white', color: '#3B7FFF', boxShadow: '0 8px 28px rgba(0,0,0,0.15)' }}>
          {t('pricing.ctaCta')}
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
