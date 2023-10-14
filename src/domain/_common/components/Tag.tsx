interface TagProps {
  text: string;
  onClick?: () => void;
  variant?: 'default' | 'gradient';
}

const tagStyle = {
  default: 'rounded-[6px] bg-gradient-to-r bg-highlight-gradient bg-clip-text text-transparent',
  gradient: 'rounded-[6px] bg-highlight-gradient text-white',
};

export function Tag({ onClick, text, variant = 'default' }: TagProps) {
  return (
    <div onClick={onClick} className={`p-[8px] flex items-center ${tagStyle[variant]} gap-[4px]`}>
      <span className="text-[9px] font-bold select-none">#{text}</span>
    </div>
  );
}
