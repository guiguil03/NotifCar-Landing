import React from 'react';

const stats = [
  { value: '11M', label: 'accrochages par an en France' },
  { value: '73%', label: 'des responsables prennent la fuite' },
  { value: '1 200€', label: "coût moyen sans responsable identifié" },
  { value: '0', label: 'preuve disponible dans la plupart des cas' },
];

const QRCodeSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Bande colorée haute pour raccrocher le hero */}
      <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #3B7FFF, #1B6FA8, #26C29E)' }} />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-10 sm:pb-12">

        {/* ── En-tête ── */}
        <div className="max-w-2xl mb-20">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(38,51,225,0.08)', color: '#3B7FFF' }}
          >
            Pourquoi Notifcar
          </span>
          <h2
            className="font-extrabold text-gray-900 leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
          >
            Un choc sur votre voiture.{' '}
            <span
              style={{ color: '#3B7FFF' }}
            >
              Vous n'étiez pas là.
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            En France, des millions de conducteurs découvrent chaque jour des dégâts sur leur véhicule —
            sans témoin, sans coupable, sans recours.
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden mb-16 shadow-sm">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className="bg-white px-6 py-8 flex flex-col gap-2"
              style={{ borderRadius: i === 0 ? '1rem 0 0 1rem' : i === stats.length - 1 ? '0 1rem 1rem 0' : undefined }}
            >
              <span
                className="text-4xl sm:text-5xl font-black tracking-tight"
                style={{ color: '#3B7FFF' }}
              >
                {stat.value}
              </span>
              <span className="text-gray-500 text-sm leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── Bloc citation ── */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* fond dégradé subtil */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #F0F3FF 0%, #EBF9F5 100%)' }}
          />
          {/* barre gauche accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: 'linear-gradient(to bottom, #3B7FFF, #26C29E)' }} />

          <div className="relative px-10 py-10 sm:px-14 sm:py-12">
            {/* guillemets déco */}
            <svg
              className="absolute top-6 right-8 opacity-10"
              width="80" height="60" viewBox="0 0 80 60" fill="#3B7FFF"
            >
              <path d="M0 60V36C0 16.1 13.4 4.3 40.2 0L44 7.2C29.4 10.7 21.6 18 20.4 29H36V60H0Zm44 0V36C44 16.1 57.4 4.3 84.2 0L88 7.2C73.4 10.7 65.6 18 64.4 29H80V60H44Z"/>
            </svg>

            <p className="text-gray-800 text-lg sm:text-xl leading-relaxed font-medium mb-4 max-w-3xl">
              Vous garez votre voiture le matin. Le soir, vous trouvez un{' '}
              <span className="font-bold" style={{ color: '#3B7FFF' }}>pare-choc enfoncé</span>{' '}
              et un mot qui dit... rien. Sans preuve, votre assurance paie,{' '}
              <span className="font-bold" style={{ color: '#26C29E' }}>votre bonus trinque.</span>
            </p>
            <p className="text-gray-400 text-sm">
              Le scénario vécu par des millions de Français chaque année — que Notifcar peut changer.
            </p>
          </div>
        </div>

      </div>


    </section>
  );
};

export default QRCodeSection;
