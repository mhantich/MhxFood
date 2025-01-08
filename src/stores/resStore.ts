import { Reservation } from "@/utlits/types"
import { create } from "zustand";
interface resStore {
  reservation: Reservation | null;
  setReservation: (reservation: Reservation) => void;
}

const getInitialState = () => ({
  reservation: null,
});

export const useReservationStore = create<resStore>((set) => ({
  ...getInitialState(),
  setReservation: (reservation: Reservation) => {
    set({ reservation });
  },
}));

export default resStore