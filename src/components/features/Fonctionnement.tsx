import React, { useState, useEffect } from 'react';
import { RegistrationModal } from '../modals';

const steps = [
  {
    id: '01',
    title: 'Collez votre QR code',
    description:
      "À l'inscription, vous recevez un QR code unique Notifcar. Collez-le sur votre pare-brise — discret et résistant aux intempéries.",
    icon: (
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
    screen: '/screen3.jpg',
    accent: '#3B7FFF',
  },
  {
    id: '02',
    title: 'Un passant scanne',
    description:
      "N'importe qui peut scanner le QR code avec son téléphone, sans télécharger d'application. Il choisit le motif et envoie l'alerte anonymement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
        <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" stroke="none" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" />
      </svg>
    ),
    screen: '/screen1.jpg',
    accent: '#3B7FFF',
  },
  {
    id: '03',
    title: 'Vous êtes alerté immédiatement',
    description:
      "Vous recevez une notification push en moins de 3 secondes avec le motif du signalement, l'adresse exacte et l'heure — où que vous soyez.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" strokeLinecap="round" />
        <circle cx="12" cy="21" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    screen: '/screen2.jpg',
    accent: '#3B7FFF',
  },
];

const details = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
      </svg>
    ),
    title: 'Scan natif',
    desc: 'Appareil photo natif — aucune app requise.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Motifs',
    tags: ['Choc', 'Rayure', 'Stationnement gênant', 'Autre'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '< 3 secondes',
    desc: 'Alerte reçue en temps réel, partout dans le monde.',
  },
];

const STEP_DURATION_MS = 9000;

