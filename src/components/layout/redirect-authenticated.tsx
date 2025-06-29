import { Navigate } from 'react-router';

import { Route } from '@/config';
import { selectIsLoggedIn, useAppSelector } from '@/store';

interface RedirectAuthenticatedProps {
  children: React.ReactNode;
}

export const RedirectAuthenticated = ({
  children,
}: RedirectAuthenticatedProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={Route.HOME} /> : children;
};
