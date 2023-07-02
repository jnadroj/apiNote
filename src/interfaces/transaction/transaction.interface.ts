import { Transaction } from '@entities/transaction.entity';

export interface IEditTransactionInput {
  id: number;
  transaction: Transaction
}
