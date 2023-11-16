import { ReactComponent as UserIcon } from '@/assets/user.svg';

interface BadgeProps {
  text: string;
  onClick?: () => void;
  variant?: 'default' | 'gradient' | 'info';
}

const badgeStyle = {
  default: 'rounded-[6px] bg-gradient-to-r bg-highlight-gradient bg-clip-text text-transparent',
  gradient: 'rounded-[6px] bg-highlight-gradient text-white',
  info: 'rounded-[20px] bg-grey-buttontext text-white',
};

export function Badge({ onClick, text, variant = 'default' }: BadgeProps) {
  return (
    <div onClick={onClick} className={`p-[8px] flex items-center ${badgeStyle[variant]} gap-[4px] fill-white`}>
      {variant === 'info' && <UserIcon fill="white" />}
      <span className="text-[9px] font-bold select-none">{text}</span>
    </div>
  );
}
