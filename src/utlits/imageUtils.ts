const API_URL = import.meta.env.VITE_API_URL;

export const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) {
    return '/default-avatar.png'; // Fallback image
  }
  
  // Remove 'uploads\\' or 'uploads/' from the path if present
  const cleanPath = imagePath.replace(/^uploads[\\\/]/, '');
  return `${API_URL}/uploads/${cleanPath}`;
};