import React from 'react';

const Amis: React.FC = () => {
  return (
    <section id="pillars" className="py-12 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            <span className="bg-gradient-to-br from-[#5340E2] from-20% via-[#4FA65C] via-60% to-[#4EC633] to-100% bg-clip-text text-transparent">Un ami qui veille sur votre voiture</span>
          </h2>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* First Card - Fiable & rassurant */}
          <div className="rounded-2xl p-10 shadow-lg h-full w-full transition-transform duration-300 hover:scale-105" style={{backgroundColor: '#E9EBFC'}}>
            <div className="text-center h-full flex flex-col">
              {/* Zone icône fixée pour même hauteur et rendu net */}
              <div className="mx-auto mb-6 flex items-center justify-center h-20">
                <img src="/Frame36.png" alt="Fiable & rassurant" className="w-16 h-16 object-contain" style={{ imageRendering: 'auto' }} loading="eager" />
              </div>
              {/* Zone titre fixée pour alignement */}
              <h3 className="text-[32px] font-light text-gray-700 mb-3 min-h-[48px] flex items-end justify-center">
                Fiable & rassurant
              </h3>
              {/* Zone sous-titre fixée pour alignement */}
              <p className="text-purple-600 text-[20px] font-light mb-4 min-h-[56px] flex items-center justify-center text-center">
                Vos alertes sont sécurisées
              </p>
              <p className="text-gray-600 text-[16px] font-light leading-relaxed">
                Système de notifications cryptées et données personnelles protégées selon les standards européens.
              </p>
            </div>
          </div>

          {/* Second Card - Simple & rapide */}
          <div className="rounded-2xl p-10 shadow-lg h-full w-full transition-transform duration-300 hover:scale-105" style={{backgroundColor: '#E9F9F5'}}>
            <div className="text-center h-full flex flex-col">
              <div className="mx-auto mb-6 flex items-center justify-center h-20">
                <img src="/Frame37.png" alt="Simple & rapide" className="w-16 h-16 object-contain" style={{ imageRendering: 'auto' }} loading="eager" />
              </div>
              <h3 className="text-[32px] font-light text-gray-700 mb-3 min-h-[48px] flex items-end justify-center">
                Simple & rapide
              </h3>
              <p className="text-green-600 text-[20px] font-light mb-4 min-h-[56px] flex items-center justify-center text-center">
                Pas besoin d'échanger vos numéros
              </p>
              <p className="text-gray-600 text-[16px] font-light leading-relaxed">
                Interface intuitive, alerte envoyée en 3 clics maximum. Aucune donnée personnelle partagée.
              </p>
            </div>
          </div>

          {/* Third Card - Solidaire & bienveillant */}
          <div className="rounded-2xl p-10 shadow-lg h-full w-full transition-transform duration-300 hover:scale-105" style={{backgroundColor: '#FFF4ED'}}>
            <div className="text-center h-full flex flex-col">
              <div className="mx-auto mb-6 flex items-center justify-center h-20">
                <img src="/Frame38.png" alt="Solidaire & bienveillant" className="w-16 h-16 object-contain" style={{ imageRendering: 'auto' }} loading="eager" />
              </div>
              <h3 className="text-[32px] font-light text-gray-700 mb-3 min-h-[48px] flex items-end justify-center whitespace-normal md:whitespace-nowrap">
                Solidaire & bienveillant
              </h3>
              <p className="text-orange-600 text-[20px] font-light mb-4 min-h-[56px] flex items-center justify-center text-center">
                Une communauté qui s'entraident au quotidien
              </p>
              <p className="text-gray-600 text-[16px] font-light leading-relaxed">
                Chaque alerte est un geste simple qui évite des désagréments et favorise plus de respect sur la route.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amis;