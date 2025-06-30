import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';

import { Header } from '@/components';
import { TOAST_POSITION } from '@/config';

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <Outlet />

      <Toaster position={TOAST_POSITION} />
    </div>
  );
};
