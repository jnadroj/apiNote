import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { TransactionInterface } from '@interfaces';
import { Transaction } from '@entities/transaction.entity';

@Service()
export class TransactionsService {
  constructor() {
    // nothing
  }

  private readonly transactionRepository =
    getRepository<Transaction>(Transaction);

  listTransactions() {
    return this.transactionRepository.find();
  }

  showTransaction(id: number) {
    return this.transactionRepository.findOne(id, {
      relations: ['typeTransaction', 'account']
    });
  }

  createTransaction(transaction: Transaction) {
    return this.transactionRepository.insert(transaction);
  }

  editTransaction(input: TransactionInterface.IEditTransactionInput) {
    const { id, transaction } = input;
    return this.transactionRepository.update(id, transaction);
  }

  deleteTransaction(id: number) {
    return this.transactionRepository.delete(id);
  }
}
