import { useTranslation } from 'react-i18next';

import { LanguageSelector } from '@/components';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between p-2 shadow-md">
      <div className="text-lg font-bold">{t('APP.NAME')}</div>

      <LanguageSelector />
    </header>
  );
};
