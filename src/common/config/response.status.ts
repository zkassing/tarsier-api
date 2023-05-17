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

export const HTTP_ERROR = {
  NOT_FOUND: {
    code: 404,
    message: '找不到资源',
  },
  REMOVE_FAIL: {
    code: 200001,
    message: '要删除的内容不存在',
  },
  UPDATE_FAIL: {
    code: 300001,
    message: '更新失败',
  },
};

export const HTTP_SUCCESS = {
  REMOVE: '删除成功',
  UPDATE: '更新成功',
};
