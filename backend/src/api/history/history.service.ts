import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { validationData } from 'src/global/utils/validationData.util';
import { DocumentService } from '../document/document.service';
import { Document } from '../document/entities/document.entity';
import { CreateHistoryDto } from './dto/createHistory.dto';
import { History } from './entities/history.entity';
import HistoryRepository from './repository/history.repository';

@Injectable()
export class HistoryService {
  constructor(
    private readonly historyRepository: HistoryRepository,
    @Inject(forwardRef(() => DocumentService))
    private readonly documentService: DocumentService,
  ) {}

  public async createHistory(
    createHistoryDto: CreateHistoryDto,
  ): Promise<History> {
    return this.historyRepository.save(createHistoryDto);
  }

  public async findAllHistories(): Promise<History[]> {
    return this.historyRepository.findAllHistories();
  }

  public async findHistoriesByDocumentIdx(
    documentIdx: number,
  ): Promise<History[]> {
    const document: Document = await this.documentService.findDocumentByIdx(
      documentIdx,
    );
    return this.historyRepository.findHistoriesByDocumentIdx(document.idx);
  }

  public async findHistoryByIdx(idx: number): Promise<History> {
    const history: History = await this.historyRepository.findOne(idx);
    if (validationData(history)) {
      throw new NotFoundException('해당 idx의 history를 찾을 수 없습니다.');
    }
    return history;
  }

  public async deleteHistory(idx: number): Promise<void> {
    await this.historyRepository.delete(idx);
  }
}
