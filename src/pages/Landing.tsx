import { Link } from 'react-router';

import { Page } from '@/components';
import { Route } from '@/config';

export const Landing = () => {
  return (
    <Page className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">React Starter Template</h1>
      <Link to={Route.ABOUT}>Go to About page</Link>
    </Page>
  );
};
