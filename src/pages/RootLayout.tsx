import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Outlet />
      <Toaster />
    </div>
  );
};
