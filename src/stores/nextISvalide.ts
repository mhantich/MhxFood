import { create } from 'zustand';



type isValideStore = {
  isValide: boolean;
  setIsValide: (isValide: boolean) => void;
}

// Initialize store with data from localStorage if available
const getInitialState = () => ({
   isValide: false


});

export const useIsValideStore = create<isValideStore>((set) => ({
  ...getInitialState(),
  setIsValide: (isValide: boolean) => {
    set({ isValide });
  },
}));

