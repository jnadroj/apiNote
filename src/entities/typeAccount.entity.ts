import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Account } from './account.entity';
@Entity()
export class TypeAccount extends Base {
  @Column()
  name!: string;

  @OneToMany(() => Account, account => account.type)
  accounts!: Account[];
}
