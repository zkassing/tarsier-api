export interface IHttpError {
  code: number;
  message?: string;
}

export const NOT_FOUND = {
  code: 404,
  message: '找不到资源',
};
