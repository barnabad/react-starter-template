import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Page } from '@/components';
import { Route } from '@/config';

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <Page className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">{t('COMMON.TITLE')}</h1>
      <Link to={Route.ABOUT}>{t('COMMON.LINK')}</Link>
    </Page>
  );
};
