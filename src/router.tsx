import { createBrowserRouter } from 'react-router';

import { Landing, RootLayout } from './pages';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
    ],
  },
]);

export default router;
