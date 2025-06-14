import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { DEFAULT_PAGE_TITLE } from '@/config';
import { cn } from '@/utils';

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  pageTitle?: string;
}

export const Page = ({
  children,
  className,
  pageTitle,
  ...rest
}: PageProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (pageTitle) {
      document.title = t(pageTitle);
    } else {
      document.title = t(DEFAULT_PAGE_TITLE);
    }
  }, [pageTitle, t]);

  return (
    <div className={cn('flex-grow', className)} {...rest}>
      {children}
    </div>
  );
};
