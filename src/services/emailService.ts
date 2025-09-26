import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

// Interface pour les données d'inscription
export interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

// Interface pour la réponse de l'envoi d'email
export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Service d'envoi d'email
export class EmailService {
  private static initialized = false;

  // Initialiser EmailJS
  static init(userId?: string) {
    if (!this.initialized) {
      const key = userId || EMAILJS_CONFIG.USER_ID;
      if (!key) {
        console.error('EmailJS USER_ID manquant');
        return;
      }
      emailjs.init(key);
      this.initialized = true;
    }
  }

  // Envoyer un email de confirmation à l'utilisateur
  static async sendUserConfirmationEmail(data: RegistrationData): Promise<EmailResponse> {
    try {
      // Vérifier que EmailJS est initialisé
      if (!this.initialized) {
        throw new Error('EmailJS n\'est pas initialisé');
      }

      // Template pour l'utilisateur
      const templateId = EMAILJS_CONFIG.TEMPLATE_ID;
      if (!templateId) {
        throw new Error('Template utilisateur non configuré.');
      }

      // Paramètres du template pour l'utilisateur
      const templateParams: Record<string, string> = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message || '',
        to_email: data.email,
        reply_to: data.email,
        year: String(new Date().getFullYear()),
        website_url: 'https://notifcar.app',
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        templateId,
        templateParams
      );

      console.log('Email utilisateur envoyé:', response);

      return {
        success: true,
        message: 'Email de confirmation envoyé avec succès !'
      };

    } catch (error: unknown) {
      console.error('Erreur lors de l\'envoi de l\'email utilisateur:', error);

      const normalized = (error as { text?: string; status?: number })?.text || (error as Error)?.message || 'Erreur inconnue';

      return {
        success: false,
        message: 'Erreur lors de l\'envoi de l\'email de confirmation',
        error: normalized,
      };
    }
  }

  // Envoyer un email de notification à l'admin
  static async sendAdminNotificationEmail(data: RegistrationData): Promise<EmailResponse> {
    try {
      // Vérifier que EmailJS est initialisé
      if (!this.initialized) {
        throw new Error('EmailJS n\'est pas initialisé');
      }

      // Template pour notification admin
      const templateId = EMAILJS_CONFIG.ADMIN_NOTIFICATION_TEMPLATE_ID;
      if (!templateId) {
        throw new Error('Template admin non configuré.');
      }

      // Paramètres du template pour l'admin
      const templateParams: Record<string, string> = {
        // Informations de l'utilisateur qui s'inscrit (plusieurs formats possibles)
        name: data.name,
        email: data.email,
        phone: data.phone,
        
        // Informations admin
        admin_name: EMAILJS_CONFIG.ADMIN_NAME,
        admin_email: EMAILJS_CONFIG.ADMIN_EMAIL,
        
        // Métadonnées
        registration_date: new Date().toLocaleDateString('fr-FR'),
        registration_time: new Date().toLocaleTimeString('fr-FR'),
        date: new Date().toLocaleDateString('fr-FR'),
        time: new Date().toLocaleTimeString('fr-FR'),
        year: String(new Date().getFullYear()),
        website_url: 'https://notifcar.app',
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        templateId,
        templateParams
      );

      console.log('Email admin envoyé:', response);

      return {
        success: true,
        message: 'Notification admin envoyée avec succès !'
      };

    } catch (error: unknown) {
      console.error('Erreur lors de l\'envoi de l\'email admin:', error);

      // Normaliser l'erreur EmailJS quand dispo
      const normalized = (error as { text?: string; status?: number })?.text || (error as Error)?.message || 'Erreur inconnue';

      return {
        success: false,
        message: 'Erreur lors de l\'envoi de la notification admin',
        error: normalized,
      };
    }
  }

  // Envoyer les deux emails en parallèle
  static async sendBothEmails(data: RegistrationData): Promise<{ userEmail: EmailResponse; adminEmail: EmailResponse }> {
    // Initialiser EmailJS si pas déjà fait
    this.init();

    // Envoyer les deux emails en parallèle
    const [userEmailResult, adminEmailResult] = await Promise.all([
      this.sendUserConfirmationEmail(data),
      this.sendAdminNotificationEmail(data)
    ]);

    return {
      userEmail: userEmailResult,
      adminEmail: adminEmailResult
    };
  }
}
