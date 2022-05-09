import { Body, Controller, Post } from '@nestjs/common';
import BaseResponse from '../../global/responses/base.response';
import ReissuanceDto from './dto/reissuance.dto';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('refresh')
  async tokenReissuance(
    @Body() reissuanceDto: ReissuanceDto,
  ): Promise<BaseResponse<string>> {
    const token: string = await this.tokenService.accessTokenReissuance(
      reissuanceDto,
    );

    return new BaseResponse<string>(200, '토큰 재발급 성공', token);
  }
}
