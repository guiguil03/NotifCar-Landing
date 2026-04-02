import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SpeedInsights } from "@vercel/speed-insights/react";
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import PrivacyPage from './pages/PrivacyPage';
import CGUPage from './pages/CGUPage';
import { type Page } from './hooks/useNavigation';
import './App.css';
import { EmailService } from './services/emailService';
import { EMAILJS_CONFIG } from './config/emailjs';

const PAGE_PATHS: Record<Page, string> = {
  landing: '/',
  contact: '/contact',
  pricing: '/tarifs',
  privacy: '/confidentialite',
  cgu: '/cgu',
  auth: '/',
  dashboard: '/',
  profile: '/',
};

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (EMAILJS_CONFIG.USER_ID) {
      EmailService.init(EMAILJS_CONFIG.USER_ID);
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigateTo = React.useCallback((page: Page) => {
    navigate(PAGE_PATHS[page] ?? '/');
  }, [navigate]);

  const scrollToSection = React.useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <SpeedInsights
        framework="vite"
        sampleRate={1}
        beforeSend={(data) => data}
      />
      <Routes>
        <Route path="/" element={<LandingPage onNavigate={navigateTo} onScrollToSection={scrollToSection} />} />
        <Route path="/contact" element={<ContactPage onNavigate={navigateTo} />} />
        <Route path="/tarifs" element={<PricingPage onNavigate={navigateTo} />} />
        <Route path="/confidentialite" element={<PrivacyPage onNavigate={navigateTo} />} />
        <Route path="/cgu" element={<CGUPage onNavigate={navigateTo} />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
