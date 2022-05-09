import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signUp.dto';
import { User } from './entities/user.entity';
import UserRepository from './repository/user.repository';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import {
  existsData,
  validationData,
} from 'src/global/utils/validationData.util';
import { LoginResponseDto } from './dto/loginResponse.dto';
import { TokenService } from '../token/token.service';
import { isDiffrentUtil } from 'src/global/utils/comparison.util';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
    private readonly tokenService: TokenService,
  ) {}

  public async signUp(signUpDto: SignUpDto): Promise<User> {
    const user: User | undefined = await this.userRepository.findOne(
      signUpDto.id,
    );

    if (existsData(user)) {
      throw new BadRequestException('중복된 ID입니다.');
    }

    const salt: number = +this.configService.get<number>('HASH_SALT');

    const hashedPassword: string = await bcrypt.hash(signUpDto.password, salt);

    return this.userRepository.save({
      id: signUpDto.id,
      password: hashedPassword,
      name: signUpDto.name,
    });
  }

  public async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const user: User = await this.userRepository.findOne(loginDto.id);

    if (validationData(user)) {
      throw new NotFoundException('ID에 해당하는 계정이 없습니다.');
    }

    const isCorrectPassword: boolean = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (isCorrectPassword === false) {
      throw new BadRequestException('비밀번호가 옳지 않습니다.');
    }

    if (isDiffrentUtil(user.status, 1)) {
      throw new ForbiddenException('승인되지 않은 유저입니다.');
    }

    const token: string = this.tokenService.generateAccessToken(user.id);
    const refreshToken: string = this.tokenService.generateRefreshToken(
      user.id,
    );

    if (token === undefined || refreshToken === undefined) {
      throw new ForbiddenException(403, '토큰이 발급되지 않았습니다');
    }

    return new LoginResponseDto(user, token, refreshToken);
  }

  public async findUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (validationData(user)) {
      throw new NotFoundException('해당 ID의 유저를 찾을 수 없습니다.');
    }

    return user;
  }
}
