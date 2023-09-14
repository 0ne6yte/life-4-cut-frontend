import React from 'react';

interface ButtonProps {
  status: 'default' | 'disabled';
  type: 'normal' | 'text' | 'primary' | 'large';
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const buttonStyle = {
  default: 'bg-transparent border-none rounded-lg text-sm font-bold w-40 h-11',
  text: 'text-grey-buttontext disabled:text-grey-whitegray bg-[rgba(236, 236, 236, 0.4)] active:bg-grey-background',
  normal: 'text-grey-buttontext disabled:text-grey-whitegray bg-grey-background active:bg-grey-placeholder',
  primary: 'text-white bg-primary-default disabled:bg-primary-disabled active:bg-primary-touch',
  large: 'text-white bg-red-default w-full min-w-[336px] h-11 disabled:bg-red-disabled active:bg-red-touch',
};

export const Button = ({ type, status, onClickHandler, children }: ButtonProps) => {
  const isButtonDisabled = status === 'disabled';

  return (
    <button
      className={`${buttonStyle.default} ${buttonStyle[type]}`}
      disabled={isButtonDisabled}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
