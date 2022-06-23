import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  password: string;

  @IsString()
  @MinLength(3, { message: 'Password is too short (8 characters min)' })
  @MaxLength(20, { message: 'Password is too long (20 characters max)' })
  fullname: string;

  @IsString()
  @MinLength(10, { message: 'Phone is too short (10 characters min)' })
  @MaxLength(14, { message: 'Password is too long (14 characters max)' })
  phone: string;
}
