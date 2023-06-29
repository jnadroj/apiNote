import { Bank } from '@entities/bank.entity';

export interface IEditBankInput {
  id: number;
  bank: Bank;
}
