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
  },
];

const details = [
  {
    emoji: '🔍',
    title: 'Scan du QR code',
    desc: 'Un passant scanne depuis son appareil photo natif — aucune app requise.',
  },
  {
    emoji: '📨',
    title: 'Motif du signalement',
    tags: ['Choc / accrochage', 'Rayure', 'Stationnement gênant', 'Autre'],
  },
  {
    emoji: '🔔',
    title: 'Notification envoyée !',
    desc: 'Propriétaire alerté en < 3 secondes',
  },
];

const Fonctionnement: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % steps.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #1A55E8 0%, #3B7FFF 50%, #4E8FFF 100%)' }}
    >
      {/* Cercles déco fond */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #26C29E 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">

        {/* ── En-tête ── */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}>
            Simple &amp; rapide
          </span>
          <h2
            className="font-extrabold text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            Comment ça marche ?
          </h2>
          <p className="text-white/60 text-lg max-w-md mx-auto">
            Trois étapes. Quelques secondes. Zéro tracas.
          </p>
        </div>

        {/* ── Layout principal ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">

          {/* Étapes */}
          <div className="flex-1 w-full space-y-3">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <button key={step.id} onClick={() => setActive(i)} className="w-full text-left">
                  <div
                    className="relative rounded-2xl px-5 py-5 transition-all duration-300 border"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)',
                      borderColor: isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.10)',
                    }}
                  >
                    {isActive && (
                      <div className="absolute bottom-0 left-0 h-[2px] rounded-b-2xl overflow-hidden w-full">
                        <div className="h-full rounded-full bg-white"
                          style={{ animation: 'progressBar 3.5s linear forwards' }} />
                      </div>
                    )}
                    <div className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 text-3xl font-black w-12 leading-none pt-0.5"
                        style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.25)' }}
                      >
                        {step.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`font-bold text-base sm:text-lg mb-1.5 transition-all duration-300 ${isActive ? 'text-white' : 'text-white/45'}`}>
                          {step.title}
                        </p>
                        <p className={`text-sm leading-relaxed transition-all duration-500 ${isActive ? 'text-white/85 max-h-20' : 'text-white/0 max-h-0 overflow-hidden sm:max-h-10 sm:text-white/30'}`}>
                          {step.description}
                        </p>
                      </div>
                      <span className={`flex-shrink-0 transition-all duration-300 mt-1 ${isActive ? 'text-white opacity-100' : 'opacity-0'}`}>
                        {step.icon}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}

            <div className="pt-3">
              <button
                onClick={() => setIsRegistrationModalOpen(true)}
                className="font-semibold px-8 py-3.5 rounded-xl text-sm transition-all hover:opacity-90 bg-white"
                style={{ color: '#3B7FFF' }}
              >
                Découvrir l'app →
              </button>
            </div>
          </div>

          {/* Téléphone */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 blur-3xl opacity-25 rounded-full scale-75"
              style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
            <div className="relative w-52 sm:w-60 h-[390px] sm:h-[450px]">
              <img src="/tel.png" alt="App NotifCar" className="w-full h-full object-contain drop-shadow-2xl relative z-10" />
              <div className="absolute z-20 overflow-hidden rounded-[22px] sm:rounded-[26px]"
                style={{ top: '1.8%', left: '9%', width: '82%', height: '96.5%' }}>
                {steps.map((step, i) => (
                  <img
                    key={step.id}
                    src={step.screen}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: i === active ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? '28px' : '8px',
                    height: '8px',
                    background: i === active ? 'white' : 'rgba(255,255,255,0.3)',
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
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <span className="text-2xl mb-3 block">{d.emoji}</span>
              <p className="text-white font-semibold text-sm mb-2">{d.title}</p>
              {d.desc && <p className="text-white/55 text-sm leading-relaxed">{d.desc}</p>}
              {d.tags && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}
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
      `}</style>

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </section>
  );
};

export default Fonctionnement;
