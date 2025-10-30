import React from 'react';

const Securite: React.FC = () => {
  return (
    <section id="security" className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
       
        {/* Security Features Grid */}
        <div 
          className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: ' repeat(3, 1fr)',
            gridColumnGap: '16px',
            gridRowGap: '16px'
          }}
        >

          {/* div1 - Zero Data Exposed */}

          <div className="div1 text-center col-span-1 md:col-span-2 lg:col-span-1"
          style={{ gridArea: '1 / 1 / 2 / 2' }}
          >
          <h2 className="section-title relative bottom-6 pt-4 pb-4  bg-gradient-to-br from-[#5340E2] from-20% via-[#4FA65C] via-60% to-[#4EC633] to-100% bg-clip-text text-transparent leading-loose">
            Sécurité et confiance<br />garanties
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600">
            Une solution simple et efficace en trois étapes
          </p>
        </div>
          <div 
            className="div3 grid-area: 1 / 3 / 3 / 6 rounded-2xl p-6 md:p-8 text-white shadow-lg col-span-1 md:col-span-1 lg:col-span-1"
            style={{  gridArea: '2 / 1 / 2 / 2', background: 'linear-gradient(to right, #2633E1 0%, #26C29E 100%)' }}
          >
            <div className="flex flex-col items-center justify-center text-center h-full">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <ellipse cx="12" cy="12" rx="8" ry="5" stroke="currentColor" fill="none"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
              <div className="text-5xl md:text-7xl font-bold mb-3 md:mb-4">0</div>
              <p className="text-lg md:text-xl font-semibold">Données exposées</p>
            </div>
          </div>

          <div 
            className="div4 grid-area: 2 / 1 / 3 / 3 rounded-2xl p-6 md:p-8 text-white shadow-lg col-span-1 md:col-span-2 lg:col-span-3"
            style={{   gridArea: '3 / 1 / 4 / 4', backgroundColor: '#26C29E'   }}
          >
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4===============">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Confidentialité totale</h3>
                <p className="text-green-200 text-base md:text-lg lg:text-xl mb-4">Communication sécurisée et anonyme</p>
                <p className="text-white/90 leading-relaxed text-sm md:text-base lg:text-lg">
                  Échangez avec d'autres conducteurs sans jamais exposer vos informations personnelles. Zéro risque de harcèlement ou de contact non désiré.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
                  
                </div>
              </div>
            </div>
          </div>

          {/* div3 - Protection against abuse */}
          <div 
            className="div2 relative overflow-hidden bg-blue-600 rounded-2xl p-6 md:p-8 lg:p-12 text-white shadow-lg col-span-1 md:col-span-2 lg:col-span-2"
            style={{ gridArea: '1 / 2 / 3 / 6' }}
          >
            <img
              src="/octicon_alert-16.png"
              alt="Icône alerte"
              className="pointer-events-none select-none absolute right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 opacity-70 w-[120px] sm:w-[180px] md:w-[220px] lg:w-[320px] xl:w-[380px]"
            />
            <div className="max-w-2xl mt-[20px] sm:mt-[140px] md:mt-[160px] lg:mt-[180px] text-center md:text-left">
              <h3 className="text-xl mt-[240px] sm:mt-[220px] md:mt-[240px] lg:mt-[260px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 font-poppins">Protection contre les abus</h3>
              <p className="text-green-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-2">Système anti-spam intelligent</p>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg">
                Notre technologie avancée empêche les utilisations malveillantes grâce à des 'cooldowns' intelligents
                et des limites personnalisées qui s'adaptent à votre usage.
              </p>
            </div>
          </div>

          {/* div4 - Legitimate alerts */}
          <div 
            className="div5 bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg col-span-1 md:col-span-1 lg:col-span-1"
            style={{ gridArea: '3 / 4 / 4 / 6' }}
          >
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6">
                <img src="/line-md_security(1).png" alt="Protection contre les abus" className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-2">92,3%</div>
              <p className="text-lg md:text-xl font-semibold text-gray-700">Alertes légitimes</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Securite;