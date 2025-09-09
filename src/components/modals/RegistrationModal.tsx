import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Modal from '../ui/Modal';
import { EmailService, type RegistrationData } from '../../services/emailService';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import { testEmailToAddress } from '../../utils/emailTest';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [isTesting, setIsTesting] = useState(false);

  // Initialiser EmailJS au montage du composant
  useEffect(() => {
    if (isOpen && EMAILJS_CONFIG.USER_ID !== 'YOUR_USER_ID_HERE') {
      EmailService.init(EMAILJS_CONFIG.USER_ID);
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }

    if (!formData.phone) {
      newErrors.phone = 'Le numéro de téléphone est requis';
    } else if (!/^(\+33|0)[1-9](\d{8})$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Le numéro de téléphone n\'est pas valide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        // Vérifier si EmailJS est configuré
        if (EMAILJS_CONFIG.USER_ID === 'YOUR_USER_ID_HERE') {
          throw new Error('EmailJS n\'est pas configuré. Veuillez ajouter votre User ID dans la configuration.');
        }

        const registrationData: RegistrationData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        };

        // Envoyer l'email de confirmation à l'utilisateur
        const response = await EmailService.sendRegistrationEmail(registrationData);
        
        if (!response.success) {
          throw new Error(response.error || 'Erreur lors de l\'envoi de l\'email');
        }

        setIsSubmitted(true);
      } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        setSubmitError(error instanceof Error ? error.message : 'Une erreur est survenue');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError('');
    onClose();
  };

  const handleTestEmail = async () => {
    if (!formData.email) {
      setSubmitError('Veuillez d\'abord saisir un email pour tester');
      return;
    }

    setIsTesting(true);
    setSubmitError('');

    try {
      // Test avec les paramètres exacts
      console.log('🧪 Test EmailJS avec:', {
        to_email: formData.email,
        to_name: formData.name || 'Test User',
        from_email: EMAILJS_CONFIG.ADMIN_EMAIL,
        from_name: 'Équipe Notifcar'
      });

      const result = await testEmailToAddress(formData.email);
      if (result.success) {
        setSubmitError(`✅ Email de test envoyé à ${formData.email} ! Vérifiez votre boîte de réception.`);
      } else {
        setSubmitError(`❌ Erreur: ${result.error}`);
      }
    } catch (error) {
      setSubmitError(`❌ Erreur de test: ${error}`);
    } finally {
      setIsTesting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Email envoyé avec succès !
          </h2>
          
          <p className="text-gray-600 mb-6">
            Nous avons envoyé un email de confirmation à <strong>{formData.email}</strong>. 
            Veuillez vérifier votre boîte de réception et suivre les instructions pour finaliser votre inscription.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Note :</strong> Si vous ne recevez pas l'email dans les prochaines minutes, 
              vérifiez votre dossier spam ou courrier indésirable.
            </p>
          </div>
          
          <Button
            variant="primary"
            onClick={handleClose}
            className="w-full"
          >
            Fermer
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl mb-4 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3">
          S'inscrire à Notifcar
        </h2>
        <p className="text-gray-600 text-lg">
          Rejoignez la communauté et recevez un email de confirmation
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          label="Nom complet"
          type="text"
          value={formData.name}
          onChange={(value) => handleInputChange('name', value)}
          error={errors.name}
          required
          placeholder="Votre nom complet"
          icon={
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />

        <Input
          label="Adresse email"
          type="email"
          value={formData.email}
          onChange={(value) => handleInputChange('email', value)}
          error={errors.email}
          required
          placeholder="votre@email.com"
          icon={
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          }
        />

        <Input
          label="Numéro de téléphone"
          type="tel"
          value={formData.phone}
          onChange={(value) => handleInputChange('phone', value)}
          error={errors.phone}
          required
          placeholder="06 12 34 56 78"
          icon={
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
        />

        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-600">{submitError}</p>
          </div>
        )}

        <div className="space-y-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>S'inscrire et recevoir un email</span>
                </>
              )}
            </div>
          </Button>
          
          <Button
            type="button"
            variant="outline"
            size="sm"
            loading={isTesting}
            onClick={handleTestEmail}
            className="w-full text-xs group border-purple-300 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              {isTesting ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-purple-600"></div>
                  <span>Test en cours...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span>Tester l'envoi d'email</span>
                </>
              )}
            </div>
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          En vous inscrivant, vous acceptez nos{' '}
          <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
            conditions d'utilisation
          </a>{' '}
          et notre{' '}
          <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
            politique de confidentialité
          </a>
        </p>
      </div>
    </Modal>
  );
};

export default RegistrationModal;
