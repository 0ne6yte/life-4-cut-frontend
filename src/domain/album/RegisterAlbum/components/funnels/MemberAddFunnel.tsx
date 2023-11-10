import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { Avatar, TextInput } from '@/domain/_common/components';
import { type FunnelProps } from '@/domain/album/RegisterAlbum/types/FunnelTypes';

export function MemberAddFunnel({ control, onNext }: FunnelProps) {
  // User 타입 선언 후 타입 변경
  const [selectedUserList, setSelectedUserList] = useState<any[]>([]);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const searchedUserName = useWatch({
    name: '친구검색',
    control,
  });

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      // api call
      console.log(searchedUserName);
    }, 500);
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchedUserName]);
  return (
    <>
      <p className={'text-headline1 mb-6'}>함께 사용할 친구 추가</p>
      <TextInput name={'친구검색'} control={control} label={'친구 이름을 입력해주세요.'} />
      {selectedUserList && (
        <div className={'flex'}>
          {selectedUserList.map((user) => {
            return <Avatar.ListRow key={user.id} onClickDelete={() => null} username={user.id} />;
          })}
        </div>
      )}
      {searchedUserName && (
        <div className={'w-full h-[264px] border border-grey-placeholder border-solid rounded-[12px]'}>
          {searchResult.map((searchedUser) => {
            return (
              <div key={searchedUser.id} className={'w-full h-[54px]'}>
                <input id={searchedUser.id} type={'checkbox'} />
                <label htmlFor={searchedUser.id}>
                  <Avatar.ListColumn username={searchedUser.name} />
                </label>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
