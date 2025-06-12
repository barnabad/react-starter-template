import { cn } from '@/utils/cn';

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Page = ({ children, className, ...rest }: PageProps) => {
  return (
    <div className={cn('flex-grow', className)} {...rest}>
      {children}
    </div>
  );
};
