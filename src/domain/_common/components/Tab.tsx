import { createContext, useState, useEffect, useContext } from 'react';
import type { Dispatch, SetStateAction, ReactNode } from 'react';

interface ITabContext {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const TabContext = createContext<ITabContext | null>(null);

function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('');
  }
  return context;
}

interface TabGroupProps {
  onChange?: (index: number) => void;
  initialIndex?: number;
  children: ReactNode;
}

function TabGroup({ initialIndex = 0, onChange, children }: TabGroupProps) {
  const [selected, setSelected] = useState(initialIndex);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return <TabContext.Provider value={{ selected, setSelected }}>{children}</TabContext.Provider>;
}

interface TabListProps {
  children: ReactNode;
  className?: string;
}

function TabList({ children, className = '' }: TabListProps) {
  return (
    <ul role="tab" className={`p-[6px] rounded-[10px] flex items-center space-x-[5px] bg-white ${className}`}>
      {children}
    </ul>
  );
}

interface TabItemProps {
  icon: ReactNode;
  text: string;
  index: number;
  onClick?: (index: number) => void;
}

function TabItem({ icon, text, onClick, index }: TabItemProps) {
  const { selected, setSelected } = useTabContext();

  const handleTabClick = () => {
    setSelected(index);
    onClick?.(index);
  };

  return (
    <div
      className={`cursor-pointer w-[100px] h-[38px] flex items-center justify-center rounded-[6px] gap-[6px] ${
        selected === index
          ? 'bg-highlight-gradient hover:bg-highlight-gradient-dark stroke-white fill-white'
          : 'bg-transparent hover:bg-grey-whitegray stroke-grey-placeholder fill-grey-placeholder'
      }`}
      onClick={handleTabClick}
    >
      {icon}
      <p className={`text-body13 font-bold ${selected === index ? 'text-white' : 'text-grey-placeholder'}`}>{text}</p>
    </div>
  );
}

interface TabPannelProps {
  index: number;
  children: ReactNode;
}

function TabPannel({ index, children }: TabPannelProps) {
  const { selected } = useTabContext();
  return selected === index && <div>{children}</div>;
}

export const Tab = Object.assign(TabGroup, {
  Group: TabGroup,
  List: TabList,
  Item: TabItem,
  Pannel: TabPannel,
});
