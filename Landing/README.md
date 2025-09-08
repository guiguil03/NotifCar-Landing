# Notifcar - Application Frontend

## 🚗 À propos

Notifcar est une application innovante qui permet de communiquer instantanément avec les propriétaires de véhicules grâce à un système de QR code apposé sur le pare-brise.

**Slogan :** "Votre véhicule vous parle, écoutez-le"

## ✨ Fonctionnalités

### 🔐 Authentification
- Connexion/Inscription sécurisée
- Authentification OAuth (Google, Apple)
- Gestion des sessions utilisateur

### 🚙 Gestion des véhicules
- Ajout/modification/suppression de véhicules
- Génération automatique de QR codes uniques
- Téléchargement et impression des QR codes
- Activation/désactivation des véhicules

### 📱 Notifications
- Scanner de QR codes
- Envoi de notifications instantanées
- Historique des échanges
- Types de notifications (info, warning, urgent)

### 👤 Profil utilisateur
- Gestion des informations personnelles
- Préférences de notifications
- Sécurité du compte
- Export des données

## 🛠️ Technologies utilisées

- **React 19** - Framework frontend
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Vite** - Build tool et serveur de développement
- **Context API** - Gestion d'état global

## 📁 Structure du projet

```
src/
├── components/           # Composants réutilisables
│   ├── ui/              # Composants UI de base
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   ├── layout/          # Composants de mise en page
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── features/        # Composants métier
│       ├── QRCodeScanner.tsx
│       ├── VehicleCard.tsx
│       ├── NotificationCard.tsx
│       ├── AddVehicleModal.tsx
│       └── QRCodeDisplay.tsx
├── pages/               # Pages de l'application
│   ├── LandingPage.tsx
│   ├── AuthPage.tsx
│   ├── DashboardPage.tsx
│   └── ProfilePage.tsx
├── contexts/            # Contextes React
│   └── AuthContext.tsx
├── hooks/               # Hooks personnalisés
│   └── useLocalStorage.ts
└── App.tsx             # Composant principal
```

## 🚀 Installation et démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone <repository-url>
cd notifCar-Front/Landing

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Aperçu du build
npm run lint     # Linting du code
```

## 🎨 Design System

### Couleurs
- **Bleu principal** : `#2563eb` (sécurité, confiance)
- **Orange** : `#f97316` (alerte, action)
- **Gris** : `#6b7280` (neutre, texte secondaire)

### Composants réutilisables
Tous les composants sont conçus pour être réutilisables et modulaires :
- Props typées avec TypeScript
- Variants et tailles configurables
- Gestion des états (loading, disabled, error)
- Accessibilité intégrée

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à tous les écrans :
- Mobile-first approach
- Breakpoints Tailwind CSS
- Navigation adaptative
- Composants flexibles

## 🔒 Sécurité

- Authentification sécurisée avec JWT
- Validation des formulaires côté client
- Protection des routes
- Gestion des erreurs
- Conformité RGPD

## 🧪 Tests

```bash
# Lancer les tests (à implémenter)
npm run test

# Tests avec couverture
npm run test:coverage
```

## 📦 Build et déploiement

```bash
# Build de production
npm run build

# Les fichiers sont générés dans le dossier dist/
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email : support@notifcar.com
- Documentation : [docs.notifcar.com](https://docs.notifcar.com)

---

**Notifcar** - Révolutionnons la communication automobile 🚗✨