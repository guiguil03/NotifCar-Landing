# Configuration Vercel Speed Insights

## ✅ Configuration actuelle

SpeedInsights est déjà configuré dans votre projet avec les paramètres optimaux :

### Fichiers modifiés :
- `src/App.tsx` : Composant SpeedInsights intégré
- `vercel.json` : Configuration Vercel optimisée

### Configuration actuelle :
```jsx
<SpeedInsights 
  framework="vite"
  sampleRate={1}
  beforeSend={(data) => {
    // Optionnel: filtrer les données sensibles
    return data;
  }}
/>
```

## 🚀 Prochaines étapes

### 1. Déployer sur Vercel
```bash
# Installer Vercel CLI si pas déjà fait
npm i -g vercel

# Déployer
vercel --prod
```

### 2. Activer Speed Insights
1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans l'onglet "Analytics"
4. Activez "Speed Insights"

### 3. Variables d'environnement (optionnel)
Ajoutez dans votre dashboard Vercel :
- `VERCEL_ANALYTICS_ID` : ID d'analytics (généré automatiquement)

## 📊 Métriques collectées

SpeedInsights collecte automatiquement :
- **Core Web Vitals** : LCP, FID, CLS, FCP, TTFB
- **Performance** : Temps de chargement, rendu
- **Navigation** : Temps entre les pages
- **Erreurs** : Erreurs JavaScript

## 🔧 Configuration avancée

### Filtrer les données sensibles :
```jsx
<SpeedInsights 
  beforeSend={(data) => {
    // Supprimer les URLs sensibles
    if (data.url?.includes('/admin')) {
      return null;
    }
    return data;
  }}
/>
```

### Ajuster le taux d'échantillonnage :
```jsx
<SpeedInsights 
  sampleRate={0.1} // 10% des utilisateurs
/>
```

## ✅ Vérification

Après déploiement, vérifiez :
1. Console du navigateur : Pas d'erreurs SpeedInsights
2. Dashboard Vercel : Données apparaissent après 30 secondes
3. Network tab : Requêtes vers Vercel Analytics

## 🎯 Résultat attendu

- ✅ Monitoring automatique des performances
- ✅ Données en temps réel dans Vercel
- ✅ Alertes en cas de dégradation
- ✅ Optimisations suggérées
