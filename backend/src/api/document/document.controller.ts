import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Token } from 'src/global/decorators/token.decorator';
import TokenGuard from 'src/global/guards/token.guard';
import BaseResponse from 'src/global/responses/base.response';
import { User } from '../user/entities/user.entity';
import { DocumentService } from './document.service';
import { UpdateDocumentDto } from './dto/updateDocument.dto';
import { Document } from './entities/document.entity';

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Get()
  async getAllDocuments(): Promise<BaseResponse<Document[]>> {
    const documents: Document[] = await this.documentService.findAllDocuments();
    return new BaseResponse<Document[]>(
      HttpStatus.OK,
      '모든 문서 조회 성공',
      documents,
    );
  }

  @Get(':idx')
  async getDocumentByIdx(
    @Param('idx') idx: number,
  ): Promise<BaseResponse<Document>> {
    const document: Document =
      await this.documentService.findDocumentByIdxUpdatingHits(idx);
    return new BaseResponse<Document>(
      HttpStatus.OK,
      '문서 조회 성공',
      document,
    );
  }

  @Patch()
  @UseGuards(TokenGuard)
  async updateDocument(
    @Token() user: User,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ): Promise<BaseResponse<Document>> {
    const document: Document = await this.documentService.updateDocument(
      updateDocumentDto,
      user,
    );
    return new BaseResponse<Document>(
      HttpStatus.OK,
      '문서 수정 성공',
      document,
    );
  }
}
