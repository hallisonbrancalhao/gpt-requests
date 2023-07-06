import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  senha: string;
}
