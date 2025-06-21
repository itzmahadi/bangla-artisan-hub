
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'artisan' | 'admin';
  avatar?: string;
  bio?: string;
  location?: string;
  specialties?: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users data
const demoUsers: (User & { password: string })[] = [
  {
    id: '1',
    name: 'Rashida Khatun',
    email: 'rashida@example.com',
    password: 'password123',
    role: 'artisan',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Traditional Kantha embroidery artist from Jessore with 15 years of experience.',
    location: 'Jessore, Bangladesh',
    specialties: ['Kantha Embroidery', 'Traditional Textiles']
  },
  {
    id: '2',
    name: 'Kamal Uddin',
    email: 'kamal@example.com',
    password: 'password123',
    role: 'artisan',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Master potter creating traditional terracotta items and modern ceramics.',
    location: 'Comilla, Bangladesh',
    specialties: ['Pottery', 'Terracotta', 'Ceramics']
  },
  {
    id: '3',
    name: 'Fatima Begum',
    email: 'fatima@example.com',
    password: 'password123',
    role: 'artisan',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Skilled weaver specializing in traditional Jamdani sarees.',
    location: 'Narayanganj, Bangladesh',
    specialties: ['Jamdani Weaving', 'Handloom', 'Sarees']
  },
  {
    id: '4',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Platform administrator managing artisan verifications.',
    location: 'Dhaka, Bangladesh',
    specialties: ['Platform Management']
  },
  {
    id: '5',
    name: 'Sarah Ahmed',
    email: 'sarah@example.com',
    password: 'password123',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    bio: 'Art enthusiast and collector supporting local artisans.',
    location: 'Dhaka, Bangladesh',
    specialties: ['Art Collection']
  }
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = demoUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (userData: Omit<User, 'id'> & { password: string }): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const existingUser = demoUsers.find(u => u.email === userData.email);
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    // Create new user
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      avatar: userData.avatar,
      bio: userData.bio,
      location: userData.location,
      specialties: userData.specialties
    };
    
    // Add to demo users (in real app, this would be API call)
    demoUsers.push({ ...newUser, password: userData.password });
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { demoUsers };
