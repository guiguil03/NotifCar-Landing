import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { RegistrationModal } from '../components/modals';
import QRCodeSection from '../components/features/QRCodeSection';
import Scenarios from '../components/features/Scenarios';
import Fonctionnement from '../components/features/Fonctionnement';

import Footer from '../components/layout/Footer';
import CookieBanner from '../components/ui/CookieBanner';
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

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen overflow-hidden flex items-center"
        style={{ background: 'linear-gradient(135deg, #0B1340 0%, #1A2FA8 55%, #1B6FA8 100%)' }}
      >
        {/* Glow haut-gauche */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #4F7FFF 0%, transparent 65%)' }}
        />
        {/* Glow bas-droite */}
        <div
          className="pointer-events-none absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #26C29E 0%, transparent 65%)' }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

          {/* ── LEFT: text ── */}
          <div className="flex-1 lg:pr-8 text-left">

            {/* Big title */}
            <h1
              className="font-bold text-white leading-none mb-6"
              style={{ fontSize: 'clamp(44px, 6.5vw, 82px)', lineHeight: 1.05 }}
            >
              Votre voiture<br />
              protégée,<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #BFCEFF 0%, #26C29E 100%)' }}
              >
                en temps réel.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Rayure, accident, stationnement gênant —<br />
              Notifcar vous alerte instantanément,<br />de manière anonyme et sécurisée.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsRegistrationModalOpen(true)}
                className="bg-white text-[#1A2FA8] font-bold px-7 py-3.5 rounded-xl text-base hover:bg-blue-50 transition-colors shadow-xl"
              >
                Télécharger gratuitement →
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/60 hover:text-white font-medium text-base transition-colors"
              >
                Voir comment ça marche
              </button>
            </div>
          </div>

          {/* ── RIGHT: deux téléphones style Unify ── */}
          <div
            className="flex-shrink-0 relative hidden lg:flex items-end"
            style={{ width: '420px', height: '530px' }}
          >

            {/* Téléphone gauche — avant-plan, droit */}
            <div
              className="absolute"
              style={{ left: '0px', bottom: '0px', zIndex: 2, filter: 'drop-shadow(0 24px 60px rgba(38,51,225,0.5))' }}
            >
              {/* Conteneur calé sur les dimensions naturelles de tel.png */}
              <div className="relative" style={{ display: 'inline-block', lineHeight: 0 }}>
                <img src="/tel.png" alt="App NotifCar" style={{ height: '490px', width: 'auto', display: 'block' }} />
                {/* Écran: inset calculé sur les proportions réelles de tel.png */}
                <div
                  className="absolute overflow-hidden"
                  style={{ top: '1.5%', left: '4.2%', right: '4.2%', bottom: '1.5%', borderRadius: '11%' }}
                >
                  <img src="/screen1.jpg" alt="Écran principal" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Téléphone droit — arrière-plan, légèrement incliné */}
            <div
              className="absolute"
              style={{ right: '0px', bottom: '30px', zIndex: 1, transform: 'rotate(5deg)' }}
            >
              <div className="relative" style={{ display: 'inline-block', lineHeight: 0 }}>
                <img src="/tel.png" alt="" style={{ height: '450px', width: 'auto', display: 'block' }} />
                <div
                  className="absolute overflow-hidden"
                  style={{ top: '1.5%', left: '4.2%', right: '4.2%', bottom: '1.5%', borderRadius: '11%' }}
                >
                  <img src="/screen3.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* QR Code Section */}
      <QRCodeSection />

      {/* Scenarios Section */}
      <Scenarios />

      {/* Fonctionnement Section */}
      <Fonctionnement />  
    {/* {
          {/* Sécurité Section */}
         {/* <Securite /> */}

          {/* Amis Section */}
          {/* <Amis /> */}

          {/* Pricing Section */}
          {/* <Price /> */}

          {/* FAQ Section */}
          {/* <FAQ />  */}

      {/* Footer Section */}
      <Footer />

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </div>
  );
};

export default LandingPage;
