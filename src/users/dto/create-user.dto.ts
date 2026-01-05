import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nombres: string;
  @IsString()
  apellidos: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
