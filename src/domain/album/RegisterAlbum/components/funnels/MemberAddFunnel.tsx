import { TextInput } from '@/domain/_common/components';
import { type FunnelProps } from '@/domain/album/RegisterAlbum/types/FunnelTypes';

export function MemberAddFunnel({ control, onNext }: FunnelProps) {
  return (
    <>
      <p className={'text-headline1 mb-6'}>함께 사용할 친구 추가</p>
      <TextInput name={'친구추가'} control={control} label={'친구 이름을 입력해주세요.'} />
    </>
  );
}
