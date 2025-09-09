import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

// Interface pour les données d'inscription
export interface RegistrationData {
  name: string;
  email: string;
  phone: string;
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
  static init(userId: string) {
    if (!this.initialized) {
      emailjs.init(userId);
      this.initialized = true;
    }
  }

  // Envoyer un email d'inscription à l'utilisateur
  static async sendRegistrationEmail(data: RegistrationData): Promise<EmailResponse> {
    try {
      // Vérifier que EmailJS est initialisé
      if (!this.initialized) {
        throw new Error('EmailJS n\'est pas initialisé');
      }

      // Paramètres du template pour l'utilisateur qui s'inscrit
      const templateParams = {
        // Variables principales pour le template EmailJS
        to_name: data.name,
        to_email: data.email, // L'email de destination
        from_name: 'Équipe Notifcar',
        from_email: EMAILJS_CONFIG.ADMIN_EMAIL,
        
        // Variables de contenu
        user_name: data.name,
        user_email: data.email,
        user_phone: data.phone,
        message: `Bonjour ${data.name},

Merci pour votre inscription à Notifcar !

Votre demande a bien été reçue et notre équipe vous contactera dans les plus brefs délais pour vous expliquer comment utiliser notre service de communication automobile.

En attendant, n'hésitez pas à visiter notre site web pour en savoir plus sur nos fonctionnalités.

Cordialement,
L'équipe Notifcar`,
        
        // Variables pour le sujet et autres
        subject: `Confirmation d'inscription Notifcar`,
        phone: data.phone,
        
        // Variables alternatives (au cas où le template utilise d'autres noms)
        recipient_name: data.name,
        recipient_email: data.email,
        client_name: data.name,
        client_email: data.email,
      };

      // Envoyer l'email à l'utilisateur
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email envoyé à l\'utilisateur:', data.email, response);
      
      return {
        success: true,
        message: 'Email envoyé avec succès !'
      };

    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      
      return {
        success: false,
        message: 'Erreur lors de l\'envoi de l\'email',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }
  }

}
