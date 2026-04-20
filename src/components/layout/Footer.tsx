import React from 'react';
import notifcarLogo from '../../assets/notifcarlogo.png';
import { type Page } from '../../hooks/useNavigation';

interface FooterProps {
  onNavigate?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer style={{ background: '#0B0F2E' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pt-14 sm:pt-20 pb-[max(2.5rem,calc(1.25rem+env(safe-area-inset-bottom,0px)))]">

        {/* Haut : brand + colonnes */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-16 pb-10 sm:pb-14 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>

          {/* Brand */}
          <div className="flex-shrink-0 md:w-72">
            <img src={notifcarLogo} alt="NotifCar" className="h-5 w-auto mb-5" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              NotifCar protège votre véhicule 24h/24 grâce à un système d'alertes anonymes par QR code. Simple, rapide, sécurisé.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/notifcar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-80 min-h-[44px]"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/notifcar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-80 min-h-[44px]"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Colonnes liens — grille 3 cols sur mobile aussi */}
          <div className="flex-1 grid grid-cols-3 gap-6 sm:gap-8">

            {/* Produit */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Produit</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Comment ça marche ?', action: () => onNavigate?.('landing') },
                  { label: 'Fonctionnalités', action: () => onNavigate?.('landing') },
                  { label: 'Tarifs', action: () => onNavigate?.('pricing') },
                ].map((l) => (
                  <li key={l.label}>
                    <button onClick={l.action} className="text-xs sm:text-sm transition-colors hover:text-white text-left leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entreprise */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Entreprise</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Nous contacter', action: () => onNavigate?.('contact') },
                  { label: 'Pour les flottes', action: () => onNavigate?.('contact') },
                  { label: 'Partenaires', action: () => onNavigate?.('contact') },
                ].map((l) => (
                  <li key={l.label}>
                    <button onClick={l.action} className="text-xs sm:text-sm transition-colors hover:text-white text-left leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Légal */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Légal</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => onNavigate?.('privacy')} className="text-xs sm:text-sm transition-colors hover:text-white text-left leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    Confidentialité
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate?.('cgu')} className="text-xs sm:text-sm transition-colors hover:text-white text-left leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    CGU
                  </button>
                </li>
                {['Cookies', 'RGPD'].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-xs sm:text-sm transition-colors hover:text-white leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bas */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} NotifCar. Tous droits réservés. Hébergé en France.
          </p>
          <a
            href="mailto:contact@notifcar.fr"
            className="text-xs transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            contact@notifcar.fr
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
