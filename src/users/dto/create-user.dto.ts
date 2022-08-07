import { Contains, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Contains('@')
  email: string;

  @MinLength(8)
  password: string;
}
