import { Route } from '@/config';
import { Navigate, Outlet } from 'react-router';

const isLoggedIn = true;

export const ProtectedLayout = () => {
  return isLoggedIn ? <Outlet /> : <Navigate to={Route.LOGIN} />;
};
