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
            <div className="text-center h-full flex flex-col justify-center">
              <div className="mx-auto mb-6 flex items-center justify-center">
                <img src="/Frame36.png" alt="Fiable & rassurant" className="w-20 h-20" />
              </div>
              <h3 className="text-[32px] font-light text-gray-700 mb-3">
                Fiable & rassurant
              </h3>
              <p className="text-purple-600 text-[20px] font-light mb-4">
                Vos alertes sont sécurisées
              </p>
              <p className="text-gray-600 text-[16px] font-light leading-relaxed">
                Système de notifications cryptées et données personnelles protégées selon les standards européens.
              </p>
            </div>
          </div>

          {/* Second Card - Simple & rapide */}
          <div className="rounded-2xl p-10 shadow-lg h-full w-full transition-transform duration-300 hover:scale-105" style={{backgroundColor: '#E9F9F5'}}>
            <div className="text-center h-full flex flex-col justify-center">
              <div className="mx-auto mb-6 flex items-center justify-center">
                <img src="/Frame37.png" alt="Simple & rapide" className="w-20 h-20" />
              </div>
              <h3 className="text-[32px] font-light text-gray-700 mb-3">
                Simple & rapide
              </h3>
              <p className="text-green-600 text-[20px] font-light mb-4">
                Pas besoin d'échanger vos numéros
              </p>
              <p className="text-gray-600 text-[16px] font-light leading-relaxed">
                Interface intuitive, alerte envoyée en 3 clics maximum. Aucune donnée personnelle partagée.
              </p>
            </div>
          </div>

          {/* Third Card - Solidaire & bienveillant */}
          <div className="rounded-2xl p-10 shadow-lg h-full w-full transition-transform duration-300 hover:scale-105" style={{backgroundColor: '#FFF4ED'}}>
            <div className="text-center h-full flex flex-col justify-center">
              <div className="mx-auto mb-6 flex items-center justify-center">
                <img src="/Frame38.png" alt="Solidaire & bienveillant" className="w-20 h-20" />
              </div>
              <h3 className="text-[32px] font-light text-gray-700 mb-3">
                Solidaire & bienveillant
              </h3>
              <p className="text-orange-600 text-[20px] font-light mb-4">
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