import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { LanguageSelector } from '@/components';
import { Route } from '@/config';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between p-2 shadow-md">
      <Link to={Route.HOME} className="text-lg font-bold">
        {t('APP.NAME')}
      </Link>

      <LanguageSelector />
    </header>
  );
};
