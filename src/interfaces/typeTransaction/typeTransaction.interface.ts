import { TypeTransaction } from '@entities/typeTransaction.entity';

export interface IEditTypeTransactionInput {
  id: number;
  typeTransaction: TypeTransaction;
}
