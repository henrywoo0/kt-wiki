import { Injectable, NotFoundException } from '@nestjs/common';
import { validationData } from 'src/global/utils/validationData.util';
import { CreateNoticeDto } from './dto/createNotice.dto';
import { UpdateNoticeDto } from './dto/updateNotice.dto';
import { Notice } from './entities/notice.entity';
import NoticeRepository from './repository/notice.repository';

@Injectable()
export class NoticeService {
  constructor(private readonly noticeRepository: NoticeRepository) {}

  public async findAllNotices(): Promise<Notice[]> {
    return this.noticeRepository.findAllNotices();
  }

  public async findNoticeByIdx(idx: number): Promise<Notice> {
    const notice: Notice | undefined = await this.noticeRepository.findOne(idx);
    if (validationData(notice)) {
      throw new NotFoundException('해당 idx의 notice를 찾을 수 없습니다.');
    }
    return notice;
  }

  public async createNotice(createNoticeDto: CreateNoticeDto): Promise<Notice> {
    return this.noticeRepository.save(createNoticeDto);
  }

  public async updateNotice(updateNoticeDto: UpdateNoticeDto): Promise<Notice> {
    const notice: Notice = await this.findNoticeByIdx(updateNoticeDto.idx);
    const newNotice: Notice = await this.noticeRepository.merge(
      notice,
      updateNoticeDto,
    );

    return this.noticeRepository.save(newNotice);
  }

  public async deleteNotice(idx: number): Promise<void> {
    this.noticeRepository.delete(idx);
  }
}
