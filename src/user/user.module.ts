import { Module } from "@nestjs/common";
import { DatasourceModule } from "src/datasource/datasource.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { Comment } from "src/comment/comment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [DatasourceModule,
    TypeOrmModule.forFeature([User, Comment])],
})
export class UserModule {}