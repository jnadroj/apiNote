import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateAccountEntity1688064831882 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'account',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'bankId',
            type: 'int',
            isNullable: false
          },
          {
            name: 'typeAccountId',
            type: 'int',
            isNullable: false
          },
          {
            name: 'name',
            type: 'varchar'
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
      'account',
      new TableForeignKey({
        columnNames: ['bankId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'bank',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'account',
      new TableForeignKey({
        columnNames: ['typeAccountId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'type_account',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('account', 'bankId');
    await queryRunner.dropForeignKey('account', 'typeAccountId');
    await queryRunner.dropTable('account');
  }
}
