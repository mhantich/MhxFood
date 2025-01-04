
import { RootLayout } from '@/layouts/RootLayout';
import Home from '@/page/Home';
import { createBrowserRouter } from 'react-router-dom';
import RestaurantMenu from '../page/RestaurantMenu';
import About from '@/page/About';
import BookingSection from '@/page/BookingSection';
import BlogSection from '@/components/BlogSection';
import Login from '@/page/Login';
import SingUp from '@/page/SingUp';
import ProfilePage from '@/page/ProfilePage';
import ProtectedRoutes from './protcatedRoutes';
import CheckoutPage from '@/page/CheckoutPage';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Menu', element: <RestaurantMenu /> },
      { path: 'About', element: <About /> },
      { path: 'Booking', element: <BookingSection /> },
      { path: 'Pages', element: <BlogSection /> },
     
      {
        path: 'profile',
        element: (
          <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
          ),
      },
      {
        path:'checkout',
        element:(
          <ProtectedRoutes>
            <CheckoutPage/>
          </ProtectedRoutes>
        )
      }
    ],
  },
  {
    path:'login',
    element:<Login/>

  },
  {
    path:'signup',
    element:<SingUp/>

  }
]);