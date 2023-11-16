/* eslint-disable */
// noinspection ES6UnusedImports,JSUnusedLocalSymbols

/** CreatePictureResponse */
export type CreatePictureResponse = {
  data?: { id?: number };
  /** 응답 메시지 */
  message?: string;
};
/** EmptyResponse */
export type EmptyResponse = {
  /** 데이터 */
  data?: any;
  /** 응답 메시지 */
  message?: string;
};
/** GetMyRoleInAlbumResponse */
export type GetMyRoleInAlbumResponse = {
  data?: { role?: string };
  /** 응답 메시지 */
  message?: string;
};
/** GetPictureInSlotResponse */
export type GetPictureInSlotResponse = {
  data?: {
    pictures?: Array<{
      layout?: string;
      path?: string;
      pictureId?: number;
      location?: string;
      tagNames?: Array<any | boolean | string | number>;
      picturedAt?: string;
      content?: string;
    }>;
  };
  /** 응답 메시지 */
  message?: string;
};
/** SearchTagResponse */
export type SearchTagResponse = {
  data?: { tags?: Array<{ name?: string; id?: number }> };
  /** 응답 메시지 */
  message?: string;
};
/** UserDuplicateResponse */
export type UserDuplicateResponse = {
  data?: { isDuplicated?: boolean };
  /** 응답 메시지 */
  message?: string;
};
/** UserFindResponse */
export type UserFindResponse = {
  /** 데이터 */
  data?: { nickname?: string; profilePath?: string; userId?: number; email?: string };
  /** 응답 메시지 */
  message?: string;
};
export type integer = number;
export type long = number;
export type float = number;
export type double = number;
export type byte = string;
export type binary = string;
export type date = string;
export type dateTime = string;
export type password = string;
