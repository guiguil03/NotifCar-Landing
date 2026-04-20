import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { type Page } from '../../hooks/useNavigation';
import notifcarLogo from '../../assets/notifcarlogo.png';
import { RegistrationModal } from '../modals';

interface HeaderProps {
  onNavigate?: (page: Page) => void;
  onScrollToSection?: (sectionId: string) => void;
  onOpenRegistration?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenRegistration }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDownload = () => {
    setIsMenuOpen(false);
    if (onOpenRegistration) onOpenRegistration();
    else setIsModalOpen(true);
  };

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleLogout = () => { logout(); onNavigate?.('landing'); };

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    onNavigate?.('landing');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const navLinks = [
    { label: 'Comment ça marche ?', action: () => scrollTo('how-it-works') },
    { label: 'Fonctionnalités', action: () => scrollTo('features') },
    { label: 'Tarifs', action: () => onNavigate?.('pricing') },
    { label: 'Contact', action: () => onNavigate?.('contact') },
  ];

  return (
    <>
      <style>{`
        @keyframes header-slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes nav-fade-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cta-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,127,255,0); }
          50%       { box-shadow: 0 0 0 6px rgba(59,127,255,0.15); }
        }
        @keyframes mobile-menu-in {
          from { opacity: 0; transform: translateY(-8px) scaleY(0.95); }
          to   { opacity: 1; transform: translateY(0) scaleY(1); }
        }
        @keyframes logo-pop {
          0%   { transform: scale(0.85); opacity: 0; }
          60%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); }
        }
        .header-bar {
          animation: header-slide-down 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #3B7FFF;
          border-radius: 2px;
          transform: translateX(-50%);
          transition: width 0.2s ease;
        }
        .nav-link:hover::after { width: 60%; }
        .nav-link:hover { color: #111827; }
        .cta-btn {
          animation: cta-glow 3s ease-in-out infinite;
        }
        .mobile-menu {
          animation: mobile-menu-in 0.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          transform-origin: top center;
        }
        .logo-anim {
          animation: logo-pop 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
        }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-[max(0.75rem,env(safe-area-inset-top,0px))] sm:pt-4"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        <div
          className="header-bar max-w-6xl mx-auto flex items-center justify-between min-h-[3.25rem] h-14 px-4 sm:px-7 rounded-2xl gap-2"
          style={{
            background: 'rgba(255,255,255,0.97)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Logo */}
          <button onClick={() => onNavigate?.('landing')} className="flex-shrink-0 logo-anim">
            <img src={notifcarLogo} alt="NotifCar" className="h-5 w-auto" />
          </button>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => { setActiveLink(link.label); link.action(); }}
                className="nav-link px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors duration-150"
                style={{
                  animation: `nav-fade-in 0.4s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.07}s both`,
                  color: activeLink === link.label ? '#111827' : undefined,
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <div
            className="hidden md:flex items-center gap-3"
            style={{ animation: 'nav-fade-in 0.4s cubic-bezier(0.22,1,0.36,1) 0.45s both' }}
          >
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
                onClick={openDownload}
                className="cta-btn text-sm font-semibold px-5 py-2 rounded-xl text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: '#3B7FFF' }}
              >
                Télécharger l'app
              </button>
            )}
          </div>

          {/* Burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 transition-transform duration-200 active:scale-90"
            aria-label="Menu"
          >
            <svg
              className="h-5 w-5 transition-transform duration-300"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
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
            className="mobile-menu md:hidden max-w-6xl mx-auto mt-2 rounded-2xl max-h-[min(70vh,calc(100dvh-8rem))] overflow-y-auto overflow-x-hidden shadow-lg"
            style={{ background: 'rgba(255,255,255,0.97)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            <div className="px-3 sm:px-4 py-3 space-y-1">
              {navLinks.map((link, i) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  style={{ animation: `nav-fade-in 0.25s ease ${i * 0.05}s both` }}
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
                    onClick={openDownload}
                    className="w-full text-sm font-semibold px-4 py-3 rounded-xl text-white text-center active:opacity-80"
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

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
