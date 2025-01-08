import { Order } from "@/utlits/types";

export const createOrder = async (order: Order) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order/reservation-order`, {
        method: 'POST',
        body: JSON.stringify(order),
    });
    return response.json();
}