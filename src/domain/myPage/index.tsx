import { useForm } from 'react-hook-form';

import { Button, Dropdown, Header, TextInput } from '../_common/components';
import { SafeArea } from '../_common/layouts';

export default function MyPage() {
  const { control } = useForm({
    defaultValues: {
      value1: '홍삼',
    },
  });

  return (
    <SafeArea className="h-screen justify-between">
      <div>
        <Header title="프로필" />
        <div className={'flex flex-col justify-center items-center mb-12'}>
          <div className={'relative w-[100px] h-[100px] mb-6 flex'}>
            <div className={'rounded-full w-full h-full bg-gray-600 m-auto'}></div>
            <Dropdown className={'absolute bottom-0 right-0'}>
              <Dropdown.Trigger>
                <div className={'rounded-full w-10 h-10 bg-slate-400 border border-white'}></div>
              </Dropdown.Trigger>
              <Dropdown.List className={'top-12'}>
                <Dropdown.Item>수정하기</Dropdown.Item>
                <Dropdown.Item className={'text-red-500'}>삭제하기</Dropdown.Item>
              </Dropdown.List>
            </Dropdown>
          </div>
          <div>hong3@inflab.com</div>
        </div>
        <form>
          <label htmlFor="value1" className={'font-bold text-[15px] block mb-6'}>
            닉네임
          </label>
          <TextInput name="value1" label="닉네임" control={control} />
        </form>
      </div>
      <div className={'flex gap-5'}>
        <Button variant="contained">취소</Button>
        <Button variant="contained" color="primary">
          수정하기
        </Button>
      </div>
    </SafeArea>
  );
}
