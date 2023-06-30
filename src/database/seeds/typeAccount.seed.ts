import { Seeder, Factory } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { TypeAccount } from '@entities/typeAccount.entity';

const typeAccounts = [{ name: 'CT. Ahorros' }, { name: 'CT. Corriente' }];

export default class implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(TypeAccount)
      .values(typeAccounts)
      .execute();
  }
}
