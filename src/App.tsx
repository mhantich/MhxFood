import { RouterProvider } from 'react-router-dom';
import { routers } from './routers/router';
import { checkAuth } from './apis/auth/checkAuth';
import { useUserStore } from './stores/userStore';
import { useAuthStore } from './stores/authStore';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';



function App() {
  const token = localStorage.getItem('token');
  const setUser = useUserStore((state) => state.setUser);
  const { setAuthState, setLoading } = useAuthStore();



useEffect(() => {
  const validateAuth = async () => {
    if (!token) {
      setLoading(false);
      setAuthState(false);
      return;
    }

    try {
      const response = await checkAuth(token);
      setUser({
        user: response.user,
        token: response.token
      });
      setAuthState(true);
    } catch (err) {
      localStorage.removeItem('token');
      setUser({ user: null, token: null });
      setAuthState(false);
    } finally {
      setLoading(false);
    }
  };

  validateAuth();
}, [token, setUser, setAuthState, setLoading]);


  return (
<div>
  <Toaster />
  <RouterProvider router={routers} />
</div>

  )
}

export default App