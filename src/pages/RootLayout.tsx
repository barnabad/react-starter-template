import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

import { Header } from '@/components';

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <Outlet />

      <Toaster />
    </div>
  );
};
