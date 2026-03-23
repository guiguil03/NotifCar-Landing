import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { SpeedInsights } from "@vercel/speed-insights/react";
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import { useNavigation } from './hooks/useNavigation';

import './App.css';
import { EmailService } from './services/emailService';
import { EMAILJS_CONFIG } from './config/emailjs';

const AppContent: React.FC = () => {
  const { currentPage, navigateTo, scrollToSection } = useNavigation();

  React.useEffect(() => {
    if (EMAILJS_CONFIG.USER_ID) {
      EmailService.init(EMAILJS_CONFIG.USER_ID);
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <SpeedInsights
        framework="vite"
        sampleRate={1}
        beforeSend={(data) => data}
      />
      {currentPage === 'contact' ? (
        <ContactPage onNavigate={navigateTo} />
      ) : currentPage === 'pricing' ? (
        <PricingPage onNavigate={navigateTo} />
      ) : (
        <LandingPage onNavigate={navigateTo} onScrollToSection={scrollToSection} />
      )}
    </>
  );
};


const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
