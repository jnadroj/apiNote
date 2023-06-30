import { Seeder, Factory } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Bank } from '@entities/bank.entity';

const banks = [
  { name: 'Banco del Pacífico' },
  { name: 'Banco Pichincha' },
  { name: 'Banco Guayaquil' },
  { name: 'Banco Internacional' },
  { name: 'Banco Bolivariano' },
  { name: 'Banco de Loja' },
  { name: 'Banco de Machala' },
  { name: 'Banco ProCredit' },
  { name: 'Banco del Austro' },
  { name: 'Banco Amazonas' },
  { name: 'Banco Solidario' },
  { name: 'Banco D-MIRO' },
  { name: 'Banco Promerica' },
  { name: 'Banco Comercial de Manabí' },
  { name: 'Banco Capital' },
  { name: 'Banco General Rumiñahui' },
  { name: 'Banco Coopnacional' },
  { name: 'Banco Finca' },
  { name: 'Banco de Fomento' },
  { name: 'Banco del Litoral' },
  { name: 'Banco Comercial de Quito' },
  { name: 'Banco Cooperativo COAC' },
  { name: 'Banco Produbanco' },
  { name: 'Banco Alianza del Valle' },
  { name: 'Banco Comercial del Azuay' },
  { name: 'Banco Comercial del Pacífico' }
];

export default class implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Bank)
      .values(banks)
      .execute();
  }
}
