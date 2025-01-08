import { User } from '@/utlits/types';
import { create } from 'zustand';



type UserStore = {
  user: User | null;
  token: string | null;
  setUser: (userData: { user: User | null; token: string | null }) => void;
  logout: () => void;
}

// Initialize store with data from localStorage if available
const getInitialState = () => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token')
});

export const useUserStore = create<UserStore>((set) => ({
  ...getInitialState(),
  setUser: (userData: { user: User | null; token: string | null }) => {

    if (userData.token) {
      localStorage.setItem('token', userData.token);
    }
    set({ user: userData.user});
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({ user: null, token: null });
  }
}));

