import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TokenService } from 'src/api/token/token.service';
import { User } from 'src/api/user/entities/user.entity';
import { UserService } from 'src/api/user/user.service';
import { UserRole } from '../constants/userRole.enum';
import { IToken } from '../interfaces/IToken';
import { isDiffrentUtil } from '../utils/comparison.util';
import matchRoles from '../utils/matchRoles';
import { validationData } from '../utils/validationData.util';

@Injectable()
export default class RoleGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,
    private readonly reflector: Reflector,
    private readonly userSerivce: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token: string | string[] = request.headers['authorization'];

    const roles: UserRole[] = this.reflector.get<UserRole[]>(
      'roles',
      context.getClass(),
    );

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

    if (isDiffrentUtil(iss, 'ktwiki') && isDiffrentUtil(sub, 'token')) {
      throw new UnauthorizedException('토큰이 위조되었습니다.');
    }

    const user: User = await this.userSerivce.findUserById(userId);

    request.user = user;

    return matchRoles(roles, user.role);
  }
}
