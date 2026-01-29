import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserProfile {
  name: string;
  email: string;
  progress: Record<string, number>; // e.g., { "m1": 100, "m2": 45 }
  scores: Record<string, number>;
  certificates: Array<{id: string, courseTitle: string, date: string}>;
}

interface AuthContextType {
  user: UserProfile | null;
  login: (email: string) => void;
  logout: () => void;
  updateProgress: (moduleId: string, percent: number) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  // Load user data on startup to resume session
  useEffect(() => {
    const savedUser = localStorage.getItem('rtl_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email: string) => {
    const mockUser = { name: "Learner", email, progress: {}, scores: {}, certificates: [] };
    setUser(mockUser);
    localStorage.setItem('rtl_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rtl_user');
  };

  const updateProgress = (moduleId: string, percent: number) => {
    if (!user) return;
    const updatedUser = { ...user, progress: { ...user.progress, [moduleId]: percent } };
    setUser(updatedUser);
    localStorage.setItem('rtl_user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProgress }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
