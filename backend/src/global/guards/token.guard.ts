import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { TokenService } from 'src/api/token/token.service';
import { User } from 'src/api/user/entities/user.entity';
import { UserService } from 'src/api/user/user.service';
import { IToken } from '../interfaces/IToken';
import { isDiffrentUtil } from '../utils/comparison.util';
import { validationData } from '../utils/validationData.util';

@Injectable()
export default class TokenGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userSerivce: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token: string | string[] = request.headers['authorization'];

    if (validationData(token)) {
      throw new UnauthorizedException('토큰이 전송되지 않았습니다.');
    }

    if (Array.isArray(token)) {
      throw new UnauthorizedException('잘못된 토큰입니다.');
    }

    const cuttingToken: string[] = token.split('Bearer ');

    if (validationData(cuttingToken[0])) {
      throw new UnauthorizedException('잘못된 토큰입니다.');
    }

    const { iss, sub, userId }: IToken = await this.tokenService.verifyToken(
      cuttingToken[1],
    );

    if (isDiffrentUtil(iss, 'kaBank') && isDiffrentUtil(sub, 'token')) {
      throw new UnauthorizedException('토큰이 위조되었습니다.');
    }

    const user: User = await this.userSerivce.findUserById(userId);

    request.user = user;

    return true;
  }
}
