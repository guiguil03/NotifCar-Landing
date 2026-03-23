import React, { useState } from 'react';
import notifcarLogo from '../assets/notifcarlogo.png';
import { type Page } from '../hooks/useNavigation';

interface PricingPageProps {
  onNavigate?: (page: Page) => void;
}

const plans = [
  {
    name: 'Basic',
    tag: null,
    price: { monthly: '0€', yearly: '0€' },
    desc: 'Pour découvrir Notifcar sans engagement.',
    color: '#6b7280',
    features: [
      { label: '5 notifications / mois', ok: true },
      { label: '1 véhicule', ok: true },
      { label: 'Historique 7 jours', ok: true },
      { label: 'QR code standard', ok: true },
      { label: 'Support email', ok: true },
      { label: 'Messagerie instantanée', ok: false },
      { label: "Rapports d'activité", ok: false },
      { label: 'Multi-véhicules', ok: false },
    ],
    cta: 'Commencer gratuitement',
    ctaStyle: 'outline',
  },
  {
    name: 'Premium',
    tag: 'Plus populaire',
    price: { monthly: '3,99€', yearly: '2,99€' },
    desc: 'La protection complète pour les particuliers.',
    color: '#3B7FFF',
    features: [
      { label: 'Notifications illimitées', ok: true },
      { label: '3 véhicules', ok: true },
      { label: 'Historique complet', ok: true },
      { label: 'QR code personnalisé', ok: true },
      { label: 'Support prioritaire', ok: true },
      { label: 'Messagerie instantanée', ok: true },
      { label: "Rapports d'activité avancés", ok: true },
      { label: 'Multi-véhicules', ok: false },
    ],
    cta: 'Choisir Premium',
    ctaStyle: 'filled',
  },
  {
    name: 'Entreprise',
    tag: 'Sur mesure',
    price: { monthly: 'Sur devis', yearly: 'Sur devis' },
    desc: 'Pour les flottes, garages et assureurs.',
    color: '#26C29E',
    features: [
      { label: 'Notifications illimitées', ok: true },
      { label: 'Véhicules illimités', ok: true },
      { label: 'Historique complet', ok: true },
      { label: 'QR code personnalisé entreprise', ok: true },
      { label: 'Support dédié 24/7', ok: true },
      { label: 'Messagerie personnalisée', ok: true },
      { label: 'Rapports multi-véhicules', ok: true },
      { label: 'Gestion multi-utilisateurs', ok: true },
    ],
    cta: 'Nous contacter',
    ctaStyle: 'outline-teal',
  },
];

