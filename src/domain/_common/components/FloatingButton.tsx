import { ReactComponent as PlusIcon } from '@/assets/plus.svg';

interface FloatingButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function FloatingButton({ onClick = () => {}, disabled = false }: FloatingButtonProps) {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleButtonClick}
      disabled={disabled}
      className={`flex h-[52px] w-[52px] items-center justify-center rounded-full bg-highlight-gradient active:bg-highlight-gradient-dark disabled:bg-grey-whitegray disabled:bg-none ${
        disabled ? 'stroke-grey-placeholder' : 'stroke-white'
      }`}
    >
      <PlusIcon />
    </button>
  );
}
