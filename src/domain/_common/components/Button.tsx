import React from 'react';

interface ButtonProps {
  isDisabled: boolean;
  type: 'normal' | 'text' | 'primary' | 'large';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const buttonStyle = {
  text: 'text-grey-buttontext disabled:text-grey-whitegray bg-[rgba(236, 236, 236, 0.4)] active:bg-grey-background',
  normal: 'text-grey-buttontext disabled:text-grey-whitegray bg-grey-background active:bg-grey-placeholder',
  primary: 'text-white bg-primary-default disabled:bg-primary-disabled active:bg-primary-touch',
  large: 'text-white bg-red-default w-full min-w-[336px] h-11 disabled:bg-red-disabled active:bg-red-touch',
};

export const Button = ({ type, isDisabled, onClick, children }: ButtonProps) => {
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
