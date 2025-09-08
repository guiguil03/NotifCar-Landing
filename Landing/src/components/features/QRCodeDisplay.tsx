import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface QRCodeDisplayProps {
  vehicleId: string;
  qrCode: string;
  vehicleInfo: {
    brand: string;
    model: string;
    licensePlate: string;
  };
  onClose?: () => void;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  vehicleId,
  qrCode,
  vehicleInfo,
  onClose,
}) => {
  const handleDownload = () => {
    // Logique pour télécharger le QR code
    console.log('Télécharger QR code pour:', vehicleId);
  };

  const handlePrint = () => {
    // Logique pour imprimer le QR code
    console.log('Imprimer QR code pour:', vehicleId);
  };

  return (
    <Card className="text-center">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          QR Code - {vehicleInfo.brand} {vehicleInfo.model}
        </h3>
        <p className="text-sm text-gray-600">
          {vehicleInfo.licensePlate} • Code: {qrCode}
        </p>
      </div>

      {/* QR Code placeholder */}
      <div className="w-48 h-48 mx-auto mb-6 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="text-xs text-gray-500">QR Code généré</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-yellow-900">Instructions</h4>
              <p className="text-sm text-yellow-700 mt-1">
                Imprimez ce QR code et collez-le sur votre pare-brise, côté conducteur, 
                de manière visible de l'extérieur.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button
            variant="outline"
            onClick={handleDownload}
            className="flex-1"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger
          </Button>
          
          <Button
            variant="primary"
            onClick={handlePrint}
            className="flex-1"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Imprimer
          </Button>
        </div>

        {onClose && (
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full"
          >
            Fermer
          </Button>
        )}
      </div>
    </Card>
  );
};

export default QRCodeDisplay;
