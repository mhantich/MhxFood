import { CartItem } from "@/utlits/types";
import { create } from "zustand";



interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
}

const cartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item: CartItem) => {
    set((state) => {
      const existingItem = state.cart.find((i) => i._id === item._id);
 
      if (existingItem) {
        existingItem.quantity += 1;
        return { cart: [...state.cart] };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    });
  },
  removeFromCart: (item: CartItem) => {
    set((state: CartStore) => ({ cart: state.cart.filter((i) => i._id !== item._id) }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));
export default cartStore;