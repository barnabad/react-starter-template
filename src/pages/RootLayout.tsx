import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

import { Header } from '@/components';
import { TOAST_POSITION } from '@/config';

console.log('Test');

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <Outlet />

      <Toaster position={TOAST_POSITION} />
    </div>
  );
};
