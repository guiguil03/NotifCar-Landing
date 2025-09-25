import React, { useState, useEffect } from 'react';

const Fonctionnement: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Scannez le QR code",
      description: "Trouvez le QR code Notifcar sur le véhicule et scannez-le avec votre smartphone.",
      color: "blue",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500",
      icon: "/1.png"
    },
    {
      id: 2,
      title: "Envoyez une alerte",
      description: "Choisissez le type d'alerte et envoyez votre message en quelques secondes.",
      color: "green",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500",
      icon: "/2.png"
    },
    {
      id: 3,
      title: "Recevez la notification",
      description: "Le propriétaire reçoit immédiatement votre alerte sur son téléphone.",
      color: "blue",
      bgColor: "bg-blue-600",
      borderColor: "border-blue-600",
      iconBg: "bg-blue-600",
      icon: "/3.png"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Une solution simple et efficace en trois étapes
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left side - Step indicators */}
          <div className="w-full lg:w-1/2 space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 transition-all duration-500 ${
                  index === currentStep 
                    ? `border-${step.color}-500 opacity-100 scale-105` 
                    : `border-gray-200 opacity-60`
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    index === currentStep 
                      ? 'ring-2 ring-blue-500 bg-blue-500 text-white' 
                      : 'ring-1 ring-gray-300 bg-gray-100 text-gray-600'
                  }`}>
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg sm:text-xl font-bold mb-1 transition-colors duration-300 ${
                      index === currentStep ? 'text-gray-900' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm sm:text-base transition-colors duration-300 ${
                      index === currentStep ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 w-full sm:w-auto">
                Découvrir l'app
              </button>
            </div>
          </div>

          {/* Right side - Real Phone with scrollable content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Real Phone Image */}
              <div className="relative w-80 h-[600px]">
                <img 
                  src="/tel.png" 
                  alt="Téléphone NotifCar" 
                  className="w-full h-full object-contain"
                />
                
                {/* Screen Content Overlay */}
                <div className="absolute h-[574px] w-[260px] top-[14px] left-[30px] right-[40px] bottom-[100px] overflow-hidden rounded-[30px]">
                  {/* Scrollable Content */}
                  <div className="relative h-full overflow-hidden">
                    <div 
                      className="absolute inset-0 transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentStep * (100 )}%)` }}
                    >
                      <div 
                        className="flex h-full"
                        style={{ width: `${steps.length * 100}%` }}
                      >
                        {steps.map((step) => (
                          <div 
                            key={step.id} 
                            className="h-full flex-shrink-0"
                            style={{ width: `${100 / steps.length}%` }}
                          >
                            <img 
                              src={step.icon} 
                              alt={`Étape ${step.id}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm">📱</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fonctionnement;

