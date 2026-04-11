import React, { useState } from 'react';
import Header from '../components/layout/Header';
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

  React.useEffect(() => {
    document.title = 'Contacter NotifCar — Réponse sous 24h';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Contactez l\'équipe NotifCar pour toute question, projet ou partenariat. Réponse garantie sous 24h.');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const isValid = form.name && form.email && form.profil && form.message;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Header onNavigate={onNavigate} />

      {/* ── Hero compact ── */}
      <div
        className="relative overflow-hidden pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 text-center"
        style={{ background: 'linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%)' }}
      >
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #8DD8FF 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'white', border: '1px solid rgba(255,255,255,0.28)' }}>
            Contact
          </span>
          <h1 className="font-black text-white mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            On vous répond sous 24h.
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto px-1">
            Question, projet ou partenariat — notre équipe est disponible pour vous aider.
          </p>

        </div>
      </div>

      {/* ── Formulaire principal ── */}
      <div className="flex-1 flex items-start justify-center px-4 sm:px-6 py-10 sm:py-16 pb-[max(2.5rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))]">
        <div className="w-full max-w-2xl">

          {status === 'success' ? (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(38,194,158,0.1)', border: '1px solid rgba(38,194,158,0.2)' }}>
                <svg className="w-8 h-8" fill="none" stroke="#26C29E" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-black text-gray-900 text-2xl mb-3" style={{ letterSpacing: '-0.02em' }}>Message envoyé !</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Votre message a bien été envoyé.<br />On vous répond sous 24h.
              </p>
              <button onClick={() => onNavigate?.('landing')}
                className="px-8 py-3.5 rounded-xl font-black text-sm text-white hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #3B7FFF, #5B9FFF)', boxShadow: '0 8px 24px rgba(59,127,255,0.28)' }}>
                Retour à l'accueil
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">

              <div className="mb-8">
                <h2 className="font-black text-gray-900 text-2xl mb-1" style={{ letterSpacing: '-0.02em' }}>
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-400 text-sm">Tous les champs sont obligatoires.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Nom + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nom</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Jean Dupont" required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="jean@email.com" required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Profil */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Vous êtes</label>
                  <select
                    name="profil" value={form.profil} onChange={handleChange} required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                  >
                    <option value="">Sélectionnez votre profil</option>
                    {profils.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Décrivez votre besoin, votre projet ou vos questions..." required rows={6}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={!isValid || status === 'sending'}
                    className="w-full sm:w-auto sm:flex-1 py-4 rounded-xl font-black text-white text-sm transition-all hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #3B7FFF, #5B9FFF)',
                      boxShadow: isValid ? '0 8px 28px rgba(59,127,255,0.28)' : 'none',
                    }}
                  >
                    {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message →'}
                  </button>
                  <p className="text-xs text-gray-400 sm:text-left">
                    Données protégées<br />RGPD · Hébergé en France
                  </p>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Une erreur est survenue, réessayez.</p>
                )}
              </form>
            </div>
          )}

          {/* LinkedIn en bas */}
          <div className="mt-6 text-center">
            <a
              href="https://www.linkedin.com/company/notifcar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Suivez-nous sur LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
