import { IsNotEmpty, MinLength } from 'class-validator';

export class BaseTransactionDTO {
  @MinLength(6)
  name!: string;

  @IsNotEmpty()
  accountId!: number;

  @IsNotEmpty()
  typeTransactionId!: number;
}
