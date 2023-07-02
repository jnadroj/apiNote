import { AuthController } from './auth.controller';
import { UserController } from './users.controller';
import { BankController } from './banks.controller';
export { AccountController } from './accounts.controller';
import { TypeAccountController } from './typeAccounts.controller';
import { AccountController } from './accounts.controller';
import { TransactionController } from './transactions.controller';

export const controllers = [
  AuthController,
  UserController,
  BankController,
  AccountController,
  TransactionController,
  TypeAccountController
];
