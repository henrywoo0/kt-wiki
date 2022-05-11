import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserRepository from './repository/user.repository';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]), TokenModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
