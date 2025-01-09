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

    if (userData.token && userData.user) {
      localStorage.setItem('token', userData.token);
      localStorage.setItem('user', JSON.stringify(userData.user));
    }
    set({ user: userData.user , token: userData.token});
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({ user: null, token: null });
  }
}));

