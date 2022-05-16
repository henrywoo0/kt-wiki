import { forwardRef, Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import DocumentRepository from './repository/document.repository';
import { HistoryModule } from '../history/history.module';
import { TokenModule } from '../token/token.module';
import { UserModule } from '../user/user.module';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DocumentRepository]),
    forwardRef(() => HistoryModule),
    TokenModule,
    UserModule,
    CategoryModule,
  ],
  controllers: [DocumentController],
  providers: [DocumentService],
  exports: [DocumentService],
})
export class DocumentModule {}
