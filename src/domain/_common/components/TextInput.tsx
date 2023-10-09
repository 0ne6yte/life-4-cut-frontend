import React from 'react';
import { Controller, type UseFormReturn } from 'react-hook-form';

import { ReactComponent as CheckMark } from '@/assets/check-mark.svg';
import { ReactComponent as ErrorMark } from '@/assets/error-mark.svg';

interface InputProps {
  name: string;
  control: UseFormReturn<any>['control'];
  label?: string;
  useCheckmark?: boolean;
}

export function TextInput({ name, label, control, useCheckmark = false, ...props }: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error, invalid, isDirty } }) => (
        <div className="flex flex-col">
          <div
            className={`p-[12px] border-grey-placeholder border-[1px] border-solid rounded-[12px] w-full min-w-[336px] flex items-center bg-white ${
              error ? 'border-red-default' : ''
            }`}
          >
            <input
              placeholder={label}
              {...props}
              {...field}
              className={`w-full border-none outline-none text-[13px] font-bold placeholder:text-grey-placeholder ${
                error ? 'text-red-default' : ''
              }`}
            />
            {useCheckmark && !invalid && isDirty && <CheckMark />}
            {error && <ErrorMark />}
          </div>
          {error && <div className="text-red-default text-[9px] font-bold mt-[8px] ml-[12px]">{error.message}</div>}
        </div>
      )}
    />
  );
}
