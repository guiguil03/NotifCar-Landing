import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

type Page = 'landing' | 'auth' | 'dashboard' | 'profile';

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authError, setAuthError] = useState<string>('');
  const [authLoading, setAuthLoading] = useState(false);

  const { login, register } = useAuth();

  const handleAuth = async (email: string, password: string, name?: string) => {
    setAuthLoading(true);
    setAuthError('');
    
    try {
      if (authMode === 'login') {
        await login(email, password);
      } else {
        if (!name) throw new Error('Le nom est requis');
        await register(name, email, password);
      }
      setCurrentPage('dashboard');
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setAuthLoading(false);
    }
  };

  // const handleLogout = () => {
  //   const { logout } = useAuth();
  //   logout();
  //   setCurrentPage('landing');
  // };

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
        return <DashboardPage onNavigate={(page: string) => setCurrentPage(page as Page)} />;
      case 'profile':
        return <ProfilePage onNavigate={(page: string) => setCurrentPage(page as Page)} />;
      default:
        return <DashboardPage onNavigate={(page: string) => setCurrentPage(page as Page)} />;
    }
  }

  // Pages pour les utilisateurs non connectés
  switch (currentPage) {
    case 'auth':
      return (
        <AuthPage
          mode={authMode}
          onSwitchMode={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
          onAuthenticate={handleAuth}
          loading={authLoading}
          error={authError}
        />
      );
    case 'landing':
    default:
      return (
        <LandingPage onNavigate={(page: string) => setCurrentPage(page as Page)} />
      );
  }
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