const faqs = [
  {
    q: 'Puis-je changer de plan à tout moment ?',
    a: 'Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment depuis votre espace personnel. La facturation est ajustée au prorata.',
  },
  {
    q: "Y a-t-il une période d'essai pour le plan Premium ?",
    a: '7 jours d\'essai gratuit sans carte bancaire. Vous accédez à toutes les fonctionnalités Premium pendant cette période.',
  },
  {
    q: 'Comment fonctionne la facturation annuelle ?',
    a: 'En choisissant le cycle annuel, vous économisez 25% par rapport au mensuel. Vous êtes facturé en une seule fois pour 12 mois.',
  },
  {
    q: "Qu'est-ce qui est inclus dans le plan Entreprise ?",
    a: "Un accès illimité en véhicules, un dashboard centralisé, des rapports automatisés et une intégration API possible. Tarif sur mesure selon vos besoins.",
  },
  {
    q: 'Mes données sont-elles sécurisées ?',
    a: 'Oui. Hébergement en France, chiffrement bout-en-bout, conformité RGPD. Vos données ne sont jamais revendues ni partagées.',
  },
];

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <header className="border-b border-gray-100 px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate?.('landing')}>
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

      {/* Hero */}
      <div
        className="relative overflow-hidden px-6 sm:px-10 py-20 sm:py-28 text-center"
        style={{ background: 'linear-gradient(145deg, #1A55E8 0%, #3B7FFF 100%)' }}
      >
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #26C29E 0%, transparent 70%)' }} />

        <div className="relative max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
            Tarifs
          </span>
          <h1
            className="font-extrabold text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
          >
            Protection claire.<br />Prix transparent.
          </h1>
          <p className="text-white/70 text-lg mb-10">
            Commencez gratuitement, évoluez selon vos besoins. Aucun engagement, aucune surprise.
          </p>

          {/* Toggle mensuel / annuel */}
          <div className="inline-flex items-center gap-3 px-2 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.12)' }}>
            <button
              onClick={() => setYearly(false)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
              style={!yearly ? { background: 'white', color: '#3B7FFF' } : { color: 'rgba(255,255,255,0.7)' }}
            >
              Mensuel
            </button>
            <button
              onClick={() => setYearly(true)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
              style={yearly ? { background: 'white', color: '#3B7FFF' } : { color: 'rgba(255,255,255,0.7)' }}
            >
              Annuel
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: yearly ? 'rgba(38,194,158,0.15)' : 'rgba(38,194,158,0.3)', color: '#26C29E' }}>
                -25%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 -mt-10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => {
            const isPopular = plan.tag === 'Plus populaire';
            return (
              <div
                key={plan.name}
                className="relative bg-white rounded-2xl flex flex-col transition-all"
                style={{
                  padding: isPopular ? '2rem' : '1.75rem',
                  border: isPopular ? `2px solid ${plan.color}` : '1px solid #f0f0f0',
                  boxShadow: isPopular ? '0 20px 60px rgba(59,127,255,0.15)' : '0 2px 12px rgba(0,0,0,0.04)',
                  marginTop: isPopular ? '-12px' : '0',
                }}
              >
                {plan.tag && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                    style={isPopular
                      ? { background: '#3B7FFF', color: 'white' }
                      : { background: 'rgba(38,194,158,0.10)', color: '#26C29E', border: '1px solid rgba(38,194,158,0.25)' }
                    }
                  >
                    {plan.tag}
                  </span>
                )}

                <div className="mt-3 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: plan.color }}>{plan.name}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-black text-gray-900" style={{ fontSize: plan.price.monthly === 'Sur devis' ? '1.4rem' : '2.5rem' }}>
                      {yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== 'Sur devis' && (
                      <span className="text-gray-400 text-sm">/mois</span>
                    )}
                  </div>
                  {yearly && plan.price.monthly !== 'Sur devis' && plan.price.monthly !== '0€' && (
                    <p className="text-xs text-gray-400 mb-1">au lieu de {plan.price.monthly}/mois · facturé annuellement</p>
                  )}
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">{plan.desc}</p>
                </div>

                <div className="h-px mb-6" style={{ background: '#f3f4f6' }} />

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3">
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={f.ok
                          ? { background: 'rgba(38,194,158,0.12)', color: '#26C29E' }
                          : { background: 'rgba(0,0,0,0.04)', color: '#d1d5db' }
                        }
                      >
                        {f.ok ? '✓' : '✗'}
                      </span>
                      <span className={`text-sm ${f.ok ? 'text-gray-700' : 'text-gray-300'}`}>{f.label}</span>
                    </li>
                  ))}
                </ul>

                {plan.cta === 'Nous contacter' ? (
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full py-3 rounded-xl text-sm font-semibold border-2 transition-all hover:opacity-75"
                    style={{ borderColor: plan.color, color: plan.color }}
                  >
                    {plan.cta}
                  </button>
                ) : plan.ctaStyle === 'filled' ? (
                  <button
                    className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 shadow-lg"
                    style={{ background: plan.color, boxShadow: `0 8px 24px ${plan.color}40` }}
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <button
                    className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:bg-gray-50 border border-gray-200 text-gray-600"
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bandeau garantie */}
      <div className="border-y border-gray-100 bg-gray-50 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { icon: '🔒', label: 'Données sécurisées', sub: 'Hébergement France' },
            { icon: '↩️', label: 'Sans engagement', sub: 'Résiliation à tout moment' },
            { icon: '🎁', label: '7 jours offerts', sub: 'Sur le plan Premium' },
            { icon: '💬', label: 'Support réactif', sub: 'Réponse sous 24h' },
          ].map((g) => (
            <div key={g.label}>
              <span className="text-2xl block mb-2">{g.icon}</span>
              <p className="font-semibold text-gray-800 text-sm">{g.label}</p>
              <p className="text-gray-400 text-xs mt-0.5">{g.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-24">
        <h2 className="font-extrabold text-gray-900 text-2xl sm:text-3xl mb-10 text-center">Questions fréquentes</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">{faq.q}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform"
                  style={{
                    background: openFaq === i ? '#3B7FFF' : '#f3f4f6',
                    color: openFaq === i ? 'white' : '#6b7280',
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                  }}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA bottom */}
      <div
        className="px-6 py-20 text-center"
        style={{ background: 'linear-gradient(145deg, #1A55E8 0%, #3B7FFF 100%)' }}
      >
        <h2 className="font-extrabold text-white text-2xl sm:text-3xl mb-4">
          Une question sur nos offres ?
        </h2>
        <p className="text-white/70 text-base mb-8 max-w-md mx-auto">
          Notre équipe est disponible pour vous aider à choisir la formule adaptée à votre situation.
        </p>
        <button
          onClick={() => onNavigate?.('contact')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: 'white', color: '#3B7FFF' }}
        >
          Parler à l'équipe →
        </button>
      </div>

    </div>
  );
};

export default PricingPage;
