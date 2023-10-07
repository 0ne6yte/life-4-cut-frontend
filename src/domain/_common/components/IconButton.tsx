import type { ReactNode } from 'react';

interface IconButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  text: string;
  icon: ReactNode;
}

export function IconButton({ onClick = () => {}, disabled = false, text, icon }: IconButtonProps) {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleButtonClick}
      disabled={disabled}
      className={`group flex px-2 py-[10px] space-x-4 items-center justify-center rounded-[4px] bg-highlight-gradient active:bg-highlight-gradient-dark disabled:bg-grey-whitegray disabled:bg-none ${
        disabled ? 'fill-grey-placeholder' : 'fill-white'
      }`}
    >
      <p className="text-white text-headline3 font-bold group-disabled:text-grey-placeholder">{text}</p>
      {icon}
    </button>
  );
}
