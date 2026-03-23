import React, { useState } from 'react';
import notifcarLogo from '../assets/notifcarlogo.png';
import { type Page } from '../hooks/useNavigation';

interface ContactPageProps {
  onNavigate?: (page: Page) => void;
}

const profils = [
  'Particulier',
  'Flotte professionnelle',
  'Garage / Concessionnaire',
  'Assureur',
  'Autre',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [form, setForm] = useState({ name: '', email: '', profil: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const subject = encodeURIComponent(`[Notifcar] Demande de contact — ${form.profil}`);
      const body = encodeURIComponent(
        `Nom : ${form.name}\nEmail : ${form.email}\nProfil : ${form.profil}\n\n${form.message}`
      );
      window.location.href = `mailto:notifcar@contact.com?subject=${subject}&body=${body}`;
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const isValid = form.name && form.email && form.profil && form.message;

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header simplifié */}
      <header className="border-b border-gray-100 px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate?.('landing')} className="flex items-center gap-2">
          <img src={notifcarLogo} alt="Notifcar" className="h-5 w-auto" />
        </button>
        <button
          onClick={() => onNavigate?.('landing')}
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          Retour
        </button>
      </header>

      {/* Contenu */}
      <div className="flex-1 flex flex-col lg:flex-row">

        {/* Colonne gauche — info */}
        <div
          className="lg:w-[42%] flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-24"
          style={{ background: 'linear-gradient(145deg, #1A55E8 0%, #3B7FFF 100%)' }}
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-3 py-1 rounded-full w-fit"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
            Contact
          </span>
          <h1
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Une question ?<br />On vous répond.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-sm">
            Que vous soyez particulier ou professionnel, notre équipe vous contacte sous 24h.
          </p>

          <div className="space-y-5">
            {[
              { icon: '📧', label: 'Email', value: 'notifcar@contact.com' },
              { icon: '⚡', label: 'Délai de réponse', value: 'Sous 24h' },
              { icon: '🇫🇷', label: 'Hébergement', value: 'France' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="text-xl w-8">{item.icon}</span>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-medium text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite — formulaire */}
        <div className="flex-1 flex items-center justify-center px-6 py-16 sm:px-10 lg:px-16">
          <div className="w-full max-w-lg">

            <h2 className="font-bold text-gray-900 text-2xl mb-2">Envoyez-nous un message</h2>
            <p className="text-gray-500 text-sm mb-10">Tous les champs sont obligatoires.</p>

            {status === 'success' ? (
              <div className="rounded-2xl p-8 text-center border border-green-100 bg-green-50">
                <span className="text-4xl block mb-4">✅</span>
                <p className="font-bold text-gray-900 text-lg mb-2">Message envoyé !</p>
                <p className="text-gray-500 text-sm">Votre client mail s'est ouvert. On vous répond sous 24h.</p>
                <button
                  onClick={() => onNavigate?.('landing')}
                  className="mt-6 text-sm font-semibold px-6 py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
                  style={{ background: '#3B7FFF' }}
                >
                  Retour à l'accueil
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Nom</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Profil</label>
                  <select
                    name="profil"
                    value={form.profil}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-blue-400 transition-colors bg-white"
                  >
                    <option value="">Sélectionnez votre profil</option>
                    {profils.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre besoin, votre projet ou vos questions..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isValid || status === 'sending'}
                  className="w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: '#3B7FFF' }}
                >
                  {status === 'sending' ? 'Envoi…' : 'Envoyer le message →'}
                </button>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Une erreur est survenue, réessayez.</p>
                )}

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
