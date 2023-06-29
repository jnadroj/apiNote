import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateTransactionEntity1688066939398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transaction',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'accountId',
            type: 'int',
            isNullable: false
          },
          {
            name: 'typeTransactionId',
            type: 'int',
            isNullable: false
          },
          {
            name: 'value',
            type: 'decimal',
            precision: 10,
            scale: 2
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      }),
      true
    );

    await queryRunner.createForeignKey(
      'transaction',
      new TableForeignKey({
        columnNames: ['accountId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'account',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'transaction',
      new TableForeignKey({
        columnNames: ['typeTransactionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'type_transaction',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('transaction', 'typeTransactionId');
    await queryRunner.dropForeignKey('transaction', 'accountId');
    await queryRunner.dropTable('transaction');
  }
}
