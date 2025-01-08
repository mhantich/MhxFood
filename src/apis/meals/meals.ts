// services/mealApi.js
export const getMeals = async ({
    category = '',
    minPrice = '',
    maxPrice = '',
    isPopular = '',
    page = 1,
    sortBy = '',
    search = '',
    limit = 10
  } = {}) => {
    try {
      // Build query string
      const params = new URLSearchParams();

      
      // Only add parameters that have values
      if (category) params.append('category', category.toString());
      if (search) params.append('search', search.toString());
      if (minPrice) params.append('minPrice', minPrice.toString());
      if (maxPrice) params.append('maxPrice', maxPrice.toString());
      if (isPopular) params.append('isPopular', isPopular.toString());
      if (page) params.append('page', page.toString());
      if (limit) params.append('limit', limit.toString());
      if (sortBy) params.append('sortBy', sortBy);
      


  
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/meals?${params.toString()}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };