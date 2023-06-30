import { Account } from '@entities/account.entity';

export interface IEditAccountInput {
  id: number;
  account: Account;
}
