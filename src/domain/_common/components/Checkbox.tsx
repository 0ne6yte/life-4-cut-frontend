import { useEffect } from 'react';
import { Controller, type UseFormReturn } from 'react-hook-form';

import { ReactComponent as CheckMark } from '@/assets/check-mark.svg';
import { ReactComponent as FatHorizontalIcon } from '@/assets/fat-horizontal.svg';
import { ReactComponent as FatVerticalIcon } from '@/assets/fat-vertical.svg';
import { ReactComponent as ThinVerticalIcon } from '@/assets/thin-vertical.svg';

interface CheckboxProps {
  type: 'fatHorizontal' | 'fatVertical' | 'thinVertical';
  control?: UseFormReturn<any>['control'];
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

export function Checkbox({ type, control }: CheckboxProps) {
  const Icon = DataByType[type].iconComponent;

  useEffect(() => {}, []);

  return (
    <Controller
      name="checkbox"
      control={control}
      render={({ field }) => {
        const isSelected = field.value === type;

        return (
          <button
            className={`relative w-[336px] h-[101px] border-2 rounded-xl flex justify-start items-center font-bold text-[24px] ${
              isSelected
                ? 'text-white bg-primary-default border-primary-default'
                : 'text-grey-placeholder border-grey-placeholder'
            }`}
            onClick={() => {
              field.onChange(type);
            }}
          >
            <Icon className={`pl-[14px] pr-[14px] w-16 h-16 ${isSelected ? '[&>*]:stroke-primary-default' : ''}`} />
            {DataByType[type].text}
            {isSelected ? <CheckMark className="absolute right-3 w-[20px] h-[20px] [&>*]:fill-white" /> : null}
          </button>
        );
      }}
    />
  );
}
