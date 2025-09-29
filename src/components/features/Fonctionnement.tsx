import React, { useState, useEffect } from 'react';
import { RegistrationModal } from '../modals';

const Fonctionnement: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

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

  // Small helper to render the icon inside each step card
  const renderStepIcon = (id: number) => {
    if (id === 1) {
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700">
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
          <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="7" cy="7" r="1.2" fill="currentColor"/>
        </svg>
      );
    }
    if (id === 2) {
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700">
          <path d="M3 12l18-7-7 18-2.5-7.5L3 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M11.5 15.5L21 5" stroke="currentColor" strokeWidth="1.8"/>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700">
        <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="20" r="1.6" fill="currentColor"/>
      </svg>
    );
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FBF0E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 relative left-8">
            Comment ça marche ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 relative left-8">
            Une solution simple et efficace en trois étapes
          </p>
        </div>

        {/* Layout wrapper with blue background */}
        <div className="relative">
          {/* Blue background block - positioned behind content - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[80%] rounded-3xl" style={{backgroundColor: '#2633E1'}}></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10 py-12 px-4 sm:px-6 lg:px-8">
            {/* Left column: numbered rail + cards */}
            <div className="w-full space-y-5 md:space-y-6">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              // visual emphasis handled directly on elements; no container border
              return (
                <div key={step.id} className="relative flex items-stretch">
                  {/* Number bullet - positioned to overlap the card */}
                  <div className={`${isActive ? 'text-white ring-4 ring-white-200' : 'text-white'} absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-lg md:text-xl shrink-0 transition-all duration-300 shadow-lg`} style={{background: 'linear-gradient(135deg, #2633E1 0%, #26C29E 100%)'}}>
                    {step.id}
                  </div>
                  {/* Step card */}
                  <div className={`flex-1 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 transition-all duration-500 transform hover:scale-105 ml-4 ${isActive ? 'border-blue-200 shadow-blue-200/50' : 'border-gray-200 shadow-gray-200/50'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? 'bg-blue-100' : 'bg-gray-100'}`}>
                        {renderStepIcon(step.id)}
                      </div>
                      <div className="flex-1">
                        <h3 className={`${isActive ? 'text-gray-900' : 'text-gray-700'} font-poppins text-lg sm:text-xl font-bold mb-2 transition-colors duration-300`}>
                          {step.title}
                        </h3>
                        <p className={`${isActive ? 'text-gray-600' : 'text-gray-500'} text-sm sm:text-base transition-colors duration-300 leading-relaxed`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Right side - Phone centered over blue block */}
          <div className="w-full flex justify-center lg:justify-center relative z-10">
            <div className="relative">
              {/* Real Phone Image */}
              <div className="relative w-72 md:w-80 h-[520px] md:h-[600px]">
                <img 
                  src="/tel.png" 
                  alt="Téléphone NotifCar" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                
                {/* Screen Content Overlay */}
                <div className="absolute h-[498px] md:h-[574px] w-[230px] md:w-[260px] top-[10px] md:top-[14px] left-[24px] md:left-[30px] right-[40px] bottom-[100px] overflow-hidden rounded-[26px] md:rounded-[30px]">
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
             
          </div>
        </div>
        {/* Global CTA centered below */}
        <div className="mt-8 flex justify-center relative right-28 z-10">
          <button 
            onClick={() => setIsRegistrationModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-colors duration-200 shadow-lg"
          >
            Découvrir l'app
          </button>
        </div>
        {/* close grid */}
          </div>
        </div>
      </div>
      
      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </section>
  );
};

export default Fonctionnement;

