import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Initial1682761819578 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
