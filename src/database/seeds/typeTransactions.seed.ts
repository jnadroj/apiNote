import { Seeder, Factory } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { TypeTransaction } from '@entities/typeTransaction.entity';

const typeTransactions = [
  { name: 'Expense' },
  { name: 'Income' },
  { name: 'Transfer' }
];

export default class implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(TypeTransaction)
      .values(typeTransactions)
      .execute();
  }
}
