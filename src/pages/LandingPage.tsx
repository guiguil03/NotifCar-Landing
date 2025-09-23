import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { RegistrationModal } from '../components/modals';
import QRCodeSection from '../components/features/QRCodeSection';
import Fonctionnement from '../components/features/Fonctionnement';
import Amis from '../components/features/amis';
import Securite from '../components/features/securité';
import Price from '../components/features/price';
import Footer from '../components/layout/Footer';
import { type Page } from '../hooks/useNavigation';

interface LandingPageProps {
  onNavigate?: (page: Page) => void;
  onScrollToSection?: (sectionId: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, onScrollToSection }) => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigate={onNavigate}
        onScrollToSection={onScrollToSection}
        onOpenRegistration={() => setIsRegistrationModalOpen(true)}
      />
      
      {/* Hero Section - Like the image */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/photo1.png)' }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="w-full">
            {/* Text content positioned on the left side */}
            <div className="max-w-2xl">
              {/* Main title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                L'app qui veille sur votre voiture, même quand vous n'êtes pas là.
            </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                Avec Notifcar, soyez alerté instantanément si votre véhicule gêne, est accidenté ou en danger.
              </p>
              
              {/* CTA Button */}
              <button 
                onClick={() => setIsRegistrationModalOpen(true)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Me prévenir au lancement
              </button>
            </div>
          </div>
                </div>
      </section>

      {/* QR Code Section */}
      <QRCodeSection />

      {/* Fonctionnement Section */}
      <Fonctionnement />

      {/* Sécurité Section */}
      <Securite />

      {/* Amis Section */}
      <Amis />

      {/* Pricing Section */}
      <Price />

     {/* Footer Section */}
      <Footer />
      
      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </div>
  );
};

export default LandingPage;