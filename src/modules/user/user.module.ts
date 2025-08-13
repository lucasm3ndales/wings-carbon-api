import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './domain/entities/user.entity';
import { UserRepository } from './domain/repositories/user.repository';

@Module({
  providers: [UserService, UserRepository],
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([UserEntity])],
})
export class UserModule {}
