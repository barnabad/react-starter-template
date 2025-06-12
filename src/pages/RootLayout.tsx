import { Outlet } from 'react-router';

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Outlet />
    </div>
  );
};
