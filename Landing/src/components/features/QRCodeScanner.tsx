import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface QRCodeScannerProps {
  onScan: (data: string) => void;
  onError?: (error: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onScan, onError: _onError }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);

  const handleScan = () => {
    setIsScanning(true);
    // Simulation d'un scan QR code
    setTimeout(() => {
      const mockData = 'NOTIFCAR_VEHICLE_12345';
      setScannedData(mockData);
      setIsScanning(false);
      onScan(mockData);
    }, 2000);
  };

  const handleManualInput = () => {
    const manualCode = prompt('Entrez le code du véhicule :');
    if (manualCode) {
      setScannedData(manualCode);
      onScan(manualCode);
    }
  };

  return (
    <Card className="text-center">
      <div className="mb-4">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
          {isScanning ? (
            <div className="animate-pulse">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          ) : (
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Scanner le QR Code
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Pointez votre caméra vers le QR code apposé sur le pare-brise du véhicule
        </p>
      </div>

      {scannedData ? (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">
            ✓ Code scanné : {scannedData}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <Button
            variant="primary"
            onClick={handleScan}
            loading={isScanning}
            className="w-full"
          >
            {isScanning ? 'Scan en cours...' : 'Scanner QR Code'}
          </Button>
          
          <Button
            variant="outline"
            onClick={handleManualInput}
            className="w-full"
          >
            Saisir manuellement
          </Button>
        </div>
      )}
    </Card>
  );
};

export default QRCodeScanner;
