import { useEffect } from 'react';

import { DEFAULT_PAGE_TITLE } from '@/config';
import { cn } from '@/utils/cn';

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  pageTitle?: string;
}

export const Page = ({
  children,
  className,
  pageTitle,
  ...rest
}: PageProps) => {
  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle;
    } else {
      document.title = DEFAULT_PAGE_TITLE;
    }
  }, [pageTitle]);

  return (
    <div className={cn('flex-grow', className)} {...rest}>
      {children}
    </div>
  );
};
