import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import QRCodeScanner from '../components/features/QRCodeScanner';
import VehicleCard from '../components/features/VehicleCard';
import NotificationCard from '../components/features/NotificationCard';
import AddVehicleModal from '../components/features/AddVehicleModal';
import QRCodeDisplay from '../components/features/QRCodeDisplay';
import { type Page } from '../hooks/useNavigation';

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

interface Notification {
  id: string;
  type: 'info' | 'warning' | 'urgent';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  vehicleId: string;
  vehicleInfo?: {
    brand: string;
    model: string;
    licensePlate: string;
  };
}

interface DashboardPageProps {
  onNavigate?: (page: Page) => void;
  onLogout?: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'vehicles' | 'notifications' | 'scan'>('vehicles');
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [showQRCode, setShowQRCode] = useState<Vehicle | null>(null);

  // Mock data
  const vehicles: Vehicle[] = [
    {
      id: '1',
      brand: 'Renault',
      model: 'Clio',
      year: 2020,
      licensePlate: 'AB-123-CD',
      qrCode: 'NC001',
      isActive: true,
      lastNotification: new Date('2024-01-15'),
    },
    {
      id: '2',
      brand: 'Peugeot',
      model: '208',
      year: 2019,
      licensePlate: 'EF-456-GH',
      qrCode: 'NC002',
      isActive: false,
    },
  ];

  const notifications: Notification[] = [
    {
      id: '1',
      type: 'warning',
      title: 'Véhicule mal garé',
      message: 'Votre véhicule gêne la circulation. Merci de le déplacer.',
      timestamp: new Date('2024-01-15T14:30:00'),
      isRead: false,
      vehicleId: '1',
      vehicleInfo: {
        brand: 'Renault',
        model: 'Clio',
        licensePlate: 'AB-123-CD',
      },
    },
    {
      id: '2',
      type: 'info',
      title: 'Notification de test',
      message: 'Ceci est une notification de test pour vérifier le bon fonctionnement.',
      timestamp: new Date('2024-01-14T10:15:00'),
      isRead: true,
      vehicleId: '1',
      vehicleInfo: {
        brand: 'Renault',
        model: 'Clio',
        licensePlate: 'AB-123-CD',
      },
    },
  ];

  const handleScan = (data: string) => {
    console.log('QR Code scanné:', data);
    // Logique pour traiter le scan
  };

  const handleOpenAddVehicle = () => {
    setShowAddVehicle(true);
  };

  const handleEditVehicle = (vehicle: Vehicle) => {
    console.log('Modifier véhicule:', vehicle);
  };

  const handleDeleteVehicle = (vehicleId: string) => {
    console.log('Supprimer véhicule:', vehicleId);
  };

  const handleToggleActive = (vehicleId: string) => {
    console.log('Toggle active:', vehicleId);
  };

  const handleViewQR = (vehicle: Vehicle) => {
    setShowQRCode(vehicle);
  };

  const handleAddVehicle = (vehicleData: any) => {
    console.log('Ajouter véhicule:', vehicleData);
    // Logique pour ajouter le véhicule
    setShowAddVehicle(false);
  };

  const handleMarkAsRead = (notificationId: string) => {
    console.log('Marquer comme lu:', notificationId);
  };

  const handleDeleteNotification = (notificationId: string) => {
    console.log('Supprimer notification:', notificationId);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigate={onNavigate}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Véhicules</p>
                <p className="text-2xl font-semibold text-gray-900">{vehicles.length}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V1H4v4zM15 1v6h6V1h-6z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Notifications</p>
                <p className="text-2xl font-semibold text-gray-900">{notifications.length}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Non lues</p>
                <p className="text-2xl font-semibold text-gray-900">{unreadCount}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Actifs</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {vehicles.filter(v => v.isActive).length}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('vehicles')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'vehicles'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Mes Véhicules
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'notifications'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Notifications
              {unreadCount > 0 && (
                <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('scan')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'scan'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Scanner QR Code
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'vehicles' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Mes Véhicules</h2>
              <Button variant="primary" onClick={handleOpenAddVehicle}>
                Ajouter un véhicule
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                  onEdit={handleEditVehicle}
                  onDelete={handleDeleteVehicle}
                  onToggleActive={handleToggleActive}
                  onViewQR={handleViewQR}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h2>
            
            <div className="space-y-4">
              {notifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={handleMarkAsRead}
                  onDelete={handleDeleteNotification}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'scan' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Scanner un QR Code</h2>
            
            <div className="max-w-md mx-auto">
              <QRCodeScanner onScan={handleScan} />
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <AddVehicleModal
        isOpen={showAddVehicle}
        onClose={() => setShowAddVehicle(false)}
        onSave={handleAddVehicle}
      />

      {showQRCode && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setShowQRCode(null)} />
            <div className="inline-block w-full max-w-md px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:p-6">
              <QRCodeDisplay
                vehicleId={showQRCode.id}
                qrCode={showQRCode.qrCode}
                vehicleInfo={{
                  brand: showQRCode.brand,
                  model: showQRCode.model,
                  licensePlate: showQRCode.licensePlate,
                }}
                onClose={() => setShowQRCode(null)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
