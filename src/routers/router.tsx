import { RootLayout } from '@/layouts/RootLayout';
import Home from '@/page/Home';
import { createBrowserRouter } from 'react-router-dom';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
    //   { path: 'rooms', element: <RoomsPage /> },
    //   { path: 'booking', element: <BookingPage /> },
    //   { path: 'login', element: <Login /> },
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