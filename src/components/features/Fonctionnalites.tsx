import React from 'react';

const features = [
  {
    emoji: '🔔',
    title: 'Alertes temps réel',
    desc: "Notification push en moins de 3 secondes dès qu'un signalement est effectué, où que vous soyez dans le monde.",
  },
  {
    emoji: '🕵️',
    title: 'Anonymat total',
    desc: 'Les passants signalent sans créer de compte. Aucune donnée personnelle collectée côté signalant — couverture maximale.',
  },
  {
    emoji: '📍',
    title: 'Géolocalisation précise',
    desc: "Adresse exacte et coordonnées GPS du signalement, conservées dans votre historique d'incidents.",
  },
  {
    emoji: '📋',
    title: 'Rapport automatique',
    desc: 'Chaque incident génère un rapport complet horodaté prêt à envoyer à votre assureur en un seul clic.',
  },
  {
    emoji: '📊',
    title: 'Historique complet',
    desc: 'Consultez tous vos incidents passés, avec timeline détaillée et export PDF disponible à tout moment.',
  },
  {
    emoji: '🔒',
    title: 'Données sécurisées',
    desc: 'Hébergement en France, chiffrement bout-en-bout. Vos données ne sont jamais revendues ni partagées.',
  },
];

const Fonctionnalites: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">

        {/* En-tête */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(59,127,255,0.08)', color: '#3B7FFF' }}
          >
            Fonctionnalités
          </span>
          <h2
            className="font-extrabold text-gray-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}
          >
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-gray-500 text-lg">
            Conçu pour être simple à l'usage, puissant en cas d'incident.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-4 block">{f.emoji}</span>
              <h3 className="font-bold text-gray-900 text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Fonctionnalites;
