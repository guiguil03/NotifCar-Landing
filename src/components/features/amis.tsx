import React from 'react';

const pillars = [
  {
    tag: 'Sécurité',
    title: 'Fiable &\nrassurant',
    subtitle: 'Vos alertes sont sécurisées',
    description:
      'Notifications cryptées, données personnelles protégées selon les standards européens. Votre identité reste toujours privée.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #2633E1 0%, #6366f1 100%)',
    bgLight: '#EEF0FD',
    textAccent: '#2633E1',
    img: '/Frame36.png',
  },
  {
    tag: 'Simplicité',
    title: 'Simple &\nrapide',
    subtitle: "Pas besoin d'échanger vos numéros",
    description:
      "Interface intuitive, alerte envoyée en 3 clics. Zéro inscription nécessaire pour signaler, zéro donnée partagée.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #26C29E 100%)',
    bgLight: '#E8F8F5',
    textAccent: '#0d9488',
    img: '/Frame37.png',
  },
  {
    tag: 'Communauté',
    title: 'Solidaire &\nbienveillant',
    subtitle: "Une communauté qui s'entraide",
    description:
      'Chaque alerte est un geste simple qui évite des désagréments inutiles et renforce le respect entre conducteurs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
    bgLight: '#FEF3E8',
    textAccent: '#ea580c',
    img: '/Frame38.png',
  },
];

const Amis: React.FC = () => {
  return (
    <section id="pillars" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-[#26C29E]">
            Nos valeurs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Un ami qui veille sur{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #2633E1 0%, #26C29E 100%)' }}
            >
              votre voiture
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Notifcar repose sur trois piliers essentiels pour vous offrir une expérience de confiance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.tag}
              className="group relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ backgroundColor: p.bgLight }}
            >
              {/* Top gradient bar */}
              <div className="h-1.5 w-full" style={{ background: p.gradient }} />

              <div className="p-8 flex flex-col flex-1">
                {/* Tag pill */}
                <span
                  className="self-start text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
                  style={{ background: p.gradient, color: '#fff' }}
                >
                  {p.tag}
                </span>

                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg"
                  style={{ background: p.gradient }}
                >
                  {p.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 whitespace-pre-line leading-tight">
                  {p.title}
                </h3>

                {/* Subtitle */}
                <p className="font-medium text-sm mb-4" style={{ color: p.textAccent }}>
                  {p.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {p.description}
                </p>

                {/* Bottom image */}
                <div className="mt-8 flex justify-end">
                  <img
                    src={p.img}
                    alt={p.tag}
                    className="w-14 h-14 object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div
          className="mt-10 rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #14b8a6 100%)' }}
        >
          {[
            { value: '100%', label: 'Anonyme & sécurisé' },
            { value: '< 5 sec', label: 'Pour envoyer une alerte' },
            { value: '0', label: 'Donnée personnelle exposée' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Amis;
