import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Account } from './account.entity';
@Entity()
export class User extends Base {
  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  @Index({ unique: true })
  email!: string;

  @Column({ select: false })
  password!: string;

  @OneToMany(() => Account, account => account.user)
  accounts!: Account[];
}
