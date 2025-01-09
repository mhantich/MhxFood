const profileReservation = async (userId: string , token: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/order/user-orders/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      credentials: 'include', // Include cookies if required
    }
  });
  return response.json();
};

export default profileReservation;

