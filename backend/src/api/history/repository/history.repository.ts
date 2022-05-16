import { EntityRepository, Repository } from 'typeorm';
import { History } from '../entities/history.entity';

@EntityRepository(History)
export default class HistoryRepository extends Repository<History> {
  async findAllHistories(): Promise<History[]> {
    return this.createQueryBuilder('history').getMany();
  }

  async findHistoriesByDocumentIdx(documentIdx: number): Promise<History[]> {
    return this.createQueryBuilder('history')
      .where('history.document = :idx', { idx: documentIdx })
      .orderBy('history.idx', 'DESC')
      .getMany();
  }
}
