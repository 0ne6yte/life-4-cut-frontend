import * as yup from 'yup';

import { useForm } from 'react-hook-form';

import { useFunnel } from '@/domain/album/RegisterAlbum/components/Funnel';
import { AlbumCreateFunnel } from '@/domain/album/RegisterAlbum/components/funnels/AlbumCreateFunnel';
import { MemberAddFunnel } from '@/domain/album/RegisterAlbum/components/funnels/MemberAddFunnel';
import { yupResolver } from '@hookform/resolvers/yup';

export default function RegisterAlbum() {
  const funnelSchema = yup.object().shape({
    albumName: yup.string().required('앨범 이름을 입력해주세요.'),
  });
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(funnelSchema),
  });
  const [Funnel, setStep] = useFunnel(['새 앨범 등록', '앨범 편집']);
  const handleSubmitForm = () => {
    console.log('submit');
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Funnel>
        <Funnel.Step
          name={'새 앨범 등록'}
          onNext={() => {
            setStep('앨범 편집');
          }}
        >
          <AlbumCreateFunnel control={control} />
        </Funnel.Step>
        <Funnel.Step
          name={'앨범 편집'}
          onPrev={() => {
            setStep('새 앨범 등록');
          }}
          onNext={() => {
            setStep('앨범 등록 완료');
          }}
        >
          <MemberAddFunnel control={control} />
        </Funnel.Step>
      </Funnel>
    </form>
  );
}
