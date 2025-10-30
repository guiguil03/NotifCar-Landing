import React from 'react';

const QRCodeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Frame10.svg Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-xl">
              <img 
                src="/Frame10.svg" 
                alt="QR Code et notifications NotifCar" 
                className="w-[1500px] h-auto max-h-[600px] sm:max-h-[500px] object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Right side - Text and Statistics */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Main Title with gradient like screenshot (left-to-right blue→green) */}
            <h2 className="section-title font-Poppins leading-tight tracking-tight bg-gradient-to-br from-[#5340E2] from-20% via-[#4FA65C] via-60% to-[#4EC633] to-100% bg-clip-text text-transparent">
              Parce qu'un imprévu
              <br />
              peut arriver à tout
              <br />
              moment...
            </h2>

            {/* Description */}
            <p className="subtitle text-gray-700 font-light">
              Une rayure, un accident, un stationnement gênant : grâce à Notifcar, 
              les conducteurs peuvent se prévenir entre eux en quelques secondes.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-2">100%</div>
                <p className="text-gray-700 font-medium text-sm sm:text-base">Anonyme et sécurisé</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-2">&lt; 5 sec</div>
                <p className="text-gray-700 font-medium text-sm sm:text-base">Pour envoyer une alerte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
