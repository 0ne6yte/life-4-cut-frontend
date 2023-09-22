import * as yup from 'yup';

import { type FieldValues, useForm as useReactHookForm } from 'react-hook-form';
import { type UseFormProps } from 'react-hook-form/dist/types';

import { yupResolver } from '@hookform/resolvers/yup';

interface HookProps<T> {
  defaultValues: T;
  schema?: Record<string, yup.Schema>;
}
export function useForm<T>({ defaultValues, schema, ...props }: HookProps<T> & UseFormProps<FieldValues>) {
  return useReactHookForm({
    defaultValues,
    ...(schema !== undefined && { resolver: yupResolver(yup.object().shape(schema)) }),
    ...props,
  });
}
