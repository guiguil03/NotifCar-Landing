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
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Floating header container */}
        <div className="bg-white rounded-2xl shadow-lg px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo with colored text */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-indigo-700">Notif</span>
                <span className="text-teal-500">Car</span>
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex md:space-x-8">
              <button 
                onClick={() => handleScrollToSection('how-it-works')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Comment ça marche?
              </button>
              <button 
                onClick={() => handleScrollToSection('security')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Sécurité
              </button>
              <button 
                onClick={() => handleScrollToSection('pillars')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Nos piliers
              </button>
              <button 
                onClick={() => handleScrollToSection('pricing')}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Tarif
              </button>
            </nav>

            {/* Actions */}
            <div className="flex items-center">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    Bonjour, {user?.name}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Déconnexion
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={handleRegister}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Télécharger l'app
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
