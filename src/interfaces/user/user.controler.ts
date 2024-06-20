import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from '../../domain/user.entity';
import {
  CreateUserUseCase,
  GetUserUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
} from '../../application/user/user.use-case';

@Controller('users')
export class UserController {
  constructor(
      private readonly createUserUseCase: CreateUserUseCase,
      private readonly getUserUseCase: GetUserUseCase,
      private readonly updateUserUseCase: UpdateUserUseCase,
      private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.getUserUseCase.execute(id);
  }

  @Put(':id')
  async update(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.updateUserUseCase.execute(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.deleteUserUseCase.execute(id);
  }
}