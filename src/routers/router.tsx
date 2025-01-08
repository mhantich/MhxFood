import { RootLayout } from '@/layouts/RootLayout';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './protcatedRoutes';
import PublicRoutes from './PublicRoutes';
import React from 'react';
import { LoadingAnimation } from '@/components/LoadingAnimation';

// Lazy loading pages
const Home = React.lazy(() => import('@/page/Home'));
const RestaurantMenu = React.lazy(() => import('../page/RestaurantMenu'));
const About = React.lazy(() => import('@/page/About'));
const BookingSection = React.lazy(() => import('@/page/BookingSection'));
const BlogSection = React.lazy(() => import('@/components/BlogSection'));
const Login = React.lazy(() => import('@/page/Login'));
const SignUp = React.lazy(() => import('@/page/SingUp'));
const ProfilePage = React.lazy(() => import('@/page/ProfilePage'));
const CheckoutPage = React.lazy(() => import('@/page/CheckoutPage'));
const PaymentSuccessPage = React.lazy(() => import('@/page/PaymentSuccessPage'));
const PaymentCancelPage = React.lazy(() => import('@/page/PaymentCancelPage'));
const NotFoundPage = React.lazy(() => import('@/page/NotFoundPage'));

// Add a fallback for lazy-loaded components
const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <React.Suspense fallback={<LoadingAnimation />}>
    {children}
  </React.Suspense>
);

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { 
        index: true, 
        element: (
          <LazyWrapper>
            <Home />
          </LazyWrapper>
        ) 
      },
      { 
        path: 'Menu', 
        element: (
          <LazyWrapper>
            <RestaurantMenu />
          </LazyWrapper>
        ) 
      },
      { 
        path: 'About', 
        element: (
          <LazyWrapper>
            <About />
          </LazyWrapper>
        ) 
      },
      { 
        path: 'Booking', 
        element: (
          <LazyWrapper>
            <BookingSection />
          </LazyWrapper>
        ) 
      },
      { 
        path: 'Pages', 
        element: (
          <LazyWrapper>
            <BlogSection />
          </LazyWrapper>
        ) 
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoutes>
            <LazyWrapper>
              <ProfilePage />
            </LazyWrapper>
          </ProtectedRoutes>
        ),
      },
      {
        path: 'checkout',
        element: (
          <ProtectedRoutes>
            <LazyWrapper>
              <CheckoutPage />
            </LazyWrapper>
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: 'login',
    element: (
      <PublicRoutes>
        <LazyWrapper>
          <Login />
        </LazyWrapper>
      </PublicRoutes>
    ),
  },
  {
    path: 'signup',
    element: (
      <PublicRoutes>
        <LazyWrapper>
          <SignUp />
        </LazyWrapper>
      </PublicRoutes>
    ),
  },
  {
    path: '/success',
    element: (
      <LazyWrapper>
        <PaymentSuccessPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/cancel',
    element: (
      <LazyWrapper>
        <PaymentCancelPage />
      </LazyWrapper>
    ),
  },
  {
    path: '/*',
    element: (
      <LazyWrapper>
        <NotFoundPage />
      </LazyWrapper>
    ),
  },
]);
