import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';

import {
  About,
  Landing,
  Login,
  Profile,
  ProtectedLayout,
  RootLayout,
  Signup,
} from '@/pages';

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    element: withSuspense(<RootLayout />),
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/about',
            element: <About />,
          },
        ],
      },
    ],
  },
]);

export default router;
