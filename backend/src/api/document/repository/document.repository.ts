import { EntityRepository, Repository } from 'typeorm';
import { Document } from '../entities/document.entity';

@EntityRepository(Document)
export default class DocumentRepository extends Repository<Document> {
  public findDocumentByIdxWithCategory(
    idx: number,
  ): Promise<Document | undefined> {
    return this.createQueryBuilder('document')
      .leftJoinAndSelect('document.category', 'category')
      .where('document.idx = :idx', {
        idx,
      })
      .getOne();
  }

  public findAllDocuments(): Promise<Document[]> {
    return this.createQueryBuilder('document')
      .orderBy('document.created_at', 'DESC')
      .getMany();
  }

  public findAllDocumentsOrderByHits(): Promise<Document[]> {
    return this.createQueryBuilder('document')
      .orderBy('document.hits', 'DESC')
      .addOrderBy('document.created_at', 'DESC')
      .getMany();
  }

  public findAllDocumentsOrderByUdatedAt(): Promise<Document[]> {
    return this.createQueryBuilder('document')
      .orderBy('document.updated_at', 'DESC')
      .getMany();
  }

  public findDocumentsByCategoryIdx(idx: number): Promise<Document[]> {
    return this.createQueryBuilder('document')
      .where('document.category = :idx', { idx })
      .getMany();
  }
}
