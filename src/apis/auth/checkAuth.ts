export const checkAuth = async (token:string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/validate-token`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            credentials: 'include', 

        },
    });
    const data = await response.json();
    return data;
}   