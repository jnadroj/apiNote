import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { BankInterface } from '@interfaces';
import { Bank } from '@entities/bank.entity';

@Service()
export class BanksService {
  constructor() {
    // nothing
  }

  private readonly bankRepository = getRepository<Bank>(Bank);

  listBanks() {
    return this.bankRepository.find();
  }

  showBank(id: number) {
    return this.bankRepository.findOne(id);
  }

  createBank(bank: Bank) {
    return this.bankRepository.insert(bank);
  }

  editBank(input: BankInterface.IEditBankInput) {
    const { id, bank } = input;
    return this.bankRepository.update(id, bank);
  }

  deleteBank(id: number) {
    return this.bankRepository.delete(id);
  }
}
