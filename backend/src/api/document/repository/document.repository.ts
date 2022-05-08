import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Document)
export default class DocumentRepository extends Repository<Document> {
  public findByIdx(idx: number): Promise<Document | undefined> {
    return this.createQueryBuilder('document')
      .where('document.idx = :idx', {
        idx,
      })
      .getOne();
  }
}
