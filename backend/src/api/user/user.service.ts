import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signUp.dto';
import { User } from './entities/user.entity';
import UserRepository from './repository/user.repository';
import bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { existsData, validationData } from 'src/global/utils/validationData';
import { LoginResponseDto } from './dto/loginResponse.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
  ) {}

  public async signUp(signUpDto: SignUpDto): Promise<User> {
    const user: User | undefined = await this.userRepository.findOne(
      signUpDto.id,
    );

    if (existsData(user)) {
      throw new BadRequestException('종복된 ID입니다.');
    }

    const salt = this.configService.get<string>('HASH_SALT');
    const hashedPassword = await bcrypt.hash(signUpDto.password, salt);

    return this.userRepository.save({
      id: signUpDto.id,
      password: hashedPassword,
    });
  }

  public async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const user: User = await this.userRepository.findByIdAndPw(
      loginDto.id,
      loginDto.password,
    );

    if (validationData(user)) {
      throw new NotFoundException('ID 또는 Password가 일치하지 않습니다.');
    }

    const token: string = null;
    const refreshToken: string = null;

    return new LoginResponseDto(user, token, refreshToken);
  }

  public async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (validationData(user)) {
      throw new NotFoundException('해당 ID의 유저를 찾을 수 없습니다.');
    }

    return user;
  }
}
