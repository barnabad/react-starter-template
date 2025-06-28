import { Navigate, Outlet } from 'react-router';

import { Route } from '@/config';
import { selectIsLoggedIn, useAppSelector } from '@/store';

export const ProtectedRoute = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={Route.LOGIN} />;
};
