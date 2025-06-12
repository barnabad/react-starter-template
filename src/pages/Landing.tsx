import { Page } from '@/components';
import { selectCounterValue, useAppSelector } from '@/store';

export const Landing = () => {
  const counterValue = useAppSelector(selectCounterValue);

  return <Page className="bg-green-500">Counter: {counterValue}</Page>;
};
