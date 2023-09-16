import React from 'react';
import { Controller, type UseFormReturn } from 'react-hook-form';

import { ReactComponent as CheckMark } from '@/assets/check-mark.svg';
import { ReactComponent as ErrorMark } from '@/assets/error-mark.svg';

import './textInput.css';

interface InputProps {
  name: string;
  control: UseFormReturn<any>['control'];
  label?: string;
  useCheckmark?: boolean;
}

export const TextInput = ({ name, label, control, useCheckmark = false, ...props }: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error, invalid, isDirty } }) => (
        <>
          <div className={`input ${error !== undefined ? 'input--error' : ''}`}>
            <input placeholder={label} {...props} {...field} />
            {useCheckmark && !invalid && isDirty && <CheckMark />}
            {error !== undefined && <ErrorMark />}
          </div>
          {error !== undefined && <div className="input--error-message">{error.message}</div>}
        </>
      )}
    />
  );
};
