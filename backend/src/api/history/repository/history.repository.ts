import { EntityRepository, Repository } from 'typeorm';
import { History } from '../entities/history.entity';

@EntityRepository(History)
export default class HistoryRepository extends Repository<History> {
  async findAllHistories(): Promise<History[]> {
    return this.createQueryBuilder('history').getMany();
  }
}
