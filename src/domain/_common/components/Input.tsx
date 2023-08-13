import React from 'react';
import './input.css';

interface InputProps {
  label?: string;
  value?: string;
  errorMessage?: string;
  isError?: boolean;
  checked?: boolean;
}

export const Input = ({ label, value, errorMessage, isError, checked, ...props }: InputProps) => {
  return (
    <>
      <input
        placeholder={label}
        {...props}
        value={value}
        className={`input ${isError === true ? 'input--error' : ''}`}
      />
      {isError === true && <div className="input--error-message">{errorMessage}</div>}
    </>
  );
};
