import { ReactComponent as FatHorizontalIcon } from '@/assets/fat-horizontal.svg';
import { ReactComponent as FatVerticalIcon } from '@/assets/fat-vertical.svg';
import { ReactComponent as ThinVerticalIcon } from '@/assets/thin-vertical.svg';

interface CheckboxProps {
  type: 'fatHorizontal' | 'fatVertical' | 'thinVertical';
  isSelected: boolean;
  children: string;
}

const DataByType = {
  fatHorizontal: {
    text: '뚱뚱 가로',
    iconComponent: FatHorizontalIcon,
  },
  fatVertical: {
    text: '뚱뚱 세로',
    iconComponent: FatVerticalIcon,
  },
  thinVertical: {
    text: '길쭉 세로',
    iconComponent: ThinVerticalIcon,
  },
};

const checkboxStyleVariant = {
  fatHorizontal: '',
  fatVertical: '',
  thinVertical: '',
};

export function Checkbox({ type, isSelected }: CheckboxProps) {
  const Icon = DataByType[type].iconComponent;

  return (
    <button
      className={`w-[336px] h-[101px] border-2 border-grey-placeholder rounded-xl flex justify-start items-center font-bold text-[24px] ${
        checkboxStyleVariant[type]
      } ${isSelected ? '' : ''}`}
    >
      <Icon className="pl-[14px] pr-[14px] w-16 h-16 " />
      {DataByType[type].text}
    </button>
  );
}
