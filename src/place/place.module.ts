import { Module } from "@nestjs/common";
import { DatasourceModule } from "src/datasource/datasource.module";
import { PlaceController } from "./place.controller";
import { Place } from "./place.entity";
import { PlaceService } from "./place.service";
import { Comment } from "src/comment/comment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from "src/city/city.entity";

@Module({
    controllers: [PlaceController],
    providers: [PlaceService],
    imports: [DatasourceModule,
    TypeOrmModule.forFeature([City, Comment, Place]),
],
})
export class PlaceModule{}