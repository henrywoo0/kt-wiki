import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TokenModule } from '../token/token.module';
import { UserModule } from '../user/user.module';
import { DocumentModule } from '../document/document.module';

@Module({
  imports: [TokenModule, UserModule, DocumentModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
