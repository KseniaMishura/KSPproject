import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Initial1682761125330 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
