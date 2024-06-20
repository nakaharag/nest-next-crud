import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../interfaces/user/user.dto';
import { User } from '../../domain/user.entity';
import { CreateUserUseCase, GetUserUseCase, UpdateUserUseCase, DeleteUserUseCase } from  './user.use-case';

@Injectable()
export class CreateUserService {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    async execute(createUserDto: CreateUserDto): Promise<User> {
        return this.createUserUseCase.execute(createUserDto);
    }
}

@Injectable()
export class GetUserService {
    constructor(private readonly getUserUseCase: GetUserUseCase) {}

    async execute(id: string): Promise<User> {
        return this.getUserUseCase.execute(id);
    }
}

@Injectable()
export class UpdateUserService {
    constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

    async execute(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        return this.updateUserUseCase.execute(id, updateUserDto);
    }
}

@Injectable()
export class DeleteUserService {
    constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

    async execute(id: string): Promise<void> {
        return this.deleteUserUseCase.execute(id);
    }
}