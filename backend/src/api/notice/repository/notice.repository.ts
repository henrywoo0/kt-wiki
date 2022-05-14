import { EntityRepository, Repository } from 'typeorm';
import { Notice } from '../entities/notice.entity';

@EntityRepository(Notice)
export default class NoticeRepository extends Repository<Notice> {
  async findAllNotices(): Promise<Notice[]> {
    return this.createQueryBuilder('notice').getMany();
  }
}
