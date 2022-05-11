import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserRole } from 'src/global/constants/userRole.enum';
import { Roles } from 'src/global/decorators/roles.decorator';
import { Token } from 'src/global/decorators/token.decorator';
import RoleGuard from 'src/global/guards/role.guard';
import TokenGuard from 'src/global/guards/token.guard';
import BaseResponse from 'src/global/responses/base.response';
import { DocumentService } from '../document/document.service';
import { CreateDocumentDto } from '../document/dto/createDocument.dto';
import { Document } from '../document/entities/document.entity';
import { User } from '../user/entities/user.entity';
import { AdminService } from './admin.service';

@Roles(UserRole.admin)
@UseGuards(RoleGuard)
@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly documentService: DocumentService,
  ) {}

  @Post('/document')
  @UseGuards(TokenGuard)
  async postDocument(
    @Body() createDocumentDto: CreateDocumentDto,
    @Token() user: User,
  ): Promise<BaseResponse<Document>> {
    const document: Document = await this.documentService.createDocument(
      createDocumentDto,
      user,
    );
    return new BaseResponse<Document>(
      HttpStatus.OK,
      'document 생성 성공',
      document,
    );
  }

  @Delete('/document/:idx')
  async deleteDocument(@Param('idx') idx: number): Promise<BaseResponse<void>> {
    await this.documentService.deleteDocument(idx);
    return new BaseResponse<void>(HttpStatus.OK, 'document 삭제 성공');
  }
}
