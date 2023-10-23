import { type UseFormReturn } from 'react-hook-form';

export interface FunnelProps {
  control: UseFormReturn<any>['control'];
  onNext?: () => void;
}
