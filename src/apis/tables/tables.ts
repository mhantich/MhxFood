export const getTables = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tables`);
    return response.json();
  };


export const checkAvailability = async (tableId: string, reservationDate: string, startTime: string, endTime: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tables/checkAvailability?tableId=${tableId}&reservationDate=${reservationDate}&startTime=${startTime}&endTime=${endTime}`);
    return response.json();
  };
