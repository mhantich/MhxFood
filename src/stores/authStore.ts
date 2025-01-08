import { create } from 'zustand';

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  setAuthState: (isAuthenticated: boolean) => void;
  setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: true,
  isAuthenticated: false,
  setAuthState: (isAuthenticated: boolean) => set({ isAuthenticated }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
}));