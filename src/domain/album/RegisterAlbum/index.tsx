import { useForm } from 'react-hook-form';

import { useFunnel } from '@/domain/album/RegisterAlbum/components/Funnel';
import { AlbumCreateFunnel } from '@/domain/album/RegisterAlbum/components/funnels/AlbumCreateFunnel';
import { MemberAddFunnel } from '@/domain/album/RegisterAlbum/components/funnels/MemberAddFunnel';

export default function RegisterAlbum() {
  const { control, handleSubmit } = useForm();
  const [Funnel, setStep] = useFunnel(['새 앨범 등록', '앨범 편집', '앨범 등록 완료']);
  const handleSubmitForm = () => {};
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Funnel>
        <Funnel.Step name={'새 앨범 등록'} onNext={() => setStep('앨범 편집')}>
          <AlbumCreateFunnel control={control} />
        </Funnel.Step>
        <Funnel.Step name={'앨범 편집'} onNext={() => setStep('앨범 등록 완료')}>
          <MemberAddFunnel control={control} />
        </Funnel.Step>
      </Funnel>
    </form>
  );
}
