import { type Control, type FieldValues, type UseFormReturn } from 'react-hook-form';

export interface FunnelProps {
  control: Control<any, any>;
  onNext?: () => void;
}
