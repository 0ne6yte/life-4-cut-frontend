import type { ReactNode } from 'react';

interface SafeAreaProps {
  className?: string;
  children: ReactNode;
}

export function SafeArea({ children, className = '' }: SafeAreaProps) {
  return <div className={`flex flex-col px-[27px] py-6 ${className}`}>{children}</div>;
}
