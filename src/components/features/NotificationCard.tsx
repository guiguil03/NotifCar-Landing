import React from 'react';
import Card from '../ui/Card';

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

interface NotificationCardProps {
  notification: Notification;
  onMarkAsRead?: (notificationId: string) => void;
  onDelete?: (notificationId: string) => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
  onMarkAsRead,
  onDelete,
}) => {
  const getTypeIcon = () => {
    switch (notification.type) {
      case 'urgent':
        return (
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const getTypeColor = () => {
    switch (notification.type) {
      case 'urgent':
        return 'border-l-red-500 bg-red-50';
      case 'warning':
        return 'border-l-orange-500 bg-orange-50';
      default:
        return 'border-l-blue-500 bg-blue-50';
    }
  };

  return (
    <Card className={`border-l-4 ${getTypeColor()} ${!notification.isRead ? 'ring-2 ring-blue-200' : ''}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          {getTypeIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-900">
              {notification.title}
            </h4>
            <span className="text-xs text-gray-500">
              {notification.timestamp.toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
          
          <p className="mt-1 text-sm text-gray-600">
            {notification.message}
          </p>
          
          {notification.vehicleInfo && (
            <p className="mt-2 text-xs text-gray-500">
              Véhicule : {notification.vehicleInfo.brand} {notification.vehicleInfo.model} ({notification.vehicleInfo.licensePlate})
            </p>
          )}
          
          <div className="mt-3 flex space-x-2">
            {!notification.isRead && (
              <button
                onClick={() => onMarkAsRead?.(notification.id)}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                Marquer comme lu
              </button>
            )}
            <button
              onClick={() => onDelete?.(notification.id)}
              className="text-xs text-red-600 hover:text-red-800 font-medium"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NotificationCard;
