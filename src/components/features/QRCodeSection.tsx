import React from 'react';

const QRCodeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Frame10.png Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">
              <img 
                src="/Frame10.png" 
                alt="QR Code et notifications NotifCar" 
                className="w-[2000px] h-[400px] rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Text and Statistics */}
          <div className="space-y-8">
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-indigo-700">Parce qu'un imprévu</span>
              <br />
              <span className="text-teal-500">peut arriver à tout moment...</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed">
              Une rayure, un accident, un stationnement gênant : grâce à Notifcar, 
              les conducteurs peuvent se prévenir entre eux en quelques secondes.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
                <p className="text-gray-700 font-medium">Anonyme et sécurisé</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">&lt; 5 sec</div>
                <p className="text-gray-700 font-medium">Pour envoyer une alerte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
