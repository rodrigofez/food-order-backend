import {MigrationInterface, QueryRunner} from "typeorm";

export class ticketItemBasicTotal1651828407180 implements MigrationInterface {
    name = 'ticketItemBasicTotal1651828407180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ticket" ADD "totalAmount" numeric(15,4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ticket_item" ADD "totalAmount" numeric(15,4) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ticket_item" DROP COLUMN "totalAmount"`);
        await queryRunner.query(`ALTER TABLE "ticket" DROP COLUMN "totalAmount"`);
    }

}