import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TokenRequest } from '../types/TokenRequest';

export const Token = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    const request: TokenRequest = context.switchToHttp().getRequest();

    return request.user;
  },
);
