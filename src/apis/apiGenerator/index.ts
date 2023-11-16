/* eslint-disable */
// noinspection ES6UnusedImports,JSUnusedLocalSymbols
import Axios, { AxiosStatic, AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  CreatePictureResponse,
  EmptyResponse,
  GetMyRoleInAlbumResponse,
  GetPictureInSlotResponse,
  SearchTagResponse,
  UserDuplicateResponse,
  UserFindResponse,
} from './types';
import { integer, long, float, double, byte, binary, date, dateTime, password } from './types';

export interface $customExtendResponse {}
type $R<T> = Promise<T> & { readonly response: Promise<AxiosResponse<T> & $customExtendResponse> };
export const $axiosConfig: Required<Parameters<AxiosStatic['create']>>[0] = {};
const $ep = (_: any) => ({
  api: {
    v1: {
      albums: {
        /** @param albumId  앨범 아이디 */
        albumId: (albumId: number) => ({
          pictures: {
            /**
             * 앨범내 페이지별 사진 목록을 조회한다
             *
             * @returns 200
             * @summary 앨범내 페이지별 사진 목록을 조회한다
             */
            get: <$T = GetPictureInSlotResponse>($config?: AxiosRequestConfig): $R<$T> =>
              _('get', `/api/v1/albums/${albumId}/pictures`, $config),
            /**
             * 사진을 업로드한다
             *
             * @returns 200
             * @summary 사진을 업로드한다
             */
            post: <$T = CreatePictureResponse>($config?: AxiosRequestConfig): $R<$T> =>
              _('post', `/api/v1/albums/${albumId}/pictures`, undefined, $config),
            /** @param pictureId  사진 아이디 */
            pictureId: (pictureId: number) => ({
              /**
               * 사진을 수정한다
               *
               * @returns 200
               * @summary 사진을 수정한다
               */
              patch: <$T = EmptyResponse>($config?: AxiosRequestConfig): $R<$T> =>
                _('patch', `/api/v1/albums/${albumId}/pictures/${pictureId}`, undefined, $config),
            }),
          },
          roles: {
            me: {
              /**
               * 앨범에 대한 내 권한을 조회한다
               *
               * @returns 200
               * @summary 앨범에 대한 내 권한을 조회한다
               */
              get: <$T = GetMyRoleInAlbumResponse>($config?: AxiosRequestConfig): $R<$T> =>
                _('get', `/api/v1/albums/${albumId}/roles/me`, $config),
            },
          },
          tags: {
            /**
             * 태그를 검색한다
             *
             * @param keyword  검색어
             * @returns 200
             * @summary 태그를 검색한다
             */
            get: <$T = SearchTagResponse>(keyword?: string, $config?: AxiosRequestConfig): $R<$T> =>
              _('get', `/api/v1/albums/${albumId}/tags`, { params: { keyword }, ...$config }),
          },
        }),
      },
      users: {
        /**
         * 닉네임 유저 조회 API
         *
         * 404: 404
         *
         * @param nickname  유저 닉네임
         * @returns 200
         * @summary 닉네임 유저 조회 API
         */
        get: <$T = UserFindResponse>(nickname: string, $config?: AxiosRequestConfig): $R<$T> =>
          _('get', `/api/v1/users`, { params: { nickname }, ...$config }),
        duplicate: {
          /**
           * 닉네임으로 유저 조회 API
           *
           * @param nickname  유저 닉네임
           * @returns 200
           * @summary 닉네임으로 유저 조회 API
           */
          get: <$T = UserDuplicateResponse>(nickname: string, $config?: AxiosRequestConfig): $R<$T> =>
            _('get', `/api/v1/users/duplicate`, { params: { nickname }, ...$config }),
        },
        me: {
          /**
           * 마이페이지 정보 조회 API
           *
           * @returns 200
           * @summary 마이페이지 정보 조회 API
           */
          get: <$T = UserFindResponse>($config?: AxiosRequestConfig): $R<$T> => _('get', `/api/v1/users/me`, $config),
          /**
           * 유저정보 수정 API
           *
           * 204: 204
           *
           * @returns undefined
           * @summary 유저정보를 수정한다.
           */
          patch: <$T = any>($config?: AxiosRequestConfig): $R<$T> => _('patch', `/api/v1/users/me`, undefined, $config),
        },
      },
    },
  },
});
export const apiGenerator = ($axios = Axios.create($axiosConfig)) =>
  $ep((method: string, ...args: any) => {
    const promise = ($axios as any)[method](...args);
    return Object.defineProperty(
      promise.then((x: any) => x.data),
      'response',
      { value: promise }
    );
  });
