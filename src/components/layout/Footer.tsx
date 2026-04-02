import React from 'react';
import notifcarLogo from '../../assets/notifcarlogo.png';
import { type Page } from '../../hooks/useNavigation';

interface FooterProps {
  onNavigate?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer style={{ background: '#0B0F2E' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-10">

        {/* Haut : brand + colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>

          {/* Brand */}
          <div className="md:col-span-4">
            <img src={notifcarLogo} alt="NotifCar" className="h-5 w-auto mb-5" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              NotifCar protège votre véhicule 24h/24 grâce à un système d'alertes anonymes par QR code. Simple, rapide, sécurisé.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/notifcar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-80"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Produit */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Produit</h3>
            <ul className="space-y-3">
              {[
                { label: 'Comment ça marche ?', action: () => onNavigate?.('landing') },
                { label: 'Fonctionnalités', action: () => onNavigate?.('landing') },
                { label: 'Tarifs', action: () => onNavigate?.('pricing') },
              ].map((l) => (
                <li key={l.label}>
                  <button onClick={l.action} className="text-sm transition-colors hover:text-white text-left" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Entreprise</h3>
            <ul className="space-y-3">
              {[
                { label: 'Nous contacter', action: () => onNavigate?.('contact') },
                { label: 'Pour les flottes', action: () => onNavigate?.('contact') },
                { label: 'Partenaires', action: () => onNavigate?.('contact') },
              ].map((l) => (
                <li key={l.label}>
                  <button onClick={l.action} className="text-sm transition-colors hover:text-white text-left" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Légal</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onNavigate?.('privacy')} className="text-sm transition-colors hover:text-white text-left" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Confidentialité
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('cgu')} className="text-sm transition-colors hover:text-white text-left" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  CGU
                </button>
              </li>
              {['Cookies', 'RGPD'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} NotifCar. Tous droits réservés. Hébergé en France.
          </p>
          <a
            href="mailto:notifcar@contact.com"
            className="text-xs transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            notifcar@contact.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
