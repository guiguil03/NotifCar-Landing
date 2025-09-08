import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté au chargement
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('notifcar_token');
        if (token) {
          // Simuler une vérification du token
          // En réalité, vous feriez un appel API
          const userData = localStorage.getItem('notifcar_user');
          if (userData) {
            setUser(JSON.parse(userData));
          }
        }
      } catch (error) {
        console.error('Erreur lors de la vérification de l\'authentification:', error);
        localStorage.removeItem('notifcar_token');
        localStorage.removeItem('notifcar_user');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, _password: string) => {
    setIsLoading(true);
    try {
      // Simuler un appel API de connexion
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const userData: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        phone: '+33 6 12 34 56 78',
        address: '123 Rue de la Paix, 75001 Paris',
      };

      const token = 'mock_jwt_token_' + Date.now();
      
      localStorage.setItem('notifcar_token', token);
      localStorage.setItem('notifcar_user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      throw new Error('Erreur lors de la connexion');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, _password: string) => {
    setIsLoading(true);
    try {
      // Simuler un appel API d'inscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const userData: User = {
        id: '1',
        name: name,
        email: email,
      };

      const token = 'mock_jwt_token_' + Date.now();
      
      localStorage.setItem('notifcar_token', token);
      localStorage.setItem('notifcar_user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      throw new Error('Erreur lors de l\'inscription');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('notifcar_token');
    localStorage.removeItem('notifcar_user');
    setUser(null);
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('notifcar_user', JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
};
