interface TagProps {
  text: string;
  onClick?: () => void;
  variant?: 'default' | 'gradient';
}

const tagStyle = {
  default: 'bg-gradient-to-r bg-highlight-gradient bg-clip-text text-transparent',
  gradient: 'text-white',
};

export function Tag({ onClick, text, variant = 'gradient' }: TagProps) {
  return (
    <div
      onClick={onClick}
      className={`px-[10px] py-[6px] min-w-[42px] rounded-[4px] ${
        variant === 'gradient' ? 'bg-highlight-gradient' : 'bg-white'
      }`}
    >
      <p className={`text-[9px] font-bold select-none ${tagStyle[variant]}`}>#{text}</p>
    </div>
  );
}
