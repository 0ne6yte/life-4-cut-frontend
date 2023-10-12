import { type ReactNode } from 'react';

interface TabProps {
  children?: ReactNode;
  onChange?: (index: number) => void;
}

function TabList({ children }: TabProps) {
  return (
    <li role="tab" className="p-[6px] rounded-[10px] flex items-center space-x-[5px] bg-white">
      {children}
    </li>
  );
}

interface TabItemProps {
  icon: ReactNode;
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

function TabItem({ icon, text, selected, onClick = () => {} }: TabItemProps) {
  const handleTabClick = () => {
    onClick();
  };

  return (
    <div
      className={`cursor-pointer w-[100px] h-[38px] flex items-center justify-center rounded-[6px] gap-[6px] ${
        selected
          ? 'bg-highlight-gradient hover:bg-highlight-gradient-dark stroke-white fill-white'
          : 'bg-transparent hover:bg-grey-whitegray stroke-grey-placeholder fill-grey-placeholder'
      }`}
      onClick={handleTabClick}
    >
      {icon}
      <p className={`text-body13 font-bold ${selected ? 'text-white' : 'text-grey-placeholder'}`}>{text}</p>
    </div>
  );
}

export const Tab = Object.assign(TabList, {
  Item: TabItem,
});
