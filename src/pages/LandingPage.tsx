import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { RegistrationModal } from '../components/modals';
import QRCodeSection from '../components/features/QRCodeSection';
import Scenarios from '../components/features/Scenarios';
import Fonctionnement from '../components/features/Fonctionnement';
import Fonctionnalites from '../components/features/Fonctionnalites';
import Profils from '../components/features/Profils';
import FAQ from '../components/features/FAQ';
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
        className="relative min-h-[100svh] min-h-[100dvh] overflow-hidden flex items-center"
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

        <div className="relative w-full max-w-7xl mx-auto px-4 xs:px-5 sm:px-8 lg:px-16 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-12 sm:pb-16 lg:pt-28 lg:pb-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-0">

          {/* ── LEFT: text ── */}
          <div className="flex-1 lg:pr-8 text-left w-full min-w-0">

            {/* Big title */}
            <h1
              className="font-bold text-white mb-5 sm:mb-6 break-words"
              style={{ fontSize: 'clamp(1.875rem, 8.2vw, 5.125rem)', lineHeight: 1.08 }}
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
            <p className="text-white/60 text-[0.9375rem] sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
              Rayure, accident, stationnement gênant — NotifCar vous alerte instantanément, de manière anonyme et sécurisée.
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsRegistrationModalOpen(true)}
                className="w-full xs:w-auto bg-white text-[#1A2FA8] font-bold px-6 sm:px-7 py-3.5 rounded-xl text-sm sm:text-base hover:bg-blue-50 transition-colors shadow-xl text-center"
              >
                Télécharger gratuitement →
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full xs:w-auto text-white/70 hover:text-white font-medium text-sm sm:text-base transition-colors py-2 xs:py-0 text-center xs:text-left"
              >
                Voir comment ça marche
              </button>
            </div>

            {/* Aperçu app — mobile uniquement (les mockups 3 téléphones restent desktop) */}
            <div className="mt-10 flex justify-center lg:hidden w-full">
              <div
                className="relative mx-auto"
                style={{
                  width: 'min(200px, 52vw)',
                  aspectRatio: '200 / 410',
                }}
              >
                <div
                  className="absolute inset-0 rounded-[2rem] sm:rounded-[2.25rem]"
                  style={{
                    background: 'linear-gradient(160deg, #1e1e20 0%, #0d0d0d 100%)',
                    border: '1.5px solid rgba(255,255,255,0.16)',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.1)',
                    overflow: 'hidden',
                  }}
                >
                  <div className="absolute inset-[9px] rounded-[1.5rem] overflow-hidden bg-black">
                    <img src="/screen1.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[68px] h-[20px] bg-black rounded-[14px] z-10" />
                  <div className="absolute bottom-[14px] left-1/2 -translate-x-1/2 w-[72px] h-[3px] bg-white/25 rounded-full z-10" />
                </div>
              </div>
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

              @keyframes phone-enter-left {
                0%   { opacity: 0; transform: rotate(-10deg) translateX(-60px) translateY(40px) scale(0.88); }
                60%  { opacity: 1; transform: rotate(-10deg) translateX(4px) translateY(-3px) scale(1.01); }
                100% { opacity: 0.88; transform: rotate(-10deg) translateY(0px) scale(1); }
              }
              @keyframes phone-enter-right {
                0%   { opacity: 0; transform: rotate(10deg) translateX(60px) translateY(40px) scale(0.88); }
                60%  { opacity: 1; transform: rotate(10deg) translateX(-4px) translateY(-3px) scale(1.01); }
                100% { opacity: 0.88; transform: rotate(10deg) translateY(0px) scale(1); }
              }
              @keyframes phone-enter-center {
                0%   { opacity: 0; transform: translateX(-50%) translateY(70px) scale(0.85); }
                55%  { opacity: 1; transform: translateX(-50%) translateY(-8px) scale(1.02); }
                100% { opacity: 1; transform: translateX(-50%) translateY(0px) scale(1); }
              }

              .phone-left-anim {
                animation:
                  phone-enter-left 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both,
                  phone-left-float 5s ease-in-out 1.1s infinite;
              }
              .phone-right-anim {
                animation:
                  phone-enter-right 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both,
                  phone-right-float 5s ease-in-out 1.25s infinite;
              }
              .phone-center-anim {
                animation:
                  phone-enter-center 1s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both,
                  phone-center-float 6s ease-in-out 1.05s infinite;
              }
            `}</style>

            {/* Halo glow */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(59,127,255,0.28) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }} />

            {/* ── Téléphone gauche (incliné à gauche) ── */}
            <div className="absolute phone-left-anim" style={{
              left: '10px', bottom: '20px', zIndex: 1,
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
            <div className="absolute phone-right-anim" style={{
              right: '10px', bottom: '20px', zIndex: 1,
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
            <div className="absolute phone-center-anim" style={{
              left: '50%', bottom: '0px',
              zIndex: 3,
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
        <div
          className="absolute left-1/2 -translate-x-1/2 animate-bounce hidden sm:block"
          style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))' }}
        >
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

      {/* FAQ Section */}
      <FAQ />

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
