import { User } from '@/utlits/types';
import { create } from 'zustand';


type UserStore = {
  user: User | null;
  token: string | null;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

// Initialize store with data from localStorage if available
const getInitialState = () => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token')
});

export const useUserStore = create<UserStore>((set) => ({
  ...getInitialState(),
  setUser: (user) => {

    localStorage.setItem('user', JSON.stringify(user));
    set({user});

  },
  setToken: (token: string | null) => {

    if (token) {
      localStorage.setItem('token', token);

      set({ token });
    }
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({ user: null, token: null });
  }
}));