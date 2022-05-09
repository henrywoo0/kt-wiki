import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocumentModule } from './api/document/document.module';
import { UserModule } from './api/user/user.module';
import { DatabaseModule } from './config/database/database.module';
import { AdminModule } from './api/admin/admin.module';
import { TokenModule } from './api/token/token.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
