import { PlusIcon } from '.';

interface FloatingButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const FloatingButton = ({ onClick = () => {}, disabled = false }: FloatingButtonProps) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleButtonClick}
      disabled={disabled}
      className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-highlight-gradient active:bg-highlight-gradient-dark disabled:bg-grey-whitegray disabled:bg-none"
    >
      <PlusIcon color={disabled ? 'stroke-grey-placeholder' : 'stroke-white'} />
    </button>
  );
};
