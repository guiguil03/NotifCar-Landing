import React from 'react';

const Fonctionnement: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Left side - How it works steps */}
          <div className="relative z-10 max-w-2xl space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-xl text-gray-600">
                Une solution simple et efficace en trois étapes
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
               {/* Step 1 */}
               <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-sm">
                 <div className="flex-shrink-0 relative">
                   <img src="/Subtract.png" alt="QR Code" className="w-12 h-12 relative bottom-10 right-8" />
                   
                 </div>
                 <div className="flex-1">
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Scannez le QR code</h3>
                   <p className="text-gray-600">
                     Trouvez le QR code Notifcar sur le véhicule et scannez-le avec votre smartphone.
                   </p>
                 </div>
               </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <img src="/Subtract(1).png" alt="QR Code" className="w-12 h-12 relative bottom-10 right-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Envoyez une alerte en un clic</h3>
                  </div>
                  <p className="text-gray-600">
                    Choisissez le type d'alerte et envoyez votre message en quelques secondes.
                  </p>
                </div>
              </div>

               {/* Step 3 */}
               <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-sm">
                 <div className="flex-shrink-0 relative">
                   <img src="/Subtract(2).png" alt="Notification" className="w-12 h-12 relative bottom-10 right-8" />
                   
                 </div>
                 <div className="flex-1">
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Recevez la notification instantanément</h3>
                   <p className="text-gray-600">
                     Le propriétaire reçoit immédiatement votre alerte sur son téléphone.
                   </p>
                 </div>
               </div>
            </div>
          {/* Large Blue Background - positioned absolutely */}
          <div className="absolute top-0 left-80 w-[600px] h-[600px] white rounded-3xl z-[-1]">
            <div className="absolute top-0 left-60 w-[600px] h-[600px] bg-blue-700 rounded-3xl z-[-1]">

            <div className="absolute top-16 right-20 z-20">
            <div className="w-[270px] h-[600px] relative bottom-24 right-14 bg-gray-900 rounded-3xl p-2 shadow-2xl">
              {/* Phone Screen */}
              <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-2 pb-1">
                  <span className="text-white text-sm font-medium">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-6 h-3 border border-white rounded-sm"></div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center h-full px-6 pb-20">
                  <div className="text-center mb-8">
                    <h3 className="text-white text-2xl font-bold mb-2">Mockup</h3>
                    <div className="text-4xl">✌️</div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full max-w-xs bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex justify-end mb-4">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-1 bg-white rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
            </div>

          </div>
          
          {/* Phone Mockup positioned on the blue background */}
         
          </div>


            {/* CTA Button */}
            <div className="pt-4 relative z-10">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                Découvrir l'app
              </button>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Fonctionnement;
