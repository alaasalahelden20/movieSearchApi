// src/users/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
}

export class loginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
}
