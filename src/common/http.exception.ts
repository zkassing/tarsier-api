import { HttpException } from '@nestjs/common';
import { IHttpError } from './config/error.config';

export class HttpError extends HttpException {
  constructor(error: IHttpError) {
    super(error.message, error.code);
  }
}
