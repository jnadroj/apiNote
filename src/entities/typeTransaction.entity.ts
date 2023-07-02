import { Column, Entity, OneToMany } from 'typeorm';

import { Base } from './base.entity';
import { Transaction } from './transaction.entity';

@Entity()
export class TypeTransaction extends Base {
  @Column()
  name!: string;

  @OneToMany(() => Transaction, transaction => transaction.typeTransaction)
  transactions!: Transaction[];
}
