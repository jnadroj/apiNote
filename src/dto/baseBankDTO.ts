import { MinLength } from 'class-validator';

export class BaseBankDTO {
  @MinLength(6)
  name!: string;
}
