import { type ReactNode } from 'react';

interface ChipProps {
  text: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export function Chip({ onClick, text, icon }: ChipProps) {
  return (
    <div
      onClick={onClick}
      className={`p-[8px] flex items-center rounded-[20px] bg-grey-buttontext text-white gap-[4px] fill-white`}
    >
      {icon}
      <span className="text-[9px] font-bold select-none">{text}</span>
    </div>
  );
}
