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
    bg: 'rgba(59,127,255,0.07)',
    border: 'rgba(59,127,255,0.15)',
  },
  {
    title: 'Flottes pros',
    subtitle: 'Dashboard centralisé par véhicule',
    points: [
      'Alertes par conducteur assigné',
      'Rapports d\'incidents automatisés',
      'Réduction des coûts de sinistres',
    ],
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.07)',
    border: 'rgba(99,102,241,0.15)',
  },
  {
    title: 'Garages & concessionnaires',
    subtitle: 'Protection du parc exposition',
    points: [
      'Service différenciant pour vos clients',
      'Gestion des incidents en temps réel',
      'Intégration simple à votre CRM',
    ],
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.07)',
    border: 'rgba(14,165,233,0.15)',
  },
  {
    title: 'Assureurs',
    subtitle: 'Preuves certifiées pour vos dossiers',
    points: [
      'Réduction de la fraude aux sinistres',
      'Traitement accéléré des déclarations',
      'API partenaire disponible',
    ],
    color: '#26C29E',
    bg: 'rgba(38,194,158,0.07)',
    border: 'rgba(38,194,158,0.15)',
  },
];

const Profils: React.FC<ProfilsProps> = ({ onNavigate }) => {
  const [active, setActive] = useState(2);
  const current = profils[active];

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
            Que vous soyez particulier, professionnel ou institutionnel, Notifcar s'adapte à vos besoins.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Onglets gauche */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="flex flex-row lg:flex-col gap-3">
            {profils.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActive(i)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 border w-full"
                style={{
                  background: active === i ? p.bg : 'transparent',
                  borderColor: active === i ? p.border : 'transparent',
                  boxShadow: active === i ? '0 8px 24px rgba(14,165,233,0.08)' : 'none',
                }}
                aria-pressed={active === i}
              >
                <div
                  className="flex-shrink-0 w-2.5 h-2.5 rounded-full"
                  style={{ background: active === i ? p.color : '#d1d5db' }}
                />
                <span
                  className="font-semibold text-sm"
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
            className="flex-1 rounded-2xl p-8 sm:p-10 border transition-all duration-300"
            style={{ background: current.bg, borderColor: current.border }}
          >
            <div className="flex items-center gap-4 mb-7">
              <div
                className="w-11 h-11 rounded-xl flex-shrink-0 border"
                style={{ background: current.border, borderColor: current.border }}
              />
              <div>
                <h3
                  className="font-bold text-xl"
                  style={{ color: current.color }}
                >
                  {current.title}
                </h3>
                <p className="text-gray-500 text-sm mt-0.5">{current.subtitle}</p>
              </div>
            </div>

            <ul className="space-y-3.5 mb-8">
              {current.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: current.border, color: current.color }}
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3">
                      <path
                        d="M5.5 10.3l2.4 2.4 6.6-6.6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-base">{pt}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onNavigate?.('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-95 hover:translate-y-[-1px]"
              style={{ background: current.color }}
            >
              Nous contacter →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profils;
