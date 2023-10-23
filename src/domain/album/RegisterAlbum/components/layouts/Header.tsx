import { ReactComponent as LeftArrow } from '@/assets/arrow-left.svg';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const handleClickBackButton = () => {};
  return (
    <div className={'flex gap-[15px] w-full h-[46px] items-center'}>
      <button onClick={handleClickBackButton}>
        <LeftArrow />
      </button>
      <p className={'text-headline1'}>{title}</p>
    </div>
  );
}
