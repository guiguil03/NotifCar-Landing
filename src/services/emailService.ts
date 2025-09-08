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

  // Envoyer un email d'inscription
  static async sendRegistrationEmail(data: RegistrationData): Promise<EmailResponse> {
    try {
      // Vérifier que EmailJS est initialisé
      if (!this.initialized) {
        throw new Error('EmailJS n\'est pas initialisé');
      }

      // Paramètres du template
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        to_email: 'guillaumel1103@gmail.com', // Votre email de réception
        message: `Nouvelle inscription Notifcar:
        
Nom: ${data.name}
Email: ${data.email}
Téléphone: ${data.phone}

L'utilisateur souhaite recevoir des informations sur Notifcar.`,
      };

      // Envoyer l'email
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email envoyé avec succès:', response);
      
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

  // Envoyer un email de confirmation à l'utilisateur
  static async sendConfirmationEmail(data: RegistrationData): Promise<EmailResponse> {
    try {
      if (!this.initialized) {
        throw new Error('EmailJS n\'est pas initialisé');
      }

      const templateParams = {
        to_name: data.name,
        to_email: data.email,
        from_name: 'Équipe Notifcar',
        message: `Bonjour ${data.name},

Merci pour votre inscription à Notifcar !

Votre demande a bien été reçue et notre équipe vous contactera dans les plus brefs délais pour vous expliquer comment utiliser notre service de communication automobile.

En attendant, n'hésitez pas à visiter notre site web pour en savoir plus sur nos fonctionnalités.

Cordialement,
L'équipe Notifcar`,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email de confirmation envoyé:', response);
      
      return {
        success: true,
        message: 'Email de confirmation envoyé !'
      };

    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email de confirmation:', error);
      
      return {
        success: false,
        message: 'Erreur lors de l\'envoi de l\'email de confirmation',
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }
  }
}
