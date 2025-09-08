import React from 'react';
import Button from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { type Page } from '../../hooks/useNavigation';

interface HeaderProps {
  onNavigate?: (page: Page) => void;
  onScrollToSection?: (sectionId: string) => void;
  onOpenRegistration?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onScrollToSection,
  onOpenRegistration,
}) => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleRegister = () => {
    onOpenRegistration?.();
  };

  const handleLogout = () => {
    logout();
    onNavigate?.('landing');
  };

  const handleScrollToSection = (sectionId: string) => {
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else {
      // Fallback pour le scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Notif<span className="text-purple-500">car</span>
                </h1>
              </div>
            </div>
            {isAuthenticated ? (
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <button 
                  onClick={() => onNavigate?.('dashboard')}
                  className="text-slate-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-purple-50 rounded-lg"
                >
                  Tableau de bord
                </button>
                <button 
                  onClick={() => onNavigate?.('profile')}
                  className="text-slate-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-purple-50 rounded-lg"
                >
                  Profil
                </button>
              </nav>
            ) : (
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <button 
                  onClick={() => handleScrollToSection('features')}
                  className="text-slate-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-purple-50 rounded-lg"
                >
                  Fonctionnalités
                </button>
                <button 
                  onClick={() => handleScrollToSection('pricing')}
                  className="text-slate-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-purple-50 rounded-lg"
                >
                  Tarifs
                </button>
                <button 
                  onClick={() => handleScrollToSection('contact')}
                  className="text-slate-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-purple-50 rounded-lg"
                >
                  Contact
                </button>
              </nav>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  Bonjour, {user?.name}
                </span>
                <Button variant="outline" size="sm" onClick={handleLogout} className="border-red-300 text-red-600 hover:bg-red-50">
                  Déconnexion
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="primary" size="sm" onClick={handleRegister} className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                  S'inscrire
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
