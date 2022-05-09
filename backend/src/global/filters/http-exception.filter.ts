import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const request: Request = host.switchToHttp().getRequest();
    const response: Response = host.switchToHttp().getResponse();

    const status: number = exception.getStatus();
    const message: string = exception.message;

    response.status(status).json({
      status: status,
      message: message,
      path: request.url,
    });
  }
}
