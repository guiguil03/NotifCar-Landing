import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  qrCode: string;
  isActive: boolean;
  lastNotification?: Date;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onEdit?: (vehicle: Vehicle) => void;
  onDelete?: (vehicleId: string) => void;
  onToggleActive?: (vehicleId: string) => void;
  onViewQR?: (vehicle: Vehicle) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onEdit,
  onDelete,
  onToggleActive,
  onViewQR,
}) => {
  return (
    <Card hover className="relative">
      {/* Status indicator */}
      <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${
        vehicle.isActive ? 'bg-green-500' : 'bg-gray-400'
      }`} />
      
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-sm text-gray-600">
            {vehicle.year} • {vehicle.licensePlate}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Code QR :</span>
          <span className="font-mono text-blue-600">{vehicle.qrCode}</span>
        </div>
        
        {vehicle.lastNotification && (
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-gray-500">Dernière notification :</span>
            <span className="text-gray-700">
              {vehicle.lastNotification.toLocaleDateString('fr-FR')}
            </span>
          </div>
        )}
      </div>

      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewQR?.(vehicle)}
          className="flex-1"
        >
          Voir QR
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit?.(vehicle)}
          className="flex-1"
        >
          Modifier
        </Button>
        
        <Button
          variant={vehicle.isActive ? 'secondary' : 'primary'}
          size="sm"
          onClick={() => onToggleActive?.(vehicle.id)}
          className="flex-1"
        >
          {vehicle.isActive ? 'Désactiver' : 'Activer'}
        </Button>
        
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete?.(vehicle.id)}
        >
          Supprimer
        </Button>
      </div>
    </Card>
  );
};

export default VehicleCard;
