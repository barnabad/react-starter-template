import { createBrowserRouter } from 'react-router';

import { ProtectedRoute, RootLoader, WithSuspense } from '@/components';
import { About, Home, Login, RootLayout } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <WithSuspense fallback={<RootLoader />} element={<RootLayout />} />
    ),
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Home />,
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
