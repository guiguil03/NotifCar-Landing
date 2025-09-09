// Configuration EmailJS
export const EMAILJS_CONFIG = {
  // Remplacez par votre User ID EmailJS
  USER_ID: 'ahLJnTlZRxGRTpugm',
  
  // Service ID Gmail (d'après l'image: service_t989g17)
  SERVICE_ID: 'service_t989g17',
  
  // Template ID Contact Us (d'après l'image: template_olxzucv)
  TEMPLATE_ID: 'template_olxzucv',
  
  // Template pour l'inscription (vous devrez créer un nouveau template)
  REGISTRATION_TEMPLATE_ID: 'template_registration',
  
  // Email de l'administrateur (vous)
  ADMIN_EMAIL: 'guillaumel1103@gmail.com',
  
  // Nom de l'administrateur
  ADMIN_NAME: 'Guillaume',
};

// Fonction pour initialiser EmailJS
export const initEmailJS = () => {
  // Cette fonction sera appelée dans le composant principal
  // L'initialisation se fait via le script dans index.html
};
