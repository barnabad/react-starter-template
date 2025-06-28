import { Navigate, Outlet } from 'react-router';

import { Route } from '@/config';
import { selectIsLoggedIn, useAppSelector } from '@/store';

export const RedirectAuthenticated = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={Route.HOME} /> : <Outlet />;
};