const Fonctionnement: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % steps.length), STEP_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const currentAccent = steps[active].accent;

  return (
    <section id="how-it-works" className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%)' }}>

      {/* Orbes animés */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Grille de points */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">

        {/* ── En-tête ── */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'white', border: '1px solid rgba(255,255,255,0.35)' }}
          >
            Simple &amp; rapide
          </span>
          <h2
            className="font-extrabold text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Comment ça marche ?
          </h2>
          <p className="text-white/80 text-lg max-w-md mx-auto">
            Trois étapes. Quelques secondes. Zéro tracas.
          </p>
        </div>

        {/* ── Layout principal ── */}
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 mb-16">

          {/* Étapes */}
          <div className="flex-1 w-full space-y-3">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <button key={step.id} onClick={() => setActive(i)} className="w-full text-left group">
                  <div
                    className="relative rounded-2xl px-6 py-5 transition-all duration-400 border"
                    style={{
                      background: isActive
                        ? 'rgba(255,255,255,0.22)'
                        : 'rgba(255,255,255,0.08)',
                      borderColor: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
                      boxShadow: isActive ? '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)' : 'none',
                    }}
                  >
                    {/* Barre de progression */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-[2px] rounded-b-2xl overflow-hidden w-full">
                        <div
                          className="h-full rounded-full"
                          style={{ background: step.accent, animation: `progressBar ${STEP_DURATION_MS}ms linear forwards` }}
                        />
                      </div>
                    )}

                    {/* Accent gauche */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full"
                        style={{ background: step.accent }}
                      />
                    )}

                    <div className="flex items-start gap-5">
                      {/* Numéro */}
                      <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                        <span
                          className="text-2xl font-black leading-none transition-all duration-300"
                          style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.45)' }}
                        >
                          {step.id}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <p
                            className="font-bold text-base sm:text-lg transition-all duration-300"
                            style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.6)' }}
                          >
                            {step.title}
                          </p>
                          {isActive && (
                            <span
                              className="flex-shrink-0 p-1 rounded-lg"
                              style={{ background: step.accent + '20', color: step.accent }}
                            >
                              {step.icon}
                            </span>
                          )}
                        </div>
                        <p
                          className="text-sm leading-relaxed transition-all duration-500 overflow-hidden"
                          style={{
                            color: isActive ? 'white' : 'transparent',
                            maxHeight: isActive ? '80px' : '0',
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="pt-4">
              <button
                onClick={() => setIsRegistrationModalOpen(true)}
                className="font-semibold px-8 py-3.5 rounded-xl text-sm transition-all hover:opacity-90 text-white"
                style={{ background: currentAccent, boxShadow: `0 8px 24px ${currentAccent}50` }}
              >
                Découvrir l'app →
              </button>
            </div>
          </div>

          {/* Téléphone */}
          <div className="flex-shrink-0 relative" style={{ width: '260px' }}>

            {/* Halo glow */}
            <div className="absolute pointer-events-none" style={{
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '320px', height: '320px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${currentAccent}30 0%, transparent 70%)`,
              filter: 'blur(24px)',
              transition: 'background 0.7s ease',
            }} />

            {/* Mockup CSS */}
            <div className="relative mx-auto" style={{
              width: '240px', height: '498px',
              background: 'linear-gradient(160deg, #1e1e20 0%, #0d0d0d 100%)',
              borderRadius: '44px',
              border: '1.5px solid rgba(255,255,255,0.16)',
              boxShadow: `0 0 0 1px rgba(0,0,0,0.9), 0 50px 80px rgba(0,0,0,0.65), 0 0 40px ${currentAccent}20, inset 0 1px 0 rgba(255,255,255,0.1)`,
              overflow: 'hidden',
              transition: 'box-shadow 0.7s ease',
              animation: 'fonc-float 5s ease-in-out infinite',
            }}>
              {/* Écran */}
              <div style={{ position: 'absolute', inset: '11px', borderRadius: '34px', overflow: 'hidden', background: '#000' }}>
                {steps.map((step, i) => (
                  <img
                    key={step.id}
                    src={step.screen}
                    alt={step.title}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%', objectFit: 'cover',
                      opacity: i === active ? 1 : 0,
                      transition: 'opacity 0.7s ease',
                    }}
                  />
                ))}
              </div>
              {/* Dynamic island */}
              <div style={{ position: 'absolute', top: '18px', left: '50%', transform: 'translateX(-50%)', width: '84px', height: '25px', background: '#000', borderRadius: '16px', zIndex: 10 }} />
              {/* Barre home */}
              <div style={{ position: 'absolute', bottom: '17px', left: '50%', transform: 'translateX(-50%)', width: '96px', height: '4px', background: 'rgba(255,255,255,0.28)', borderRadius: '4px', zIndex: 10 }} />
              {/* Bouton power */}
              <div style={{ position: 'absolute', right: '-3px', top: '115px', width: '3px', height: '60px', background: 'rgba(255,255,255,0.17)', borderRadius: '2px' }} />
              {/* Boutons volume */}
              <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '40px', background: 'rgba(255,255,255,0.14)', borderRadius: '2px' }} />
              <div style={{ position: 'absolute', left: '-3px', top: '150px', width: '3px', height: '40px', background: 'rgba(255,255,255,0.14)', borderRadius: '2px' }} />
              {/* Reflet */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)', borderRadius: '44px', pointerEvents: 'none', zIndex: 20 }} />
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? '24px' : '6px',
                    height: '6px',
                    background: i === active ? '#3B7FFF' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>
          </div>

        </div>

        {/* ── Détails bas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {details.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: 'rgba(255,255,255,0.2)' }}>{d.icon}</div>
              <p className="text-white font-semibold text-sm mb-2">{d.title}</p>
              {d.desc && <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>{d.desc}</p>}
              {d.tags && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
                    >
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
        @keyframes progressBar {
          from { width: 0% }
          to   { width: 100% }
        }
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
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes fonc-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .orb-1 {
          width: 500px; height: 500px;
          top: -150px; right: -100px;
          background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%);
          animation: float-1 12s ease-in-out infinite;
        }
        .orb-2 {
          width: 400px; height: 400px;
          bottom: -100px; left: -80px;
          background: radial-gradient(circle, rgba(20,53,184,0.5) 0%, transparent 70%);
          animation: float-2 15s ease-in-out infinite;
        }
        .orb-3 {
          width: 300px; height: 300px;
          top: 40%; left: 40%;
          background: radial-gradient(circle, rgba(110,198,245,0.2) 0%, transparent 70%);
          animation: float-3 10s ease-in-out infinite;
        }
        .ring-spin {
          animation: ring-spin 20s linear infinite;
        }
        .ring-spin-reverse {
          animation: ring-spin-reverse 30s linear infinite;
        }
      `}</style>

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </section>
  );
};

export default Fonctionnement;
