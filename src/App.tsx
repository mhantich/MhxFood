import { RouterProvider } from 'react-router-dom';
import { routers } from './routers/router';
import { useUserStore } from './stores/userStore';
import { useEffect, useState } from 'react';
import { checkAuth } from './apis/auth/checkAuth';

function App() {
  const token = localStorage.getItem('token');
  const setUser = useUserStore((state) => state.setUser);
  const [error, setError] = useState('');

// validate-token'
const onSubmit = async () => {
  try {
    const response = await checkAuth(token as string);
 console.log(token);
    // Save user data to Zustand store
    setUser({
      user: response.user,
      token: response.token
    });
      if(response.ok){
      }
      
  } catch (err:any) {
    setError(err?.message);
  
  }
};
useEffect(() => {
  onSubmit();
}, []);
console.log(error);

  return (

     <RouterProvider router={routers} />

  )
}

export default App