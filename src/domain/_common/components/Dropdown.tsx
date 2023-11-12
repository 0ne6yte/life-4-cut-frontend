import {
  createContext,
  useContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
  useEffect,
  useRef,
} from 'react';

interface IDropdownContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownContext = createContext<IDropdownContext | null>(null);

function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw Error('');
  }
  return context;
}

interface DropdownProps {
  children: ReactNode;
}

function DropdownWrapper({ children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef} className="inline-block relative z-10">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

interface DropdownTriggerProps {
  children?: ReactNode;
}

function DropdownTrigger({ children }: DropdownTriggerProps) {
  const { open, setOpen } = useDropdown();

  const handleTriggerClick = () => {
    setOpen(!open);
  };

  return <div onClick={handleTriggerClick}>{children}</div>;
}

interface DropdownListProps {
  children: ReactNode;
  className?: string;
}

function DropdownList({ children, className = '' }: DropdownListProps) {
  const { open } = useDropdown();

  return (
    open && (
      <ul
        className={`w-[164px] absolute top-[12px] right-0 mt-3 rounded-[12px] border border-grey-background shadow-md bg-white overflow-hidden  divide-y-[1px] divide-grey-background ${className}`}
      >
        {children}
      </ul>
    )
  );
}

interface DropdownItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function DropdownItem({ children, className = '', onClick = () => {} }: DropdownItemProps) {
  const { setOpen } = useDropdown();

  const handleItemClick = () => {
    setOpen(false);
    onClick();
  };

  return (
    <li
      className={`w-full py-5 list-none flex items-center justify-center cursor-pointer hover:bg-grey-whitegray`}
      onClick={handleItemClick}
    >
      <p className={`font-normal text-[14px] ${className}`}>{children}</p>
    </li>
  );
}

export const Dropdown = Object.assign(DropdownWrapper, {
  Trigger: DropdownTrigger,
  List: DropdownList,
  Item: DropdownItem,
});
