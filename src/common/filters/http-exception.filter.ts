import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const exceptionRes: any = exception.getResponse();
    const msgLog = {
      code: exceptionRes.code,
      message: exceptionRes.message || '请求错误',
      timestamp: new Date().toISOString(),
    };

    response.status(status).json(msgLog);
  }
}
