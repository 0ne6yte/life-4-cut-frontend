import { type ReactNode } from 'react';

interface AuthLoginButtonProps {
  icon: ReactNode;
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  color?: string;
}
export default function AuthLoginButton({ icon, text, onClick, backgroundColor, color }: AuthLoginButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor, color }}
      className="w-[300px] rounded-lg flex items-center p-[12px] gap-[12px]"
    >
      <div className="absolute w-[20x] h-[20px]">{icon}</div>
      <div className="text-[15px] font-bold flex-1">{text}</div>
    </button>
  );
}
