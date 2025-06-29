import type { Route } from '@/config';

export const getReturnPath = (redirectTo: Route) => {
  const returnPath = btoa(
    window.location.pathname + window.location.search + window.location.hash
  );

  return redirectTo + '?returnTo=' + returnPath;
};
