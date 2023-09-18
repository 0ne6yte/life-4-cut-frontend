import * as yup from 'yup';

import { type FieldValues, useForm as useReactHookForm } from 'react-hook-form';
import { type UseFormProps } from 'react-hook-form/dist/types';

import { yupResolver } from '@hookform/resolvers/yup';

interface HookProps {
  defaultValues: Record<string, any>;
  schema?: Record<string, yup.Schema<any>>;
}
export function useForm({ defaultValues, schema, ...props }: HookProps & UseFormProps<FieldValues>) {
  return useReactHookForm({
    defaultValues,
    ...(schema !== undefined && { resolver: yupResolver(yup.object().shape(schema)) }),
    ...props,
  });
}
