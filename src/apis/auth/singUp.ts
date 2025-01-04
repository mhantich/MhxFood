export const signUp = async (formData: any) => {
    try {
      // Create a FormData object
      const form = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'profileImage' && formData[key]) {
          // For file upload, append the actual file, not just the name
          form.append('profileImage', formData[key]);
        } else {
          form.append(key, formData[key]);
        }
      });
  
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: 'POST',
        body: form // Send FormData directly
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Signup failed');
      }
      
      const data = await response.json();
      return { ok: true, ...data };
    } catch (error) {
      return {
        ok: false,
        message: error instanceof Error ? error.message : 'Signup failed'
      };
    }
  }