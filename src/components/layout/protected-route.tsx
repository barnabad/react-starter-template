import { Navigate, Outlet } from 'react-router';

import { Route } from '@/config';
import { selectIsLoggedIn, useAppSelector } from '@/store';
import { getReturnPath } from '@/utils';

export const ProtectedRoute = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={getReturnPath(Route.LOGIN)} replace />
  );
};
