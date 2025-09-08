import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { useNavigation } from './hooks/useNavigation';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const { currentPage, navigateTo, scrollToSection } = useNavigation();

  const handleLogout = () => {
    logout();
    navigateTo('landing');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Navigation pour les utilisateurs connectés
  if (isAuthenticated) {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage onNavigate={navigateTo} onLogout={handleLogout} />;
      case 'profile':
        return <ProfilePage onNavigate={navigateTo} onLogout={handleLogout} />;
      default:
        return <DashboardPage onNavigate={navigateTo} onLogout={handleLogout} />;
    }
  }

  // Pages pour les utilisateurs non connectés
  return (
    <LandingPage 
      onNavigate={navigateTo} 
      onScrollToSection={scrollToSection}
    />
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
