import React, { type ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  variant?: 'text' | 'contained';
  color?: 'grey' | 'primary' | 'red';
  type?: 'button' | 'submit';
  onClick?: () => void;
  children?: ReactNode;
}

const buttonStyle = {
  grey: {
    text: 'text-grey-buttontext active:bg-grey-buttontext active:bg-opacity-10 disabled:text-grey-placeholder disabled:bg-transparent',
    contained:
      'text-grey-buttontext bg-grey-background active:bg-grey-placeholder disabled:text-grey-placeholder disabled:bg-grey-whitegray',
  },
  primary: {
    text: 'text-primary-default active:bg-primary-default active:bg-opacity-10 disabled:text-primary-disabled disabled:bg-transparent',
    contained: 'text-white bg-primary-default active:bg-primary-touch disabled:bg-primary-disabled',
  },
  red: {
    text: 'text-red-default active:bg-red-default active:bg-opacity-10 disabled:text-red-disabled disabled:bg-transparent',
    contained: 'text-white bg-red-default active:bg-red-touch disabled:bg-red-disabled',
  },
};

export function Button({
  disabled = false,
  variant = 'text',
  color = 'grey',
  onClick,
  children,
  type = 'submit',
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`border-none rounded-lg text-sm font-bold w-40 h-11 ${buttonStyle[color][variant]}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
