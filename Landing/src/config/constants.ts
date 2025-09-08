// Configuration de l'application Notifcar

export const APP_CONFIG = {
  name: 'Notifcar',
  version: '1.0.0',
  description: 'Votre véhicule vous parle, écoutez-le',
  slogan: 'Votre véhicule vous parle, écoutez-le',
} as const;

export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      logout: '/auth/logout',
      refresh: '/auth/refresh',
    },
    vehicles: {
      list: '/vehicles',
      create: '/vehicles',
      update: '/vehicles/:id',
      delete: '/vehicles/:id',
      qrCode: '/vehicles/:id/qr-code',
    },
    notifications: {
      list: '/notifications',
      create: '/notifications',
      markAsRead: '/notifications/:id/read',
      delete: '/notifications/:id',
    },
    users: {
      profile: '/users/profile',
      update: '/users/profile',
      preferences: '/users/preferences',
    },
  },
} as const;

export const QR_CODE_CONFIG = {
  baseUrl: import.meta.env.VITE_QR_CODE_BASE_URL || 'https://notifcar.com/qr',
  size: 256,
  format: 'png',
  errorCorrectionLevel: 'M',
} as const;

export const NOTIFICATION_TYPES = {
  info: {
    label: 'Information',
    color: 'blue',
    icon: 'info',
  },
  warning: {
    label: 'Attention',
    color: 'orange',
    icon: 'warning',
  },
  urgent: {
    label: 'Urgent',
    color: 'red',
    icon: 'alert',
  },
} as const;

export const VEHICLE_BRANDS = [
  'Renault',
  'Peugeot',
  'Citroën',
  'Volkswagen',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Toyota',
  'Ford',
  'Opel',
  'Nissan',
  'Hyundai',
  'Kia',
  'Fiat',
  'Skoda',
  'Seat',
  'Dacia',
  'Autre',
] as const;

export const FORM_VALIDATION = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Veuillez entrer une adresse email valide',
  },
  password: {
    minLength: 6,
    message: 'Le mot de passe doit contenir au moins 6 caractères',
  },
  phone: {
    pattern: /^(\+33|0)[1-9](\d{8})$/,
    message: 'Veuillez entrer un numéro de téléphone français valide',
  },
  licensePlate: {
    pattern: /^[A-Z]{2}-\d{3}-[A-Z]{2}$/,
    message: 'Format de plaque invalide (ex: AB-123-CD)',
  },
} as const;

export const ROUTES = {
  landing: '/',
  auth: '/auth',
  dashboard: '/dashboard',
  profile: '/profile',
  vehicles: '/vehicles',
  notifications: '/notifications',
  scan: '/scan',
} as const;

export const STORAGE_KEYS = {
  token: 'notifcar_token',
  user: 'notifcar_user',
  preferences: 'notifcar_preferences',
  theme: 'notifcar_theme',
} as const;

export const THEME_COLORS = {
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  accent: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
} as const;
