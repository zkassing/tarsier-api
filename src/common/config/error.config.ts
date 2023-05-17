export interface IHttpError {
  code: number;
  message?: string;
  status?: number;
}

/* 
  增加 1
  删除 2
  更新 3
  查询 4
*/

const HTTP_ERROR = {
  NOT_FOUND: {
    code: 404,
    message: '找不到资源',
  },
  REMOVE_NOT_FOUND: {
    code: 200001,
    message: '要删除的内容不存在',
  },
};

export default HTTP_ERROR;
