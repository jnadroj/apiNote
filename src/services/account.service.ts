import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { AccountInterface } from '@interfaces';
import { Account } from '@entities/account.entity';

@Service()
export class AccountsService {
  constructor() {
    // nothing
  }

  private readonly accountRepository = getRepository<Account>(Account);

  listAccounts() {
    return this.accountRepository.find();
  }

  showAccount(id: number) {
    return this.accountRepository.findOne(id, {
      relations: ['bank', 'typeAccount', 'user']
    });
  }

  createAccount(account: Account) {
    return this.accountRepository.insert(account);
  }

  editAccount(input: AccountInterface.IEditAccountInput) {
    const { id, account } = input;
    return this.accountRepository.update(id, account);
  }

  deleteAccount(id: number) {
    return this.accountRepository.delete(id);
  }
}
