import { Route } from '@/config';
import { useNavigate, useSearchParams } from 'react-router';

export const useRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const returnToSearchParam = searchParams.get('returnTo');

  let returnPath = Route.HOME;

  if (returnToSearchParam) {
    returnPath = atob(returnToSearchParam) as Route;
  }

  return () => {
    navigate(returnPath, { replace: true });
  };
};
