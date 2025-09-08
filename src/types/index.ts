// Types pour l'authentification
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Types pour les véhicules
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  qrCode: string;
  isActive: boolean;
  lastNotification?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface VehicleFormData {
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
}

// Types pour les notifications
export type NotificationType = 'info' | 'warning' | 'urgent';

export interface Notification {
  id: string;
  type: NotificationType;
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
  senderId?: string;
  createdAt?: Date;
}

// Types pour les QR codes
export interface QRCodeData {
  vehicleId: string;
  qrCode: string;
  isActive: boolean;
  createdAt: Date;
}

// Types pour les formulaires
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Types pour les préférences utilisateur
export interface UserPreferences {
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  language: 'fr' | 'en';
  timezone: string;
}

// Types pour l'API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Types pour les erreurs
export interface FormError {
  field: string;
  message: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}
