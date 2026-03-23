import React from 'react';

const scenarios = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
        <path d="M12 22V12M3 7l9 5 9-5"/>
      </svg>
    ),
    tag: 'Quotidien',
    tagColor: '#6366f1',
    tagBg: 'rgba(99,102,241,0.10)',
    title: 'Véhicule gênant',
    description: "Une voiture bloque votre sortie, une livraison ou un accès. Vous êtes pressé, mais aucun moyen de joindre le propriétaire.",
    sans: "Attente, stress, retard. Vous dépendez du hasard.",
    avec: "Un scan suffit pour prévenir le conducteur. Il est alerté immédiatement et peut déplacer son véhicule.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    tag: 'Récurrent · Conflit',
    tagColor: '#8b5cf6',
    tagBg: 'rgba(139,92,246,0.10)',
    title: 'Place de parking en résidence',
    description: "Quelqu'un est garé sur votre place privée en rentrant chez vous. Impossible de vous stationner, personne à contacter.",
    sans: "Vous tournez, vous attendez, ou vous vous garez ailleurs. Tension avec le voisinage, aucun moyen d'agir rapidement.",
    avec: "Vous scannez, contactez immédiatement le propriétaire. Résolution en quelques minutes, sans conflit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="8" width="22" height="10" rx="2"/>
        <path d="M5 8V6a2 2 0 012-2h10a2 2 0 012 2v2"/>
        <circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
      </svg>
    ),
    tag: 'Professionnel',
    tagColor: '#0ea5e9',
    tagBg: 'rgba(14,165,233,0.10)',
    title: "Flotte d'entreprise",
    description: "Un véhicule de votre flotte revient avec un choc. Personne ne sait où ni quand c'est arrivé.",
    sans: "Litige interne, assurance difficile à mobiliser, coût absorbé par l'entreprise.",
    avec: 'Chaque incident est horodaté, géolocalisé et documenté automatiquement.',
  },
];

const losses = [
  { label: 'Franchise assurance', value: '-300 €', pct: 60 },
  { label: 'Malus / perte de bonus', value: '-400 €', pct: 75 },
  { label: 'Réparation sans recours', value: '-500 €', pct: 88 },
  { label: 'Temps perdu en démarches', value: '~6h', pct: 50 },
];

const Scenarios: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-12 pb-24 sm:pb-32">

        {/* ── En-tête ── */}
        <div className="max-w-xl mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(38,51,225,0.08)', color: '#3B7FFF' }}
          >
            Scénarios réels
          </span>
          <h2
            className="font-extrabold text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}
          >
            Ça arrive tous les jours.{' '}
            <span
              style={{ color: '#3B7FFF' }}
            >
              Notifcar change tout.
            </span>
          </h2>
        </div>

        {/* ── 3 cartes ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {scenarios.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl p-6 flex flex-col gap-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Tag + icône */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: s.tagBg, color: s.tagColor }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm leading-tight">{s.title}</p>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: s.tagColor }}
                  >
                    {s.tag}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>

              {/* Séparateur */}
              <div className="h-px bg-gray-100" />

              {/* Sans / Avec */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: 'rgba(239,68,68,0.10)', color: '#ef4444' }}
                  >✗</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1 text-red-400">Sans Notifcar</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.sans}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: 'rgba(38,194,158,0.12)', color: '#26C29E' }}
                  >✓</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#26C29E' }}>Avec Notifcar</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.avec}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Barres de pertes ── */}
        <div className="rounded-2xl border border-gray-100 shadow-sm px-8 py-10 sm:px-12 sm:py-12 bg-gray-50">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
            <h3
              className="font-bold text-gray-900"
              style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}
            >
              Ce que vous perdez sans Notifcar
            </h3>
            <p className="text-gray-400 text-sm">Par sinistre non résolu</p>
          </div>

          <div className="space-y-7">
            {losses.map((l) => (
              <div key={l.label}>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-gray-600 text-sm">{l.label}</span>
                  <span className="font-bold text-sm text-red-500">{l.value}</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-gray-200">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${l.pct}%`,
                      background: 'linear-gradient(90deg, #3B7FFF, #26C29E)',
                    }}
                  />
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
