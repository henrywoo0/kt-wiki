import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto } from './dto/signUp.dto';
import { LoginDto } from './dto/login.dto';
import BaseResponse from 'src/global/responses/base.response';
import { User } from './entities/user.entity';
import { LoginResponseDto } from './dto/loginResponse.dto';
import { UserDataResponseDto } from './dto/userDataResponse.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<BaseResponse<User>> {
    const user: User = await this.userService.signUp(signUpDto);
    return new BaseResponse<User>(HttpStatus.OK, '회원가입 성공', user);
  }

  @Post('login')
  async signIn(
    @Body() loginDto: LoginDto,
  ): Promise<BaseResponse<LoginResponseDto>> {
    const response: LoginResponseDto = await this.userService.login(loginDto);
    return new BaseResponse<LoginResponseDto>(
      HttpStatus.OK,
      '로그인 성공',
      response,
    );
  }

  @Get(':id')
  async getUserById(
    @Param('id') id: string,
  ): Promise<BaseResponse<UserDataResponseDto>> {
    const user: User = await this.userService.findOne(id);
    const userData: UserDataResponseDto = new UserDataResponseDto(
      user.id,
      user.role,
      user.status,
    );
    return new BaseResponse<UserDataResponseDto>(
      HttpStatus.OK,
      '유저 조회 성공',
      userData,
    );
  }
}
