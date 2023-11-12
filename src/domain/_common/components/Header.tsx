import React, { type ReactNode } from 'react';

import { ReactComponent as ArrowLeft } from '@/assets/arrow-left.svg';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  tools?: ReactNode;
}
function Header({ title, showBackButton, tools }: HeaderProps) {
  return (
    <div className="flex px-[27px] pt-6 pb-3 items-center justify-between">
      {showBackButton && <ArrowLeft />}
      <h1 className={`font-bold text-headline1`}>{title}</h1>
      {tools}
    </div>
  );
}

export default Header;
