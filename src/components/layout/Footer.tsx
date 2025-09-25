import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // TODO: brancher sur un service d'emailing si besoin
    // Pour l’instant, simple console
    console.log('Subscribe:', email);
  };

  return (
    <footer className="relative bg-gradient-to-r from-indigo-700 via-blue-700 to-emerald-500 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Bloc gauche: titre + sous-titre + formulaire */}
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Rejoignez des milliers de
              <br />
              conducteurs plus sereins
            </h2>
            <p className="mt-6 text-lg text-white/90 max-w-2xl">
              Notifcar arrive bientôt ! Laissez votre email pour être averti dès son lancement.
            </p>

            <div className="mt-8 flex gap-4 max-w-2xl">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={setEmail}
                  className="text-gray-900"
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                className="bg-indigo-600
                 text-white "
                onClick={handleSubscribe}
              >
                M'inscrire
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
             
              <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <span className="text-2xl">in</span>
              </a>
            </div>
          </div>

          {/* Bloc droit: colonnes de liens */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
          <div>
              <h3 className="text-2xl font-semibold text-orange-300">Liens rapides</h3>
              <ul className="mt-6 space-y-4 text-white/90">
                <li><a href="#how-it-works" className="hover:underline">Comment ça marche?</a></li>
                <li><a href="#security" className="hover:underline">Sécurité</a></li>
                <li><a href="#pillars" className="hover:underline">Nos piliers</a></li>
                <li><a href="#pricing" className="hover:underline">Tarif</a></li>
            </ul>
          </div>
          <div>
              <h3 className="text-2xl font-semibold text-orange-300">Légal</h3>
              <ul className="mt-6 space-y-4 text-white/90">
                <li><a href="#privacy" className="hover:underline">Confidentialité</a></li>
                <li><a href="#terms" className="hover:underline">CGU</a></li>
                <li><a href="#cookies" className="hover:underline">Cookies</a></li>
                <li><a href="#rgpd" className="hover:underline">RGPD</a></li>
            </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-3xl font-extrabold">NotifCar</div>
          <p className="text-white/80">© {new Date().getFullYear()} NotifCar. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;