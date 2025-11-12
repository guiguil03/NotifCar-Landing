export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'usage',
    question: "Comment fonctionne NotifCar ?",
    answer:
      "Scannez simplement le QR code présent sur un véhicule. Vous pouvez alors envoyer une alerte anonyme et sécurisée au propriétaire (ex : phares restés allumés, véhicule gênant, etc.).Aucune donnée personnelle n’est échangée, tout passe par l’application.",
  },
  {
    id: 'pourquoi',
    question: "Pourquoi NotifCar ?",
    answer:
      "NotifCar facilite la communication entre automobilistes, en cas d’urgence ou de gêne, sans contact direct. C’est un geste d’entraide, simple et respectueux.",
  },
  {
    id: 'Alerte',
    question: "Dois-je avoir un compte pour envoyer une alerte ?",
    answer:
      "Non. Le scan d’un QR code permet d’envoyer une alerte sans inscription obligatoire. Le propriétaire, lui, reçoit l’alerte via son espace sécurisé.",
  },
  {
    id: 'proprietaire',
    question: "Est-ce que je peux l’utiliser si je n’ai pas de voiture ?",
    answer:
      "Oui ! Vous pouvez toujours scanner un QR code et prévenir un automobiliste si nécessaire NotifCar repose sur la solidarité entre citoyens."
  },
  {
    id: 'collecte',
    question: "Est-ce que NotifCar collecte mes données de localisation ?",
    answer:
      "Non. Nous ne suivons pas votre position en temps réel. Seul le scan volontaire du QR code déclenche un échange",
  },

  {
    id: 'price',
    question: "L'application est-elle payante ?",
    answer:
      "NotifCar propose une version gratuite au lancement pour permettre à tous de découvrir le concept. Une offre Premium viendra ensuite enrichir l’expérience (messagerie instantanée, historique d’alertes, personnalisation du profil véhicule…).",
  },
  {
    id: 'spam',
    question: "Que faire si mon QR code est volé ou copié ? ",
    answer:
      "Vous pouvez désactiver ou régénérer votre QR code depuis votre espace utilisateur en un ",
  },
  {
    id: 'devices',
    question: "Sur quels appareils NotifCar sera disponible ?",
    answer:
      "NotifCar sera disponible sur iOS et Android dès le lancement.La version web progressive (PWA) est également prévue pour un accès sans installation.",
  },
];


