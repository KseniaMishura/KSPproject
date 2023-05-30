import { Module } from "@nestjs/common";
import { DatasourceModule } from "src/datasource/datasource.module";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";
import { Comment } from "./comment.entity";
import { Place } from "src/place/place.entity";
import { User } from "src/user/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    controllers: [CommentController],
    providers: [CommentService],
    imports: [DatasourceModule,
    TypeOrmModule.forFeature([Comment, User, Place])],
})
export class CommentModule{}