import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// tslint:disable-next-line: class-name
export class datacli1610404818986 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'datacli',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'navbar',
            type: 'varchar',
          },
          {
            name: 'version',
            type: 'varchar',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'subtitle',
            type: 'varchar',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('datacli');
  }
}
