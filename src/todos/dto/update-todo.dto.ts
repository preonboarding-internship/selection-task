import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  todo: string;

  @IsNotEmpty()
  @IsBoolean()
  isCompleted: boolean;
}
