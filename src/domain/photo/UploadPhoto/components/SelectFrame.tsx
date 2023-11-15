import { Checkbox } from '@/domain/_common/components';
import { useForm } from '@/hooks';
import { yupSchema } from '@/utils/validation';

export default function SelectFrame() {
  const { control } = useForm({
    defaultValues: {
      checkbox: '',
    },
    schema: {
      checkbox: yupSchema.requiredString,
    },
    mode: 'onChange',
  });

  return (
    <>
      <h2 className="font-bold text-[18px] pb-5">프레임 선택</h2>
      <ul className="w-full flex flex-col gap-3">
        <li>
          <Checkbox type="fatHorizontal" control={control} />
        </li>
        <li>
          <Checkbox type="fatVertical" control={control} />
        </li>
        <li>
          <Checkbox type="thinVertical" control={control} />
        </li>
      </ul>
    </>
  );
}
