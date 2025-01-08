import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/stores/userStore';
import toast from 'react-hot-toast';


import { login } from '@/apis/auth/login';
import { useAuthStore } from '@/stores/authStore';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const setUser = useUserStore((state) => state.setUser);
  const { setAuthState } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });

  const onSubmit = async (data:any) => {
    try {
   
      const result = await login(data.email, data.password);

   if(result.status){
    toast.success(result.message);

    setAuthState(true);
    
    setUser({
      token: result.token,
      user: result.user
    });
    navigate('/profile');
   }

      // Save user data to Zustand store
      if (data.rememberMe) {
        localStorage.setItem('token', result.token);
      }

      // navigate('/profile');
    } catch (err:any) {
      setError(err?.message);
    }
  };

  return (
    <div  style={{backgroundImage: `url(hero-img.jpg)`}} className="min-h-screen relative bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Background elements */}
      <div className='bg-black/70 w-full h-full absolute top-0 left-0'  z-10 />
   


      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red-500" />
            </div>
          </motion.div>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h1 className="text-2xl font-bold text-center mb-8">Login</h1>
          <p className="text-center text-gray-600 text-sm mb-8">
            More than <span className="text-pink-500">15,000 recipes</span> from around the world!
          </p>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm text-center"
            >
              {error}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <input
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </motion.div>

          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                {...register('rememberMe')}
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-gray-600 hover:text-pink-500">
              Forgot Password?
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors disabled:bg-pink-300"
            type="submit"
          >
            {isSubmitting ? 'LOGGING IN...' : 'LOGIN'}
          </motion.button>

          <div className="text-center text-sm text-gray-600"> 
            <p className="capitalize">Don't have an account?</p>
            <Link className="text-red-400 capitalize underline" to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="fixed bottom-4 flex space-x-8 text-sm text-gray-600"
      >
        <Link to="/explore" className="hover:text-pink-500">Explore</Link>
        <Link to="/what" className="hover:text-pink-500">What</Link>
        <Link to="/help" className="hover:text-pink-500">Help & Feedback</Link>
        <Link to="/contact" className="hover:text-pink-500">Contact</Link>
      </motion.div>
    </div>
  );
};

export default Login;