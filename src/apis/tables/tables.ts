export const getTables = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tables`);
    return response.json();
  };