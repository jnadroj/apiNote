import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { TypeAccountInterface } from '@interfaces';
import { TypeAccount } from '@entities/typeAccount.entity';

@Service()
export class TypeAccountsService {
  constructor() {
    // nothing
  }

  private readonly typeAccountRepository =
    getRepository<TypeAccount>(TypeAccount);

  listTypeAccounts() {
    return this.typeAccountRepository.find();
  }

  showTypeAccount(id: number) {
    return this.typeAccountRepository.findOne(id);
  }

  createTypeAccount(bank: TypeAccount) {
    return this.typeAccountRepository.insert(bank);
  }

  editTypeAccount(input: TypeAccountInterface.IEditTypeAccountInput) {
    const { id, typeAccount } = input;
    return this.typeAccountRepository.update(id, typeAccount);
  }

  deleteTypeAccount(id: number) {
    return this.typeAccountRepository.delete(id);
  }
}
