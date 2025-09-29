import React, { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRegister = () => {
    onOpenRegistration?.();
  };

  const handleLogout = () => {
    logout();
    onNavigate?.('landing');
  };

  const handleScrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Fermer le menu burger après clic
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center gap-3">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-extrabold font-poppins bg-gradient-to-t from-[#5340E2] from-20% via-[#4FA65C] via-60% to-[#4EC633] to-100% bg-clip-text text-transparent">
              NotifCar
            </h1>
          </div>

          {/* Navigation Desktop */}
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
              Nos valeurs
            </button>
            <button 
              onClick={() => handleScrollToSection('pricing')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Tarif
            </button>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center">
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium"
              >
                Télécharger l'app
              </Button>
            )}
          </div>

          {/* Menu Burger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2 -mr-2"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          </div>
        </div>

        {/* Menu Burger Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-2xl shadow-lg border-t">
              <button 
                onClick={() => handleScrollToSection('how-it-works')}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Comment ça marche?
              </button>
              <button 
                onClick={() => handleScrollToSection('security')}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Sécurité
              </button>
              <button 
                onClick={() => handleScrollToSection('pillars')}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Nos valeurs
              </button>
              <button 
                onClick={() => handleScrollToSection('pricing')}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Tarif
              </button>
              
              {/* Actions Mobile */}
              <div className="pt-4 border-t">
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-gray-600">
                      Bonjour, {user?.name}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleLogout}
                      className="w-full"
                    >
                      Déconnexion
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="primary" 
                    size="sm" 
                    onClick={handleRegister}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Télécharger l'app
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
