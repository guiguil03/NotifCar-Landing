import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RegistrationModal } from '../modals';

const stepIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="3" height="3" rx="0.5" />
      <rect x="19" y="14" width="2" height="2" rx="0.5" />
      <rect x="14" y="19" width="2" height="2" rx="0.5" />
      <rect x="18" y="18" width="3" height="3" rx="0.5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
      <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" stroke="none" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" strokeLinecap="round" />
      <circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
];

const detailIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
];

const STEP_DURATION_MS = 9000;
const ACCENT = '#3B7FFF';
const STEP_SCREENS = ['/screen3.jpg', '/screen1.jpg', '/screen2.jpg'];

const Fonctionnement: React.FC = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const steps = t('howItWorks.steps', { returnObjects: true }) as { id: string; title: string; description: string }[];
  const details = t('howItWorks.details', { returnObjects: true }) as { title: string; desc: string; tags: string[] }[];

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % steps.length), STEP_DURATION_MS);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%)' }}>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">

        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-1">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'white', border: '1px solid rgba(255,255,255,0.35)' }}>
            {t('howItWorks.badge')}
          </span>
          <h2 className="font-extrabold text-white mb-5 leading-tight" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            {t('howItWorks.title')}
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-md mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-12 sm:mb-16">

          {/* Étapes */}
          <div className="flex-1 w-full space-y-3">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <button key={step.id} onClick={() => setActive(i)} className="w-full text-left group">
                  <div
                    className="relative rounded-2xl px-4 py-4 sm:px-6 sm:py-5 transition-all duration-400 border"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.08)',
                      borderColor: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
                      boxShadow: isActive ? '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)' : 'none',
                    }}
                  >
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-[2px] rounded-b-2xl overflow-hidden w-full">
                        <div className="h-full rounded-full" style={{ background: ACCENT, animation: `progressBar ${STEP_DURATION_MS}ms linear forwards` }} />
                      </div>
                    )}
                    {isActive && (
                      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full" style={{ background: ACCENT }} />
                    )}
                    <div className="flex items-start gap-3 sm:gap-5 min-w-0">
                      <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                        <span className="text-2xl font-black leading-none transition-all duration-300"
                          style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.45)' }}>
                          {step.id}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5 min-w-0">
                          <p className="font-bold text-sm sm:text-base md:text-lg transition-all duration-300 min-w-0 flex-1"
                            style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.6)' }}>
                            {step.title}
                          </p>
                          {isActive && (
                            <span className="flex-shrink-0 p-1 rounded-lg" style={{ background: ACCENT + '20', color: ACCENT }}>
                              {stepIcons[i]}
                            </span>
                          )}
                        </div>
                        <p className="text-sm leading-relaxed transition-all duration-500 overflow-hidden"
                          style={{ color: isActive ? 'white' : 'transparent', maxHeight: isActive ? '80px' : '0' }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 flex flex-col xs:flex-row flex-wrap gap-3">
              <a href="https://apps.apple.com/fr/app/notifcar/id6755294079" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 w-full xs:w-auto"
                style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-white/70 text-[10px]">{t('howItWorks.appStorePrefix')}</div>
                  <div className="font-bold text-sm">{t('howItWorks.appStoreName')}</div>
                </div>
              </a>

              <div className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-sm cursor-not-allowed w-full xs:w-auto"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 opacity-50">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.26-2.72-2.72-10.87 9.78zM.29 1.27C.11 1.6 0 2 0 2.46v19.08c0 .46.11.86.29 1.19l.06.06 10.68-10.68v-.25L.35 1.21l-.06.06zM20.55 10.37l-2.85-1.64-3.03 3.03 3.03 3.03 2.87-1.65c.82-.47.82-1.3-.02-1.77zM3.18.24l12.6 7.26-2.72 2.72L2.19.44C2.5.07 2.88-.01 3.18.24z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-white/40 text-[10px]">{t('howItWorks.googlePlayPrefix')}</div>
                  <div className="font-bold text-sm text-white/50">{t('howItWorks.googlePlayName')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Téléphone */}
          <div className="flex-shrink-0 relative w-full max-w-[260px] mx-auto lg:mx-0 flex flex-col items-center">
            <div className="absolute pointer-events-none" style={{
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: 'min(320px, 100vw)', height: 'min(320px, 100vw)', borderRadius: '50%',
              background: `radial-gradient(circle, ${ACCENT}30 0%, transparent 70%)`,
              filter: 'blur(24px)', transition: 'background 0.7s ease',
            }} />

            <div className="relative mx-auto w-[min(240px,78vw)] sm:w-[240px] aspect-[240/498]" style={{
              background: 'linear-gradient(160deg, #1e1e20 0%, #0d0d0d 100%)',
              borderRadius: '44px', border: '1.5px solid rgba(255,255,255,0.16)',
              boxShadow: `0 0 0 1px rgba(0,0,0,0.9), 0 50px 80px rgba(0,0,0,0.65), 0 0 40px ${ACCENT}20, inset 0 1px 0 rgba(255,255,255,0.1)`,
              overflow: 'hidden', transition: 'box-shadow 0.7s ease', animation: 'fonc-float 5s ease-in-out infinite',
            }}>
              <div style={{ position: 'absolute', inset: '11px', borderRadius: '34px', overflow: 'hidden', background: '#000' }}>
                {STEP_SCREENS.map((src, i) => (
                  <img key={i} src={src} alt={steps[i]?.title ?? ''} style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                    opacity: i === active ? 1 : 0, transition: 'opacity 0.7s ease',
                  }} />
                ))}
              </div>
              <div style={{ position: 'absolute', top: '18px', left: '50%', transform: 'translateX(-50%)', width: '84px', height: '25px', background: '#000', borderRadius: '16px', zIndex: 10 }} />
              <div style={{ position: 'absolute', bottom: '17px', left: '50%', transform: 'translateX(-50%)', width: '96px', height: '4px', background: 'rgba(255,255,255,0.28)', borderRadius: '4px', zIndex: 10 }} />
              <div style={{ position: 'absolute', right: '-3px', top: '115px', width: '3px', height: '60px', background: 'rgba(255,255,255,0.17)', borderRadius: '2px' }} />
              <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '40px', background: 'rgba(255,255,255,0.14)', borderRadius: '2px' }} />
              <div style={{ position: 'absolute', left: '-3px', top: '150px', width: '3px', height: '40px', background: 'rgba(255,255,255,0.14)', borderRadius: '2px' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)', borderRadius: '44px', pointerEvents: 'none', zIndex: 20 }} />
            </div>

            <div className="flex justify-center items-center gap-2 mt-6">
              {steps.map((_, i) => (
                <button key={i} type="button" onClick={() => setActive(i)}
                  aria-label={t('howItWorks.stepDotLabel', { number: i + 1 })}
                  className="transition-all duration-300 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center p-3 -m-3">
                  <span className="block rounded-full transition-all duration-300" style={{
                    width: i === active ? '24px' : '6px', height: '6px',
                    background: i === active ? '#3B7FFF' : 'rgba(255,255,255,0.2)',
                  }} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Détails */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {details.map((d, idx) => (
            <div key={d.title} className="rounded-2xl p-6 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: 'rgba(255,255,255,0.2)' }}>
                {detailIcons[idx]}
              </div>
              <p className="text-white font-semibold text-sm mb-2">{d.title}</p>
              {d.desc && <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>{d.desc}</p>}
              {d.tags && d.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {d.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progressBar { from { width: 0% } to { width: 100% } }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 60px) scale(1.05); }
          66% { transform: translate(40px, -20px) scale(1.1); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 50px) scale(1.08); }
        }
        @keyframes fonc-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
        .orb-1 { width: 500px; height: 500px; top: -150px; right: -100px; background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%); animation: float-1 12s ease-in-out infinite; }
        .orb-2 { width: 400px; height: 400px; bottom: -100px; left: -80px; background: radial-gradient(circle, rgba(20,53,184,0.5) 0%, transparent 70%); animation: float-2 15s ease-in-out infinite; }
        .orb-3 { width: 300px; height: 300px; top: 40%; left: 40%; background: radial-gradient(circle, rgba(110,198,245,0.2) 0%, transparent 70%); animation: float-3 10s ease-in-out infinite; }
      `}</style>

      <RegistrationModal isOpen={isRegistrationModalOpen} onClose={() => setIsRegistrationModalOpen(false)} />
    </section>
  );
};

export default Fonctionnement;
