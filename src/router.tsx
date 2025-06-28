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
import { RootLoader, WithSuspense } from '@/components';

const router = createBrowserRouter([
  {
    element: (
      <WithSuspense fallback={<RootLoader />} element={<RootLayout />} />
    ),
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
