import React from 'react';

const Amis: React.FC = () => {
  return (
    <section id="friends" className="py-12 bg-[#F6F6F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gray-700">Un ami qui veille sur votre</span>{' '}
            <span className="text-green-500">voiture</span>
          </h2>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* First Card - Fiable & rassurant */}
          <div className="bg-purple-100 rounded-xl p-4 shadow-sm h-full w-full">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <img src="/Frame36.png" alt="Fiable & rassurant" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-1">
                Fiable & rassurant
              </h3>
              <p className="text-purple-600 text-sm font-semibold mb-2">
                Vos alertes sont sécurisées
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Système de notifications cryptées et données personnelles protégées selon les standards européens.
              </p>
            </div>
          </div>

          {/* Second Card - Simple & rapide */}
          <div className="bg-green-100 rounded-xl p-4 shadow-sm w-full">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <img src="/Frame37.png" alt="Simple & rapide" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-1">
                Simple & rapide
              </h3>
              <p className="text-green-600 text-sm font-semibold mb-2">
                Pas besoin d'échanger vos numéros
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Interface intuitive, alerte envoyée en 3 clics maximum. Aucune donnée personnelle partagée.
              </p>
            </div>
          </div>

          {/* Third Card - Moderne & utile */}
          <div className="bg-orange-100 rounded-xl p-4 shadow-sm w-full">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <img src="/Frame38.png" alt="Moderne & utile" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-1">
                Moderne & utile
              </h3>
              <p className="text-orange-600 text-sm font-semibold mb-2">
                Une solution concrète aux problèmes quotidiens
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Développé par des conducteurs pour des conducteurs. Résout les vrais problèmes du stationnement urbain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amis;