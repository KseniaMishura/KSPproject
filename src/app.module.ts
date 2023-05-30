import { Module } from '@nestjs/common';
import { PlaceModule } from './place/place.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasourceModule } from './datasource/datasource.module';
import { UserModule } from './user/user.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'postgres', 
      database: 'education',
      username: 'postgres', 
      password: 'password', 
      host: 'localhost',
      synchronize: false, 
      logging: 'all', 
	    entities: ['dist/**/*.entity{.ts,.js}'], 
    }), UserModule, CommentModule, CityModule, PlaceModule,
    DatasourceModule
  ],
  controllers: [],
  providers: [],

})

export class AppModule {}
