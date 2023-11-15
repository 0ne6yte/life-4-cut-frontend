import type { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
  title: string;
}

export function Header({ children, title }: HeaderProps) {
  return (
    <header className={'flex items-center justify-between mb-6'}>
      <h1 className={'font-bold text-headline1'}>{title}</h1>
      <div>{children}</div>
    </header>
  );
}
