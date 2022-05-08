import { EntityRepository, Repository } from 'typeorm';
import { Document } from '../entities/document.entity';

@EntityRepository(Document)
export default class DocumentRepository extends Repository<Document> {
  public findByIdx(idx: number): Promise<Document | undefined> {
    return this.createQueryBuilder('document')
      .where('document.idx = :idx', {
        idx,
      })
      .getOne();
  }

  public findAllDocuments(): Promise<Document[]> {
    return this.createQueryBuilder('document').getMany();
  }
}
