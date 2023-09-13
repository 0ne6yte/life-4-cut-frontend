import React from 'react';

// import './button.css';

interface ButtonProps {
  status: 'default' | 'disabled';
  type: 'normal' | 'text' | 'primary' | 'large';
  textContent: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ type, status, textContent, onClickHandler }: ButtonProps) => {
  const isButtonDisabled = status === 'disabled';

  return (
    <button className={`button button-${type}-${status}`} disabled={isButtonDisabled} onClick={onClickHandler}>
      {textContent}
    </button>
  );
};
