import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

// Fonction de test pour vérifier la configuration EmailJS
export const testEmailJS = async () => {
  try {
    console.log('🔧 Configuration EmailJS:');
    console.log('User ID:', EMAILJS_CONFIG.USER_ID);
    console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
    console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
    console.log('Admin Email:', EMAILJS_CONFIG.ADMIN_EMAIL);

    // Initialiser EmailJS
    emailjs.init(EMAILJS_CONFIG.USER_ID);
    console.log('✅ EmailJS initialisé');

    // Test avec des données fictives
    const testData = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      to_name: EMAILJS_CONFIG.ADMIN_NAME,
      to_email: EMAILJS_CONFIG.ADMIN_EMAIL,
      message: 'Test d\'envoi d\'email depuis Notifcar',
      subject: 'Test EmailJS',
    };

    console.log('📧 Envoi du test...');
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      testData
    );

    console.log('✅ Email envoyé avec succès:', response);
    return { success: true, response };

  } catch (error) {
    console.error('❌ Erreur lors du test EmailJS:', error);
    return { success: false, error };
  }
};

// Fonction pour tester l'envoi à une adresse spécifique
export const testEmailToAddress = async (testEmail: string) => {
  try {
    console.log(`📧 Test d'envoi vers: ${testEmail}`);

    const testData = {
      from_name: 'Test Notifcar',
      from_email: testEmail,
      to_name: 'Test User',
      to_email: testEmail, // Envoyer à la même adresse pour le test
      message: `Test d'envoi d'email vers ${testEmail}`,
      subject: 'Test Notifcar - Confirmation',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      testData
    );

    console.log('✅ Email de test envoyé:', response);
    return { success: true, response };

  } catch (error) {
    console.error('❌ Erreur lors du test:', error);
    return { success: false, error };
  }
};
