import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controler';
import { User } from '../../domain/user.entity';
import { CreateUserUseCase, GetUserUseCase, UpdateUserUseCase, DeleteUserUseCase } from '../../application/user/user.use-case';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [CreateUserUseCase, GetUserUseCase, UpdateUserUseCase, DeleteUserUseCase],
})
export class UserModule {}