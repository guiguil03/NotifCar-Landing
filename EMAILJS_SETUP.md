# Configuration EmailJS pour Notifcar

## 📧 Instructions de configuration

### 1. Obtenir votre User ID EmailJS

1. Connectez-vous à votre compte EmailJS : https://www.emailjs.com/
2. Allez dans **Account** > **General**
3. Copiez votre **Public Key** (User ID)

### 2. Configurer les clés dans le projet

Ouvrez le fichier `src/config/emailjs.ts` et remplacez :

```typescript
export const EMAILJS_CONFIG = {
  // Remplacez par votre User ID EmailJS
  USER_ID: 'YOUR_USER_ID_HERE', // ← Remplacez par votre Public Key
  
  // Service ID Gmail (déjà configuré d'après vos images)
  SERVICE_ID: 'service_t989g17',
  
  // Template ID Contact Us (déjà configuré d'après vos images)
  TEMPLATE_ID: 'template_olxzucv',
  
  // Template pour l'inscription (vous devrez créer un nouveau template)
  REGISTRATION_TEMPLATE_ID: 'template_registration',
};
```

### 3. Créer un template d'inscription

1. Dans EmailJS, allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Nommez-le "Registration Template"
4. Utilisez ce contenu :

**Subject :** `Nouvelle inscription Notifcar - {{from_name}}`

**Content :**
```
Bonjour,

Vous avez reçu une nouvelle inscription pour Notifcar :

Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}

Message :
{{message}}

Cordialement,
Système Notifcar
```

5. Sauvegardez le template et copiez son ID
6. Remplacez `template_registration` par l'ID du nouveau template

### 4. Tester la configuration

1. Démarrez l'application : `npm run dev`
2. Ouvrez le popup d'inscription
3. Remplissez le formulaire
4. Vérifiez que l'email arrive dans votre boîte Gmail

### 5. Variables du template

Le service utilise ces variables dans le template :
- `{{from_name}}` : Nom de l'utilisateur
- `{{from_email}}` : Email de l'utilisateur
- `{{phone}}` : Téléphone de l'utilisateur
- `{{message}}` : Message personnalisé
- `{{to_email}}` : Email de destination (votre email)

## 🔧 Dépannage

### Erreur "EmailJS n'est pas configuré"
- Vérifiez que vous avez remplacé `YOUR_USER_ID_HERE` par votre vraie clé

### Erreur "Service not found"
- Vérifiez que le Service ID est correct
- Assurez-vous que le service Gmail est bien connecté

### Erreur "Template not found"
- Vérifiez que le Template ID est correct
- Assurez-vous que le template existe et est publié

### Emails non reçus
- Vérifiez votre dossier spam
- Vérifiez que Gmail est bien connecté dans EmailJS
- Regardez les logs de la console pour plus d'informations

## 📱 Fonctionnalités

- ✅ Envoi d'email d'inscription à l'admin
- ✅ Envoi d'email de confirmation à l'utilisateur
- ✅ Gestion des erreurs
- ✅ Validation des champs
- ✅ Interface utilisateur intuitive
