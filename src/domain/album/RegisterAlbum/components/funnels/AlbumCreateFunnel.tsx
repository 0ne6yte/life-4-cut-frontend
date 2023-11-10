import { TextInput } from '@/domain/_common/components';
import { type FunnelProps } from '@/domain/album/RegisterAlbum/types/FunnelTypes';

export function AlbumCreateFunnel({ control, onNext }: FunnelProps) {
  return (
    <>
      <p className={'text-headline1 mb-6'}>앨범 이름 작성</p>
      <TextInput name={'albumName'} control={control} label={'앨범명을 입력해주세요'} />
    </>
  );
}
