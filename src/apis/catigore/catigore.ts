export const getCatigore = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL_2}/api/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}   