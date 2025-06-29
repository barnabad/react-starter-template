import { useEffect } from 'react';

import { useRedirect } from '@/hooks';
import {
  login,
  selectIsLoggedIn,
  useAppDispatch,
  useAppSelector,
} from '@/store';

export const Login = () => {
  const redirect = useRedirect();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLoginClick = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (isLoggedIn) {
      redirect();
    }
  }, [isLoggedIn, redirect]);

  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};
