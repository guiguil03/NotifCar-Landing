import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface Vehicle {
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
}

interface AddVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (vehicle: Vehicle) => void;
}

const AddVehicleModal: React.FC<AddVehicleModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Vehicle>({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    licensePlate: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.brand.trim()) {
      newErrors.brand = 'La marque est requise';
    }

    if (!formData.model.trim()) {
      newErrors.model = 'Le modèle est requis';
    }

    if (!formData.licensePlate.trim()) {
      newErrors.licensePlate = 'La plaque d\'immatriculation est requise';
    }

    if (formData.year < 1900 || formData.year > new Date().getFullYear() + 1) {
      newErrors.year = 'L\'année n\'est pas valide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
      onClose();
      setFormData({
        brand: '',
        model: '',
        year: new Date().getFullYear(),
        licensePlate: '',
      });
      setErrors({});
    }
  };

  const handleInputChange = (field: keyof Vehicle, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Ajouter un véhicule"
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Marque"
            value={formData.brand}
            onChange={(value) => handleInputChange('brand', value)}
            error={errors.brand}
            required
            placeholder="Ex: Renault, Peugeot..."
          />
          
          <Input
            label="Modèle"
            value={formData.model}
            onChange={(value) => handleInputChange('model', value)}
            error={errors.model}
            required
            placeholder="Ex: Clio, 208..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Année"
            type="number"
            value={formData.year.toString()}
            onChange={(value) => handleInputChange('year', parseInt(value) || new Date().getFullYear())}
            error={errors.year}
            required
            placeholder="2024"
          />
          
          <Input
            label="Plaque d'immatriculation"
            value={formData.licensePlate}
            onChange={(value) => handleInputChange('licensePlate', value.toUpperCase())}
            error={errors.licensePlate}
            required
            placeholder="AB-123-CD"
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-blue-900">QR Code automatique</h4>
              <p className="text-sm text-blue-700 mt-1">
                Un QR code unique sera généré automatiquement pour ce véhicule. 
                Vous pourrez le télécharger et l'imprimer pour l'apposer sur votre pare-brise.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            variant="primary"
          >
            Ajouter le véhicule
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddVehicleModal;
