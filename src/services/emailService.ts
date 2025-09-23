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

  // Envoyer un email d'inscription (notification admin)
  static async sendRegistrationEmail(data: RegistrationData): Promise<EmailResponse> {
    try {
      // Vérifier que EmailJS est initialisé
      if (!this.initialized) {
        throw new Error('EmailJS n\'est pas initialisé');
      }

      // Choix du template: priorité au template d'inscription, sinon fallback
      const templateId = EMAILJS_CONFIG.REGISTRATION_TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID;
      if (!templateId) {
        throw new Error('Aucun Template ID défini.');
      }

      // Paramètres du template (alignés avec le template fourni)
      const templateParams: Record<string, string> = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message || '',
        to_email: EMAILJS_CONFIG.ADMIN_EMAIL,
        year: String(new Date().getFullYear()),
        website_url: 'https://notifcar.app',
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        templateId,
        templateParams
      );

      console.log('Email envoyé (admin notif):', response);

      return {
        success: true,
        message: 'Email envoyé avec succès !'
      };

    } catch (error: unknown) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);

      // Normaliser l'erreur EmailJS quand dispo
      const normalized = (error as { text?: string; status?: number })?.text || (error as Error)?.message || 'Erreur inconnue';

      return {
        success: false,
        message: 'Erreur lors de l\'envoi de l\'email',
        error: normalized,
      };
    }
  }
}
