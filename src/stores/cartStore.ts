import { create } from "zustand";

interface CartItem {
  // define your cart item properties here
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // ... other properties
}

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
      const existingItem = state.cart.find((i) => i.id === item.id);
      console.log(existingItem);
      console.log(item);
      if (existingItem) {
        existingItem.quantity += 1;
        return { cart: [...state.cart] };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    });
  },
  removeFromCart: (item: CartItem) => {
    set((state: CartStore) => ({ cart: state.cart.filter((i) => i.id !== item.id) }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));
export default cartStore;