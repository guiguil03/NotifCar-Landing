import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { type Page } from '../../hooks/useNavigation';
import notifcarLogo from '../../assets/notifcarlogo.png';

interface HeaderProps {
  onNavigate?: (page: Page) => void;
  onScrollToSection?: (sectionId: string) => void;
  onOpenRegistration?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onScrollToSection, onOpenRegistration }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => { logout(); onNavigate?.('landing'); };

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    onScrollToSection
      ? onScrollToSection(id)
      : document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navLinks = [
    { label: 'Comment ça marche ?', action: () => scrollTo('how-it-works') },
    { label: 'Fonctionnalités', action: () => scrollTo('how-it-works') },
    { label: 'Tarifs', action: () => onNavigate?.('pricing') },
    { label: 'Contact', action: () => onNavigate?.('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div
        className="max-w-6xl mx-auto flex items-center justify-between h-14 px-5 sm:px-7 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.97)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Logo */}
        <button onClick={() => onNavigate?.('landing')} className="flex-shrink-0">
          <img src={notifcarLogo} alt="NotifCar" className="h-5 sm:h-5 w-auto" />
        </button>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-150"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-500">{user?.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:border-gray-300 transition-all"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <button
              onClick={() => onOpenRegistration?.()}
              className="text-sm font-semibold px-5 py-2 rounded-xl text-white transition-all hover:opacity-90"
              style={{ background: '#3B7FFF' }}
            >
              Télécharger l'app
            </button>
          )}
        </div>

        {/* Burger mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600"
          aria-label="Menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div
          className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.97)', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 pb-1 border-t border-gray-100 mt-2">
              {isAuthenticated ? (
                <button onClick={handleLogout} className="w-full text-sm font-medium px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl text-left">
                  Déconnexion
                </button>
              ) : (
                <button
                  onClick={() => { setIsMenuOpen(false); onOpenRegistration?.(); }}
                  className="w-full text-sm font-semibold px-4 py-3 rounded-xl text-white text-center"
                  style={{ background: '#3B7FFF' }}
                >
                  Télécharger l'app
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
