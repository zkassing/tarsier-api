import { HttpException } from '@nestjs/common';
import { IHttpError } from './config/error.config';

export class HttpError extends HttpException {
  constructor(error: IHttpError) {
    const { status, ...errorObj } = error;
    super(errorObj, status || 500);
  }
}
