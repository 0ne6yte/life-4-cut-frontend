import React, { type ReactNode } from 'react';

interface ButtonProps {
  isDisabled: boolean;
  type: 'normal' | 'text' | 'primary' | 'large';
  onClick: () => void;
  children?: ReactNode;
}

const buttonStyle = {
  text: 'text-grey-buttontext active:bg-grey-background disabled:text-grey-whitegray disabled:bg-opacity-0',
  normal:
    'text-grey-buttontext bg-grey-background active:bg-grey-placeholder disabled:text-grey-whitegray disabled:bg-grey-background',
  primary: 'text-white bg-primary-default active:bg-primary-touch disabled:bg-primary-disabled',
  large: 'text-white bg-red-default w-full min-w-[336px] h-11 active:bg-red-touch disabled:bg-red-disabled',
};

export const Button = ({ type, isDisabled, onClick, children }: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`bg-transparent border-none rounded-lg text-sm font-bold w-40 h-11 ${buttonStyle[type]}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
