import React, { type PropsWithChildren } from 'react';

function AlbumPagesContainer({ children }: PropsWithChildren) {
  return (
    <div className="relative h-full p-2.5">
      <div className="h-full w-full bg-[url('album-background-moon.png')] bg-cover bg-center bg-no-repeat flex">
        {children}
      </div>
      <img src="album-rings.png" className="absolute top-12 -left-1" alt="album-rings" />
      <img src="album-rings.png" className="absolute bottom-12 -left-1" alt="album-rings" />
    </div>
  );
}

function ThinVertical() {
  return (
    <div className="flex flex-1 p-8 gap-5">
      <div className="flex flex-col flex-1 gap-5">
        <img src="4cut-vertical.png" alt="" className="w-full object-fill h-3/4" />
        <div className="flex-1">
          <div className="text-[18px] text-white">23.03.01</div>
          <div className="text-[14px] text-white">#태그1 #태그2</div>
          <div className="text-[14px] text-white whitespace-pre-line">설레는 봄, {'\n'} 처음만난 우리</div>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-5">
        <div className="h-3/4 bg-grey-background bg-opacity-30 rounded-[12px]" />
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

function FatVertical() {
  return (
    <div className="flex flex-1 p-8">
      <div className="flex flex-col flex-1 gap-5">
        <img src="4cut-vertical.png" alt="" className="w-full object-fill h-3/4" />
        <div className="flex-1">
          <div className="text-[18px] text-white">23.03.01</div>
          <div className="text-[14px] text-white">#태그1 #태그2</div>
          <div className="text-[14px] text-white whitespace-pre-line">
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the scrambled
            it to make a t
          </div>
        </div>
      </div>
    </div>
  );
}

function FatHorizontal() {
  return (
    <div className="flex flex-1 p-8 items-center">
      <div className="flex flex-col flex-1 gap-5">
        <img src="4cut-horizontal.png" alt="" className="w-full object-fill" />
        <div className="flex-1">
          <div className="text-[18px] text-white">23.03.01</div>
          <div className="text-[14px] text-white">#태그1 #태그2</div>
          <div className="text-[14px] text-white whitespace-pre-line">
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the scrambled
            it to make a t
          </div>
        </div>
      </div>
    </div>
  );
}
export const AlbumPages = Object.assign(AlbumPagesContainer, {
  AlbumPages: AlbumPagesContainer,
  ThinVertical,
  FatVertical,
  FatHorizontal,
});
