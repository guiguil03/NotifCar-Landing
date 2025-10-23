import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { SpeedInsights } from "@vercel/speed-insights/react" 


import LandingPage from './pages/LandingPage';

import './App.css';
import { EmailService } from './services/emailService';
import { EMAILJS_CONFIG } from './config/emailjs';

const AppContent: React.FC = () => {
  React.useEffect(() => {
    if (EMAILJS_CONFIG.USER_ID) {
      EmailService.init(EMAILJS_CONFIG.USER_ID);
    }
  }, []);
  return (
    <LandingPage />
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
