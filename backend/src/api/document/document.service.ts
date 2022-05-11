import { Injectable, NotFoundException } from '@nestjs/common';
import { validationData } from 'src/global/utils/validationData.util';
import { HistoryService } from '../history/history.service';
import { User } from '../user/entities/user.entity';
import { CreateDocumentDto } from './dto/createDocument.dto';
import { UpdateDocumentDto } from './dto/updateDocument.dto';
import { Document } from './entities/document.entity';
import DocumentRepository from './repository/document.repository';

@Injectable()
export class DocumentService {
  constructor(
    private readonly documentRepository: DocumentRepository,
    private readonly historyService: HistoryService,
  ) {}

  public async findAllDocuments(): Promise<Document[]> {
    return this.documentRepository.findAllDocuments();
  }

  public async findDocumentByIdx(idx: number): Promise<Document> {
    const document: Document = await this.documentRepository.findOne(idx);
    if (validationData(document)) {
      throw new NotFoundException('해당 idx의 document를 찾을 수 없습니다.');
    }
    return document;
  }

  public async createDocument(
    createDocumentDto: CreateDocumentDto,
    user: User,
  ): Promise<Document> {
    const document: Document = await this.documentRepository.save(
      createDocumentDto,
    );
    await this.historyService.createHistory({
      modifiedText: document.text,
      userId: user.id,
      documentIdx: document.idx,
    });
    return document;
  }

  public async updateDocument(
    updateDocumentDto: UpdateDocumentDto,
    user: User,
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

    await this.historyService.createHistory({
      modifiedText: updateDocumentDto.text,
      userId: user.id,
      documentIdx: newDocument.idx,
    });

    return this.documentRepository.save(newDocument);
  }

  public async deleteDocument(idx: number): Promise<void> {
    this.documentRepository.delete(idx);
  }
}
