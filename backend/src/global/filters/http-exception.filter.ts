import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ErrorFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const request: Request = host.switchToHttp().getRequest();
    const response: Response = host.switchToHttp().getResponse();

    if (exception instanceof HttpException) {
      const status: number = exception.getStatus();
      const message: string = exception.message;

      Logger.warn(exception);
      response.status(status).json({
        status: status,
        message: message,
        path: request.url,
      });
    } else {
      Logger.error(exception);
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: '서버 에러',
        path: request.url,
      });
    }
  }
}
