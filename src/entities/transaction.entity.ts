import { Column, Entity, ManyToOne } from 'typeorm';

import { Base } from './base.entity';
import { Account } from './account.entity';
import { TypeTransaction } from './typeTransaction.entity';

@Entity()
export class Transaction extends Base {
  @Column()
  name!: string;

  @Column()
  value!: number;

  @ManyToOne(() => Account, account => account.transactions)
  account!: Account;

  @ManyToOne(() => TypeTransaction, typeTransaction => typeTransaction.transactions)
  typeTransaction!: TypeTransaction;
}
