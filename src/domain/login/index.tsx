import { useUserNicknameQuery } from '@/apis/queries/useUserNicknameQuery';
import { ReactComponent as KakaoIcon } from '@/assets/kakao.svg';
import { ReactComponent as NaverIcon } from '@/assets/naver.svg';
import AuthLoginButton from '@/domain/login/components/AuthLoginButton';

export default function Login() {
  const { data } = useUserNicknameQuery({ nickname: 'test' });
  console.log(data);
  return (
    <main className="bg-white flex flex-col justify-center items-center">
      <div className="text-[64px] mb-[120px] font-extrabold">LOGO</div>
      <div className="text-grey-placeholder mb-[20px]">계정을 만들고 어쩌구 저쩌구를 즐겨보세요</div>
      <div className="flex flex-col gap-[8px]">
        <AuthLoginButton
          icon={<KakaoIcon />}
          backgroundColor="#FEE500"
          color="#3C1E1E"
          text="카카오 로그인"
          onClick={() => {
            console.log('카카오');
          }}
        />
        <AuthLoginButton
          icon={<NaverIcon />}
          backgroundColor="#03C75A"
          color="#ffffff"
          text="네이버 로그인"
          onClick={() => {
            console.log('네이버');
          }}
        />
      </div>
    </main>
  );
}
