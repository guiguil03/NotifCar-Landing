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
      "Vous scannez le QR code d'un véhicule et envoyez une alerte anonyme au propriétaire via l'app, sans partager d'informations personnelles.",
  },
  {
    id: 'privacy',
    question: "Mes informations sont-elles protégées ?",
    answer:
      "Oui. Les échanges sont anonymes et chiffrés. Aucune donnée personnelle n'est exposée aux autres utilisateurs.",
  },
  {
    id: 'price',
    question: "L'application est-elle payante ?",
    answer:
      "Une offre gratuite est prévue au lancement. Des options premium pourront être proposées ensuite.",
  },
  {
    id: 'spam',
    question: "Comment évitez-vous les abus/spam ?",
    answer:
      "Des limites intelligentes et des cooldowns empêchent les usages malveillants. Un signalement est possible en un clic.",
  },
  {
    id: 'devices',
    question: "Sur quels appareils NotifCar sera disponible ?",
    answer:
      "iOS et Android au lancement.",
  },
];


