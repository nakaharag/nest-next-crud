import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 30)
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  isActive: boolean;
}

export class UpdateUserDto {
  @IsOptional()
  @Length(3, 30)
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  password: string;

  @IsOptional()
  isActive: boolean;
}
