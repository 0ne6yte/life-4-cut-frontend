import React from 'react';
import './input.css';
import { ReactComponent as CheckMark } from '../../../assets/check-mark.svg';
import { ReactComponent as ErrorMark } from '../../../assets/error-mark.svg';
interface InputProps {
  label?: string;
  defaultValue?: string;
  errorMessage?: string;
  isError?: boolean;
  isChecked?: boolean;
}

export const Input = ({ label, defaultValue, errorMessage, isError, isChecked, ...props }: InputProps) => {
  return (
    <>
      <div className={`input ${isError === true ? 'input--error' : ''}`}>
        <input placeholder={label} {...props} defaultValue={defaultValue} />
        {isChecked === true && <CheckMark />}
        {isError === true && <ErrorMark />}
      </div>
      {isError === true && <div className="input--error-message">{errorMessage}</div>}
    </>
  );
};
