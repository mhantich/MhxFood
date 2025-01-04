import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/stores/userStore';
import { signUp } from '@/apis/auth/singUp';
interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  profileImage?: FileList;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const setUser = useUserStore((state) => state.setUser);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      profileImage:undefined
    }
  });

  const profileImage = watch('profileImage');

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const formData = {
        ...data,
        profileImage: data?.profileImage?.[0] || undefined // Pass the actual file
      };
  
      const result = await signUp(formData);
  
      if (!result.ok) {
        throw new Error(result.message || 'Sign up failed');
      }
  
      setUser({
        token: result.token,
        user: result.user
      });
  
      navigate('/profile');
    } catch (err: any) {
      setError(err?.message);
    }
  };

  useEffect(() => {
    if (profileImage?.[0]) {
      setPreview(URL.createObjectURL(profileImage[0]));
      return () => URL.revokeObjectURL(preview as string);
    }
  }, [profileImage]);

  return (
    <div  style={{backgroundImage: `url(hero-img.jpg)`}} className="min-h-screen relative bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Background elements */}
      <div className='bg-black/70 w-full h-full absolute top-0 left-0'  z-10 />
      {/* Main form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <label htmlFor="profileImage" className="cursor-pointer">
              {preview ? (
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img src={preview} alt="Profile preview" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Upload Photo</span>
                </div>
              )}
            </label>
          </motion.div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h1 className="text-2xl font-bold text-center mb-8">Sign Up</h1>
          <p className="text-center text-gray-600 text-sm mb-8">
            Join our community of <span className="text-pink-500">food lovers</span>!
          </p>

          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm text-center">
              {error}
            </motion.div>
          )}

          <input
            type="file"
            id="profileImage"
            accept="image/*"
            className="hidden"
            {...register('profileImage')}
          />

          <motion.div>
            <input
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </motion.div>

          <motion.div>
            <input
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: { value: /^[0-9\s\-\+\(\)]{8,}$/, message: 'Please enter a valid phone number' }
              })}
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </motion.div>

          <motion.div>
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
              })}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </motion.div>

          <motion.div>
            <input
              {...register('password', { 
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' }
              })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-pink-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </motion.div>


          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors disabled:bg-pink-300"
            type="submit"
          >
            {isSubmitting ? 'SIGNING UP...' : 'SIGN UP'}
          </motion.button>

          <div className="text-center text-sm text-gray-600">
            <p className="capitalize">Already have an account?</p>
            <Link className="text-red-400 capitalize underline" to="/login">Login</Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;