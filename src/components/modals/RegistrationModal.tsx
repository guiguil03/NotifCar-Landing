import React from 'react';
import Modal from '../ui/Modal';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Fermer"
      >
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="text-center mb-8">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
          style={{ background: 'rgba(59,127,255,0.1)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B7FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
            <path d="M8.5 12l2.5 2.5 4.5-4.5" />
          </svg>
        </div>
        <h2 className="font-extrabold text-gray-900 text-2xl mb-2" style={{ letterSpacing: '-0.02em' }}>
          Télécharger NotifCar
        </h2>
        <p className="text-gray-400 text-sm">
          Disponible sur iPhone dès maintenant.
        </p>
      </div>

      <div className="space-y-3">
        {/* App Store */}
        <a
          href="https://apps.apple.com/fr/app/notifcar/id6755294079"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all group"
        >
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-black flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
          <div className="flex-1 text-left">
            <div className="text-xs text-gray-400 mb-0.5">Télécharger sur l'</div>
            <div className="font-bold text-gray-900 text-base">App Store</div>
          </div>
          <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </a>

        {/* Google Play — bientôt */}
        <div className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 cursor-not-allowed">
          <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gray-200 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="#9ca3af" className="w-6 h-6">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.26-2.72-2.72-10.87 9.78zM.29 1.27C.11 1.6 0 2 0 2.46v19.08c0 .46.11.86.29 1.19l.06.06 10.68-10.68v-.25L.35 1.21l-.06.06zM20.55 10.37l-2.85-1.64-3.03 3.03 3.03 3.03 2.87-1.65c.82-.47.82-1.3-.02-1.77zM3.18.24l12.6 7.26-2.72 2.72L2.19.44C2.5.07 2.88-.01 3.18.24z"/>
            </svg>
          </div>
          <div className="flex-1 text-left">
            <div className="text-xs text-gray-400 mb-0.5">Disponible sur</div>
            <div className="font-bold text-gray-400 text-base">Google Play</div>
          </div>
          <span className="text-xs font-semibold text-gray-400 bg-gray-200 px-2.5 py-1 rounded-full">
            Bientôt
          </span>
        </div>
      </div>

      <p className="text-center text-xs text-gray-300 mt-6">
        Gratuit · iOS 15+ · Android prochainement
      </p>
    </Modal>
  );
};

export default RegistrationModal;
