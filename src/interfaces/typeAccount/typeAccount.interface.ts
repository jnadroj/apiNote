import { TypeAccount } from '@entities/typeAccount.entity';

export interface IEditTypeAccountInput {
  id: number;
  typeAccount: TypeAccount;
}
