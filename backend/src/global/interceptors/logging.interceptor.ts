import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();

    Logger.log(`[${request.method}] ${request.ip} ${request.url}`);

    const now = Date.now();

    return next.handle().pipe(tap(() => Logger.log(`${Date.now() - now}ms`)));
  }
}
