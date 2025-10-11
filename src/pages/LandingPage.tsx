import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { RegistrationModal } from '../components/modals';
import QRCodeSection from '../components/features/QRCodeSection';
import Fonctionnement from '../components/features/Fonctionnement';
import Amis from '../components/features/amis';
import Securite from '../components/features/securité';
import Price from '../components/features/price';
import FAQ from '../components/features/FAQ';
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
      
      {/* Hero Section - Image responsive */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen pt-20 sm:pt-24 overflow-hidden">
        {/* Background image (better responsive control) */}
        <img
          src="/photo1.png"
          alt="Notifcar hero"
          className="absolute inset-0 w-full h-full object-cover object-[65%_center] sm:object-center"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[70vh] sm:min-h-[80vh] md:min-h-screen">
          <div className="w-full">
            {/* Text content positioned on the left side */}
            <div className="max-w-2xl">
              {/* Main title */}
              <h1 className="font-Poppins font-semibold text-white text-[32px] leading-[40px] sm:text-[40px] sm:leading-[52px] lg:text-[60px] lg:leading-[76px] mb-6 sm:mb-8">
                L'app qui veille sur votre voiture, même quand vous n'êtes pas là.
            </h1>

              {/* Subtitle */}
              <p className="text-white/90 font-semibold text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px] mb-6 sm:mb-8">
                Avec Notifcar, soyez alerté instantanément si votre véhicule gêne, est accidenté ou en danger.
              </p>
              
              {/* CTA Button */}
              <button 
                onClick={() => setIsRegistrationModalOpen(true)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200"
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

      {/* FAQ Section */}
      <FAQ />

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