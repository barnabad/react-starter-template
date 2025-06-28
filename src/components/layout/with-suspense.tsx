import { Suspense } from 'react';

interface WithSuspenseProps {
  fallback: React.ReactNode;
  element: React.ReactNode;
}

export const WithSuspense = ({ fallback, element }: WithSuspenseProps) => {
  return <Suspense fallback={fallback}>{element}</Suspense>;
};
