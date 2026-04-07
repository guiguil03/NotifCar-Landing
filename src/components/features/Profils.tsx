import React, { useState } from 'react';
import { type Page } from '../../hooks/useNavigation';

interface ProfilsProps {
  onNavigate?: (page: Page) => void;
}

const profils = [
  {
    title: 'Particuliers',
    subtitle: 'Protection 24h/24 sans effort',
    points: [
      'Réagissez immédiatement à tout incident',
      'Simplifiez vos démarches assurance',
      'Dormez tranquille en stationnement',
    ],
    color: '#3B7FFF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Flottes pros',
    subtitle: 'Dashboard centralisé par véhicule',
    points: [
      'Alertes par conducteur assigné',
      'Rapports d\'incidents automatisés',
      'Réduction des coûts de sinistres',
    ],
    color: '#3B7FFF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Garages & concessionnaires',
    subtitle: 'Protection du parc exposition',
    points: [
      'Service différenciant pour vos clients',
      'Gestion des incidents en temps réel',
      'Intégration simple à votre CRM',
    ],
    color: '#3B7FFF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Assureurs',
    subtitle: 'Preuves certifiées pour vos dossiers',
    points: [
      'Réduction de la fraude aux sinistres',
      'Traitement accéléré des déclarations',
      'API partenaire disponible',
    ],
    color: '#3B7FFF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const Profils: React.FC<ProfilsProps> = ({ onNavigate }) => {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const current = profils[active];

  const handleSelect = (i: number) => {
    if (i === active) return;
    setActive(i);
    setAnimKey(k => k + 1);
  };

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">

        {/* En-tête */}
        <div className="max-w-xl mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(59,127,255,0.08)', color: '#3B7FFF' }}
          >
            Pour tous les profils
          </span>
          <h2
            className="font-extrabold text-gray-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}
          >
            Adapté à chaque profil
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Particulier, professionnel ou institutionnel — NotifCar s'adapte à votre réalité.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Tabs gauche */}
          <div className="w-full lg:w-56 flex-shrink-0">
            <div className="flex flex-row lg:flex-col gap-2">
              {profils.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => handleSelect(i)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-left w-full transition-all duration-200 border"
                  style={{
                    background: active === i ? `${p.color}08` : 'transparent',
                    borderColor: active === i ? `${p.color}22` : 'transparent',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: active === i ? `${p.color}12` : '#f3f4f6',
                      color: active === i ? p.color : '#9ca3af',
                    }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="font-semibold text-sm transition-colors duration-200"
                    style={{ color: active === i ? p.color : '#6b7280' }}
                  >
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenu droite */}
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

            {/* Barre colorée en haut */}
            <div className="h-1 w-full" style={{ background: current.color }} />

            <div className="p-8 sm:p-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${current.color}12`, color: current.color }}
                >
                  {current.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">{current.title}</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{current.subtitle}</p>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-3.5 mb-8">
                {current.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: `${current.color}12`, color: current.color }}
                    >
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
                style={{ background: current.color }}
              >
                Nous contacter →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profils;
