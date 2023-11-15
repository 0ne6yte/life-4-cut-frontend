import { TextInput } from '@/domain/_common/components';
import { useForm } from '@/hooks';
import { yupSchema } from '@/utils/validation';

export default function UploadInfo() {
  const { control } = useForm({
    defaultValues: {
      value1: '',
    },
    schema: { value1: yupSchema.requiredNumber },
    mode: 'onChange',
  });

  return (
    <ul className="w-full flex flex-col gap-10">
      <li className="flex flex-col gap-2">
        <label className="font-bold text-[18px]" htmlFor="date">
          날짜
        </label>
        <TextInput name="날짜" label="날짜" control={control} />
      </li>
      <li className="flex flex-col gap-2">
        <label className="font-bold text-[18px]" htmlFor="memo">
          메모작성
        </label>
        <TextInput name="메모작성" label="메모작성" control={control} />
      </li>
      <li className="flex flex-col gap-2">
        <label className="font-bold text-[18px]" htmlFor="tag">
          태그
        </label>
        <TextInput name="태그" label="태그" control={control} />
      </li>
    </ul>
  );
}
