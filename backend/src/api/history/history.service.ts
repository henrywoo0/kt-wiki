import { Injectable, NotFoundException } from '@nestjs/common';
import { validationData } from 'src/global/utils/validationData.util';
import { CreateHistoryDto } from './dto/createHistory.dto';
import { History } from './entities/history.entity';
import HistoryRepository from './repository/history.repository';

@Injectable()
export class HistoryService {
  constructor(private readonly historyRepository: HistoryRepository) {}

  public async createHistory(
    createHistoryDto: CreateHistoryDto,
  ): Promise<History> {
    return this.historyRepository.save(createHistoryDto);
  }

  public async findAllHistories(): Promise<History[]> {
    return this.historyRepository.findAllHistories();
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
