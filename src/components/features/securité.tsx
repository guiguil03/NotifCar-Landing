import React from 'react';

const Securite: React.FC = () => {
  return (
    <section id="security" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
       

        {/* Security Features Grid - responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          {/* div1 - Zero Data Exposed */}

          <div className="div1 text-center mb-8 md:mb-16 md:col-start-1 md:row-start-1 order-1">
          <h2 className="text-2xl md:text-5xl font-bold mb-7 mt-4 bg-gradient-to-t from-teal-500 via-indigo-600 to-indigo-700 bg-clip-text text-transparent">
            Sécurité et confiance garanties
          </h2>
          <p className="text-xl text-neutral-600 ">
            Une solution simple et efficace en trois étapes
          </p>
        </div>
          <div 
            className="div3 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-6 md:p-8 text-white shadow-lg md:col-start-1 md:row-start-2 order-3 md:order-none"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <div className="text-6xl font-bold mb-2">0</div>
              <p className="text-xl font-semibold">Données exposées</p>
            </div>
          </div>

          <div 
            className="div4 bg-green-600 rounded-2xl p-6 md:p-8 text-white shadow-lg order-3 md:order-none md:col-start-1 md:row-start-3"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Confidentialité totale</h3>
                <p className="text-green-200 text-lg mb-4">Communication sécurisée et anonyme</p>
                <p className="text-white/90 leading-relaxed">
                  Échangez avec d'autres conducteurs sans jamais exposer vos informations personnelles. Zéro risque de harcèlement ou de contact non désiré.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  
                </div>
              </div>
            </div>
          </div>

          {/* div3 - Protection against abuse */}
          <div 
            className="div2 relative overflow-hidden bg-blue-600 rounded-2xl p-6 md:p-12 text-white shadow-lg order-2 md:order-none md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-1"
          >
            <img
              src="/octicon_alert-16.png"
              alt="Icône alerte"
              className="pointer-events-none select-none absolute opacity-60 right-2 bottom-2 w-[160px] sm:w-[220px] md:right-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-[320px] lg:w-[380px]"
            />
            <div className="max-w-2xl mt-20 md:mt-40 lg:mt-52">
              <h3 className="text-2xl md:text-5xl font-bold mb-4 font-poppins">Protection contre les abus</h3>
              <p className="text-green-300 text-lg md:text-2xl mb-2">Système anti-spam intelligent</p>
              <p className="text-white/90 leading-relaxed">
                Notre technologie avancée empêche les utilisations malveillantes grâce à des 'cooldowns' intelligents
                et des limites personnalisées qui s'adaptent à votre usage.
              </p>
            </div>
          </div>

          {/* div4 - Legitimate alerts */}
          <div 
            className="div5 bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg order-4 md:order-none md:col-start-3 md:row-start-3"
          >
            <div className="text-center">
              <div className="w-16 h-16  mx-auto mb-6">
                <img src="/line-md_security(1).png" alt="Protection contre les abus" className="w-16 h-16 mb-6" />
              </div>
              <div className="text-5xl font-bold text-green-600 mb-2">92,3%</div>
              <p className="text-xl font-semibold text-gray-700">Alertes légitimes</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Securite;