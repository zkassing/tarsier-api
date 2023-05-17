import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
