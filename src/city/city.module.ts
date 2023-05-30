import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from 'src/place/place.entity';
import { City } from './city.entity';
@Module({
    controllers: [CityController],
    providers: [CityService],
    imports: [DatasourceModule,
    TypeOrmModule.forFeature([City, Place])],
})
export class CityModule{}