import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { type Page } from '../hooks/useNavigation';

interface PrivacyPageProps {
  onNavigate?: (page: Page) => void;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm border border-gray-100">
      <h2 className="text-sm font-bold mb-4" style={{ color: '#285AFF' }}>{title}</h2>
      {children}
    </div>
  );
}

function Body({ children }: { children: string }) {
  return (
    <p className="text-sm text-gray-500 leading-relaxed mb-2 whitespace-pre-line">{children}</p>
  );
}

function Sub({ title }: { title: string }) {
  return <p className="text-xs font-bold text-gray-800 mt-4 mb-2">{title}</p>;
}

function BulletItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 mb-2">
      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#285AFF' }} />
      <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
}

function DurationRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-gray-100 gap-4 last:border-0">
      <span className="text-sm font-medium text-gray-800">{label}</span>
      <span className="text-sm text-gray-500 text-right flex-shrink-0 max-w-[45%]">{value}</span>
    </div>
  );
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  React.useEffect(() => {
    document.title = 'Politique de confidentialité — NotifCar';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Politique de confidentialité de NotifCar, conforme au RGPD. Informations sur la collecte, l\'utilisation et la protection de vos données personnelles.');
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
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            RGPD · Notifcar SAS
          </span>
          <h1 className="font-black text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Politique de confidentialité
          </h1>
          <p className="text-white/70 text-base max-w-md mx-auto">
            Informations sur la collecte, l'utilisation et la protection de vos données personnelles.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-12 pb-[max(2.5rem,calc(1.5rem+env(safe-area-inset-bottom,0px)))]">

        {/* Intro card */}
        <div className="flex items-start gap-4 rounded-2xl p-5 mb-6 border" style={{ backgroundColor: '#EFF6FF', borderColor: 'rgba(40,90,255,0.12)' }}>
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="#285AFF" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
          <p className="text-sm leading-relaxed font-medium" style={{ color: '#1E40AF' }}>
            La présente politique vous informe des modalités de collecte, d'utilisation, de conservation et de protection de vos données à caractère personnel, conformément au RGPD et à la loi française Informatique et Libertés.
          </p>
        </div>

        <Section title="Article 1 — Identité du responsable du traitement">
          <Body>{"NOTIFCAR — Société par actions simplifiée (SAS)\nCapital social : 500 €\nSiège social : 78 Avenue des Champs-Élysées, 75008 Paris, France\nSIREN : 100 680 594"}</Body>
          <Body>{"Email : contact@notifcar.fr"}</Body>
        </Section>

        <Section title="Article 2 — Champ d'application">
          <Body>{"La présente politique s'applique à tous les traitements réalisés dans le cadre de :"}</Body>
          <BulletItem text="l'utilisation de l'application et du site Notifcar" />
          <BulletItem text="la création et gestion de comptes utilisateurs" />
          <BulletItem text="l'utilisation des QR codes Notifcar" />
          <BulletItem text="l'envoi de notifications ou signalements" />
          <BulletItem text="l'authentification via Apple ou Google" />
          <BulletItem text="les notifications push" />
          <BulletItem text="les services de paiement ou abonnements éventuels" />
        </Section>

        <Section title="Article 3 — Catégories de données collectées">
          <Sub title="3.1 Données d'identification" />
          <BulletItem text="Nom et prénom, pseudonyme éventuel" />
          <BulletItem text="Adresse email, numéro de téléphone (si renseigné)" />
          <BulletItem text="Identifiant utilisateur" />

          <Sub title="3.2 Données d'authentification" />
          <BulletItem text="Mot de passe chiffré (si compte classique)" />
          <BulletItem text="Identifiant Apple Sign-In ou Google Sign-In" />
          <BulletItem text="Données nécessaires à la sécurisation de l'accès" />

          <Sub title="3.3 Données liées au service" />
          <BulletItem text="Identifiant du QR code et informations du véhicule associé" />
          <BulletItem text="Contenu des alertes ou signalements envoyés" />
          <BulletItem text="Date et heure des notifications" />

          <Sub title="3.4 Données techniques" />
          <BulletItem text="Adresse IP, logs de connexion" />
          <BulletItem text="Type d'appareil, système d'exploitation, version de l'application" />
          <BulletItem text="Identifiants techniques nécessaires à la sécurité" />

          <Sub title="3.5 Données relatives aux notifications" />
          <BulletItem text="Identifiant de notification de l'appareil" />
          <BulletItem text="Préférences de notification, statut d'envoi ou de réception" />

          <Sub title="3.6 Données de paiement" />
          <Body>{"Les paiements sont traités par Stripe. Notifcar ne conserve pas les données bancaires complètes lorsqu'elles sont traitées directement par ce prestataire."}</Body>

          <Sub title="3.7 Données de mesure d'audience" />
          <Body>{"Notifcar utilise Google Analytics pour mesurer l'audience et améliorer l'expérience utilisateur."}</Body>
        </Section>

        <Section title="Article 4 — Finalités des traitements">
          <BulletItem text="Créer et gérer les comptes utilisateurs" />
          <BulletItem text="Permettre l'utilisation du service Notifcar" />
          <BulletItem text="Associer un QR code à un véhicule" />
          <BulletItem text="Transmettre des alertes et notifications push" />
          <BulletItem text="Permettre la connexion Apple ou Google" />
          <BulletItem text="Sécuriser l'application et prévenir les fraudes" />
          <BulletItem text="Améliorer l'application et assurer la maintenance" />
          <BulletItem text="Gérer les abonnements et paiements éventuels" />
          <BulletItem text="Répondre aux demandes des utilisateurs" />
          <BulletItem text="Respecter les obligations légales et réglementaires" />
        </Section>

        <Section title="Article 5 — Bases juridiques des traitements">
          <Sub title="Exécution du contrat" />
          <Body>{"Création de compte, utilisation des services, envoi de notifications, gestion des abonnements."}</Body>
          <Sub title="Intérêt légitime" />
          <Body>{"Sécurité de la plateforme, prévention de la fraude, amélioration du service."}</Body>
          <Sub title="Consentement" />
          <Body>{"Certains traceurs et communications marketing."}</Body>
          <Sub title="Obligation légale" />
          <Body>{"Obligations comptables, fiscales ou réglementaires."}</Body>
        </Section>

        <Section title="Article 6 — Caractère obligatoire des données">
          <Body>{"Certaines données sont nécessaires pour créer un compte, utiliser le service, recevoir des notifications ou sécuriser l'application. Sans ces données, certaines fonctionnalités de Notifcar peuvent être indisponibles."}</Body>
        </Section>

        <Section title="Article 7 — Destinataires des données">
          <BulletItem text="Équipes habilitées de Notifcar" />
          <BulletItem text="Hébergeur IONOS" />
          <BulletItem text="Prestataire de paiement Stripe" />
          <BulletItem text="Service d'analyse Google Analytics" />
          <BulletItem text="Services d'authentification Apple et Google" />
          <BulletItem text="Prestataires techniques nécessaires au fonctionnement" />
          <BulletItem text="Autorités administratives ou judiciaires si la loi l'exige" />
        </Section>

        <Section title="Article 8 — Durée de conservation des données">
          <DurationRow label="Données de compte utilisateur" value="3 ans après la fin de la relation" />
          <DurationRow label="Alertes et messages" value="30 jours maximum" />
          <DurationRow label="Logs techniques" value="6 mois à 1 an" />
          <DurationRow label="Données de prospection" value="3 ans après le dernier contact" />
          <DurationRow label="Données de facturation" value="10 ans (obligations comptables)" />
          <DurationRow label="Données liées aux litiges" value="Jusqu'à 5 ans" />
        </Section>

        <Section title="Article 9 — Hébergement des données">
          <Body>{"Les données sont hébergées par IONOS. Notifcar met en œuvre les mesures nécessaires pour assurer la confidentialité, l'intégrité et la disponibilité des données."}</Body>
        </Section>

        <Section title="Article 10 — Sécurité des données">
          <Body>{"Notifcar met en œuvre des mesures techniques et organisationnelles pour protéger les données :"}</Body>
          <BulletItem text="Contrôle des accès et authentification sécurisée" />
          <BulletItem text="Chiffrement des communications" />
          <BulletItem text="Journalisation des événements techniques" />
        </Section>

        <Section title="Article 11 — Transferts de données">
          <Body>{"Dans le cadre de l'utilisation de certains prestataires (Google Analytics, Stripe, Apple, Google), certaines données peuvent être transférées hors de l'Union européenne. Ces transferts sont encadrés par des mécanismes juridiques conformes au RGPD."}</Body>
        </Section>

        <Section title="Article 12 — Cookies et traceurs">
          <Body>{"L'application ou le site peut utiliser des cookies ou SDK pour :"}</Body>
          <BulletItem text="Assurer le fonctionnement du service et la sécurité des connexions" />
          <BulletItem text="Mesurer l'audience et améliorer l'expérience utilisateur" />
          <Body>{"Lorsque nécessaire, le consentement de l'utilisateur est recueilli."}</Body>
        </Section>

        <Section title="Article 13 — Notifications push">
          <Body>{"Notifcar peut envoyer des notifications push pour vous informer :"}</Body>
          <BulletItem text="D'un signalement concernant votre véhicule" />
          <BulletItem text="D'une alerte ou d'un événement lié à votre compte" />
          <Body>{"Vous pouvez désactiver ces notifications à tout moment depuis les paramètres de votre appareil."}</Body>
        </Section>

        <Section title="Article 14 — Connexion via Apple ou Google">
          <Body>{"Vous pouvez créer un compte via Apple Sign-In ou Google Sign-In. Dans ce cadre, certaines données peuvent être transmises à Notifcar par ces services d'authentification."}</Body>
        </Section>

        <Section title="Article 15 — Droits des utilisateurs">
          <Body>{"Conformément au RGPD, vous disposez des droits suivants :"}</Body>
          <BulletItem text="Droit d'accès, de rectification et à l'effacement" />
          <BulletItem text="Droit à la limitation du traitement et d'opposition" />
          <BulletItem text="Droit à la portabilité et de retrait du consentement" />
          <BulletItem text="Droit de définir des directives post-mortem" />
          <Body>{"Toute demande peut être adressée à :\ncontact@notifcar.fr"}</Body>
        </Section>

        <Section title="Article 16 — Réclamation">
          <Body>{"Vous pouvez introduire une réclamation auprès de l'autorité de contrôle compétente.\n\nEn France :\nCNIL – Commission Nationale de l'Informatique et des Libertés\nwww.cnil.fr"}</Body>
        </Section>

        <Section title="Article 17 — Modification de la politique">
          <Body>{"Notifcar se réserve le droit de modifier la présente politique à tout moment. La version applicable est celle publiée dans l'application ou sur le site internet."}</Body>
        </Section>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PrivacyPage;
