import { Injectable, NotFoundException } from '@nestjs/common';
import { validationData } from 'src/global/utils/validationData';
import { CreateDocumentDto } from './dto/createDocument.dto';
import { UpdateDocumentDto } from './dto/updateDocument.dto';
import { Document } from './entities/document.entity';
import DocumentRepository from './repository/document.repository';

@Injectable()
export class DocumentService {
  constructor(private readonly documentRepository: DocumentRepository) {}

  public async getAllDocuments(): Promise<Document[]> {
    return this.documentRepository.findAllDocuments();
  }

  public async createDocument(
    createDocumentDto: CreateDocumentDto,
  ): Promise<Document> {
    return this.documentRepository.save(createDocumentDto);
  }

  public async updateDocument(
    updateDocumentDto: UpdateDocumentDto,
  ): Promise<Document> {
    const document: Document = await this.documentRepository.findByIdx(
      updateDocumentDto.idx,
    );
    if (validationData(document)) {
      throw new NotFoundException('해당 idx의 document를 찾을 수 없습니다.');
    }
    const newDocument: Document = await this.documentRepository.merge(
      document,
      updateDocumentDto,
    );
    return this.documentRepository.save(newDocument);
  }

  public async deleteDocument(idx: number): Promise<void> {
    this.documentRepository.delete(idx);
  }
}
