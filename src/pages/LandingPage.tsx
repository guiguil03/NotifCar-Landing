import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { RegistrationModal } from '../components/modals';
import QRCodeSection from '../components/features/QRCodeSection';
import Scenarios from '../components/features/Scenarios';
import Fonctionnement from '../components/features/Fonctionnement';
import Fonctionnalites from '../components/features/Fonctionnalites';
import Profils from '../components/features/Profils';
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
        style={{ background: 'linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%)' }}
      >
        {/* Glow haut-gauche — reflet cyan */}
        <div
          className="pointer-events-none absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, #8DD8FF 0%, transparent 65%)' }}
        />
        {/* Glow bas-droite — reflet bleu profond */}
        <div
          className="pointer-events-none absolute -bottom-20 right-0 w-[450px] h-[450px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #1A40CC 0%, transparent 65%)' }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

          {/* ── LEFT: text ── */}
          <div className="flex-1 lg:pr-8 text-left">

            {/* Big title */}
            <h1
              className="font-bold text-white leading-none mb-6"
              style={{ fontSize: 'clamp(44px, 6.5vw, 82px)', lineHeight: 1.05 }}
            >
              NotifCar —<br />
              votre voiture<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #BFCEFF 0%, #26C29E 100%)' }}
              >
                protégée en temps réel.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Rayure, accident, stationnement gênant —<br />
              NotifCar vous alerte instantanément,<br />de manière anonyme et sécurisée.
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

          {/* ── RIGHT: mockups CSS ── */}
          <div
            className="flex-shrink-0 relative hidden lg:flex items-end justify-center"
            style={{ width: '520px', height: '560px' }}
          >
            <style>{`
              @keyframes phone-center-float {
                0%, 100% { transform: translateX(-50%) translateY(0px); }
                50% { transform: translateX(-50%) translateY(-10px); }
              }
              @keyframes phone-left-float {
                0%, 100% { transform: rotate(-10deg) translateY(0px); }
                50% { transform: rotate(-10deg) translateY(-7px); }
              }
              @keyframes phone-right-float {
                0%, 100% { transform: rotate(10deg) translateY(0px); }
                50% { transform: rotate(10deg) translateY(-7px); }
              }
            `}</style>

            {/* Halo glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(59,127,255,0.28) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }} />

            {/* ── Téléphone gauche (incliné à gauche) ── */}
            <div className="absolute" style={{
              left: '10px', bottom: '20px', zIndex: 1,
              animation: 'phone-left-float 5s ease-in-out infinite',
            }}>
              <div style={{
                width: '210px', height: '436px',
                background: 'linear-gradient(160deg, #1c1c1e 0%, #111 100%)',
                borderRadius: '40px',
                border: '1.5px solid rgba(255,255,255,0.13)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.8), 0 40px 70px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
                overflow: 'hidden',
                position: 'relative',
                opacity: 0.88,
              }}>
                <div style={{ position: 'absolute', inset: '10px', borderRadius: '32px', overflow: 'hidden', background: '#000' }}>
                  <img src="/screen2.jpg" alt="Interface NotifCar - réception d'alerte sur le véhicule" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', top: '17px', left: '50%', transform: 'translateX(-50%)', width: '76px', height: '22px', background: '#000', borderRadius: '14px', zIndex: 10 }} />
                <div style={{ position: 'absolute', right: '-3px', top: '105px', width: '3px', height: '54px', background: 'rgba(255,255,255,0.14)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '95px', width: '3px', height: '38px', background: 'rgba(255,255,255,0.11)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '143px', width: '3px', height: '38px', background: 'rgba(255,255,255,0.11)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)', borderRadius: '40px', pointerEvents: 'none', zIndex: 20 }} />
              </div>
            </div>

            {/* ── Téléphone droit (incliné à droite) ── */}
            <div className="absolute" style={{
              right: '10px', bottom: '20px', zIndex: 1,
              animation: 'phone-right-float 5s ease-in-out infinite',
            }}>
              <div style={{
                width: '210px', height: '436px',
                background: 'linear-gradient(160deg, #1c1c1e 0%, #111 100%)',
                borderRadius: '40px',
                border: '1.5px solid rgba(255,255,255,0.13)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.8), 0 40px 70px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
                overflow: 'hidden',
                position: 'relative',
                opacity: 0.88,
              }}>
                <div style={{ position: 'absolute', inset: '10px', borderRadius: '32px', overflow: 'hidden', background: '#000' }}>
                  <img src="/screen3.jpg" alt="Interface NotifCar - scan du QR code et envoi d'alerte anonyme" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', top: '17px', left: '50%', transform: 'translateX(-50%)', width: '76px', height: '22px', background: '#000', borderRadius: '14px', zIndex: 10 }} />
                <div style={{ position: 'absolute', right: '-3px', top: '105px', width: '3px', height: '54px', background: 'rgba(255,255,255,0.14)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '95px', width: '3px', height: '38px', background: 'rgba(255,255,255,0.11)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '143px', width: '3px', height: '38px', background: 'rgba(255,255,255,0.11)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)', borderRadius: '40px', pointerEvents: 'none', zIndex: 20 }} />
              </div>
            </div>

            {/* ── Téléphone central (droit, devant) ── */}
            <div className="absolute" style={{
              left: '50%', bottom: '0px',
              zIndex: 3,
              animation: 'phone-center-float 6s ease-in-out infinite 0.5s',
            }}>
              <div style={{
                width: '230px', height: '478px',
                background: 'linear-gradient(160deg, #1e1e20 0%, #0d0d0d 100%)',
                borderRadius: '44px',
                border: '1.5px solid rgba(255,255,255,0.18)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.9), 0 50px 90px rgba(10,20,120,0.55), 0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', inset: '11px', borderRadius: '34px', overflow: 'hidden', background: '#000' }}>
                  <img src="/screen1.jpg" alt="App NotifCar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'absolute', top: '18px', left: '50%', transform: 'translateX(-50%)', width: '84px', height: '25px', background: '#000', borderRadius: '16px', zIndex: 10 }} />
                <div style={{ position: 'absolute', bottom: '18px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', zIndex: 10 }} />
                <div style={{ position: 'absolute', right: '-3px', top: '115px', width: '3px', height: '60px', background: 'rgba(255,255,255,0.18)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '40px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '-3px', top: '152px', width: '3px', height: '40px', background: 'rgba(255,255,255,0.15)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 45%)', borderRadius: '44px', pointerEvents: 'none', zIndex: 20 }} />
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

      {/* Fonctionnalités Section */}
      <Fonctionnalites />

      {/* Profils Section */}
      <Profils onNavigate={onNavigate} />

    
   

      {/* Footer Section */}
      <Footer onNavigate={onNavigate} />

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
