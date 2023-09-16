interface PlusIconProps {
  color?: string;
}

export function PlusIcon({ color = '' }: PlusIconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${color}`} />
      <path d="M5 12H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${color}`} />
    </svg>
  );
}
