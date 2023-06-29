import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Account } from './account.entity';
@Entity()
export class Bank extends Base {
  @Column()
  name!: string;

  @OneToMany(() => Account, account => account.bank)
  accounts!: Account[];
}
