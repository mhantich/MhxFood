import { RouterProvider } from 'react-router-dom';
import { routers } from './routers/router';
import { checkAuth } from './apis/auth/checkAuth';
import { useUserStore } from './stores/userStore';
import { useAuthStore } from './stores/authStore';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';



function App() {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);
  const { setAuthState, setLoading } = useAuthStore();





  useEffect(() =>  {

     const validateAuth = async () => {
      const storedToken = localStorage.getItem('token');
      
      if (!storedToken) {

        setLoading(false);
        setAuthState(false);
        return;
      }

     try {

     
        const response = await checkAuth(storedToken);   
        if (response.valid) {
          setAuthState(true);
          setUser(response.user );
          setToken(storedToken);
        } else {
          
          setUser(null );
          setToken(null);
          setAuthState(false);
        }
      } catch (err) {
        localStorage.removeItem('token');
        setUser(null );
        setToken(null);
        setAuthState(false);
      } finally {
        setLoading(false);
     }
    };

    validateAuth();
   }, []); 

  return (
<div>
  <Toaster />
  <RouterProvider router={routers} />
</div>

  )
}

export default App