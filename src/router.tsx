import { createBrowserRouter } from 'react-router';

import { About, Landing, RootLayout } from '@/pages';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
