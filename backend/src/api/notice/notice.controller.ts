import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import BaseResponse from 'src/global/responses/base.response';
import { Notice } from './entities/notice.entity';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Get()
  async getAllNotices(): Promise<BaseResponse<Notice[]>> {
    const notices: Notice[] = await this.noticeService.findAllNotices();
    return new BaseResponse<Notice[]>(
      HttpStatus.OK,
      '모든 notice 조회 성공',
      notices,
    );
  }

  @Get('/:idx')
  async getNoticeByIdx(
    @Param('idx') idx: number,
  ): Promise<BaseResponse<Notice>> {
    const notice: Notice = await this.noticeService.findNoticeByIdx(idx);
    return new BaseResponse<Notice>(HttpStatus.OK, 'notice 조회 성공', notice);
  }
}
