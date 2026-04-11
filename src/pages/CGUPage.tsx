import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { type Page } from '../hooks/useNavigation';

interface CGUPageProps {
  onNavigate?: (page: Page) => void;
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm border border-gray-100">
      <h2 className="text-sm font-bold mb-3" style={{ color: '#285AFF' }}>{title}</h2>
      <p className="text-sm text-gray-500 leading-relaxed">{children}</p>
    </div>
  );
}

const CGUPage: React.FC<CGUPageProps> = ({ onNavigate }) => {
  React.useEffect(() => {
    document.title = "Conditions générales d'utilisation — NotifCar";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', "Conditions générales d'utilisation de NotifCar. Règles d'utilisation du service, abonnements, responsabilités et droit applicable.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F0F4F8' }}>
      <Header onNavigate={onNavigate} />

      {/* Hero */}
      <div
        className="relative overflow-hidden pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:pt-28 pb-12 sm:pb-14 px-4 sm:px-6 text-center"
        style={{ background: 'linear-gradient(160deg, #6EC6F5 0%, #3B7FFF 42%, #2048D8 75%, #1535B8 100%)' }}
      >
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'white', border: '1px solid rgba(255,255,255,0.28)' }}>
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/>
            </svg>
            Dernière mise à jour : janvier 2025
          </span>
          <h1 className="font-black text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Conditions générales d'utilisation
          </h1>
          <p className="text-white/70 text-base max-w-md mx-auto">
            Règles d'utilisation du service Notifcar, abonnements, responsabilités et droit applicable.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-12 pb-[max(2.5rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))]">
        <Section title="1. Acceptation des conditions">
          En téléchargeant et en utilisant l'application Notifcar, vous acceptez sans réserve les présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
        </Section>

        <Section title="2. Description du service">
          Notifcar est une application mobile permettant aux propriétaires de véhicules d'être alertés en cas de besoin via un QR code apposé sur leur véhicule. Le service inclut la gestion de véhicules, la réception de notifications et un système de messagerie entre conducteurs.
        </Section>

        <Section title="3. Inscription et compte utilisateur">
          Pour utiliser Notifcar, vous devez créer un compte avec une adresse email valide. Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités effectuées depuis votre compte. Tout usage frauduleux doit être signalé immédiatement.
        </Section>

        <Section title="4. Utilisation acceptable">
          Vous vous engagez à utiliser Notifcar uniquement à des fins légitimes et licites. Il est interdit d'utiliser l'application pour harceler d'autres utilisateurs, diffuser des contenus illicites, tenter de compromettre la sécurité du service, ou à des fins commerciales non autorisées.
        </Section>

        <Section title="5. Propriété intellectuelle">
          L'application Notifcar, son logo, ses interfaces, ses textes et ses fonctionnalités sont la propriété exclusive de leurs créateurs et sont protégés par les lois sur la propriété intellectuelle. Toute reproduction non autorisée est interdite.
        </Section>

        <Section title="6. Abonnements et paiements">
          Certaines fonctionnalités de Notifcar sont soumises à un abonnement payant. Les tarifs sont clairement affichés dans l'application. Les abonnements sont facturés via Stripe et peuvent être résiliés à tout moment depuis votre espace abonné.
        </Section>

        <Section title="7. Limitation de responsabilité">
          Notifcar ne saurait être tenu responsable des dommages indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser le service. Notre responsabilité est limitée au montant payé pour l'abonnement au cours des 12 derniers mois.
        </Section>

        <Section title="8. Modification des conditions">
          Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication dans l'application. L'utilisation continue de Notifcar après modification vaut acceptation des nouvelles conditions.
        </Section>

        <Section title="9. Droit applicable">
          Les présentes conditions sont régies par le droit français. Tout litige relatif à leur interprétation ou leur exécution sera soumis à la compétence exclusive des tribunaux français.
        </Section>

        <Section title="10. Contact">
          Pour toute question relative à ces conditions, vous pouvez nous contacter à l'adresse : contact@notifcar.fr
        </Section>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default CGUPage;
