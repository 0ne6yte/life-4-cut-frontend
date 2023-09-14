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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 5V19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${disabled ? 'stroke-grey-placeholder' : 'stroke-white'}`}
        />
        <path
          d="M5 12H19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${disabled ? 'stroke-grey-placeholder' : 'stroke-white'}`}
        />
      </svg>
    </button>
  );
};
