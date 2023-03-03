import { MigrationInterface, QueryRunner } from "typeorm";

export class nomeDaMigration1675861197257 implements MigrationInterface {
    name = 'nomeDaMigration1675861197257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "preco" character varying NOT NULL, "generos" character varying NOT NULL, "imagenPrincipal" character varying NOT NULL, "imagens" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_b090d1e0e0721a15b3f9f0c6f0e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "itens"`);
    }

}
