import { MinLength } from 'class-validator';

export class BaseTypeAccountDTO {
  @MinLength(8)
  name!: string;
}
