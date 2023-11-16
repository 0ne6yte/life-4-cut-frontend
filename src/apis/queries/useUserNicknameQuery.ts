import { useQuery } from 'react-query';

import { api } from '@/apis';

interface useUserNicknameQueryParams {
  nickname: string;
}
export function useUserNicknameQuery({ nickname }: useUserNicknameQueryParams) {
  const { data } = useQuery(
    ['userNicknameInfo'],
    async () => {
      const { data } = await api.users.get(nickname);
      return data;
    },
    {
      enabled: !!nickname,
    }
  );

  return { data };
}
