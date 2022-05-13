import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocumentModule } from './api/document/document.module';
import { UserModule } from './api/user/user.module';
import { DatabaseModule } from './config/database/database.module';
import { AdminModule } from './api/admin/admin.module';
import { TokenModule } from './api/token/token.module';
import { HistoryModule } from './api/history/history.module';
import { DocumentService } from './api/document/document.service';
import { HistoryService } from './api/history/history.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    DocumentModule,
    UserModule,
    AdminModule,
    TokenModule,
    HistoryModule,
    DocumentService,
    HistoryService,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
