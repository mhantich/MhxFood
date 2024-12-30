
import { RootLayout } from '@/layouts/RootLayout';
import Home from '@/page/Home';

import { createBrowserRouter } from 'react-router-dom';
import RestaurantMenu from '../page/RestaurantMenu';
import About from '@/page/About';
import BookingSection from '@/page/BookingSection';
import BlogSection from '@/components/BlogSection';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Menu', element: <RestaurantMenu /> },
      { path: 'About', element: <About /> },
      { path: 'Conatct', element: <BookingSection /> },
      { path: 'Pages', element: <BlogSection /> },
    //   { path: 'singup', element: <Singup /> },
      {
        path: 'profile',
        // element: (
        // //   <ProtectedRoute>
        // //     <ProfilePage />
        // //   </ProtectedRoute>
        // ),
      },
    ],
  },
]);