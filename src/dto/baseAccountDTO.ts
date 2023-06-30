import { IsNotEmpty, MinLength } from 'class-validator';

export class BaseAccountDTO {
  @MinLength(6)
  name!: string;

  @IsNotEmpty()
  bankId!: number;

  @IsNotEmpty()
  typeAccountId!: number;

  @IsNotEmpty()
  userId!: number;
}
