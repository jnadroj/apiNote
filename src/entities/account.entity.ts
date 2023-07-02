import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { User } from './user.entity';
import { Bank } from './bank.entity';
import { Transaction } from './transaction.entity';
import { TypeAccount } from './typeAccount.entity';
@Entity()
export class Account extends Base {
  @Column()
  name!: string;

  @ManyToOne(() => User, user => user.accounts)
  user!: User;

  @ManyToOne(() => Bank, bank => bank.accounts)
  bank!: Bank;

  @ManyToOne(() => TypeAccount, typeAccount => typeAccount.accounts)
  typeAccount!: TypeAccount;

  @OneToMany(() => Transaction, transaction => transaction.account)
  transactions!: Transaction[];
}
