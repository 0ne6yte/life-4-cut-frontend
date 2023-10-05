import { ReactComponent as ArrwoDownIcon } from '@/assets/arrow-down.svg';

interface BadgeButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function BadgeButton({ onClick = () => {}, disabled = false }: BadgeButtonProps) {
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
      <p className="text-white text-headline3 font-bold group-disabled:text-grey-placeholder">일상</p>
      <ArrwoDownIcon />
    </button>
  );
}
