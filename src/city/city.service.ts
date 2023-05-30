import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { City } from "./city.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Place } from "src/place/place.entity";

@Injectable()
export class CityService {
    constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    @InjectRepository(Place)
    private readonlyplaceRepository: Repository<Place>
    ) {}
    async create(city: City): Promise<City>{
        const cities = this.cityRepository.create();
        cities.country = city.country;
        cities.name = city.name;
        await this.cityRepository.save(cities);
        return cities;
    }
    findOne(id: number) {
        return this.cityRepository.findOne({
            where: {id},
            relations: {
                places: true
            },
        });
    }
    async findAll(): Promise<City[]>{
        const cities = await this.cityRepository.find({
            relations:{
                places: true,
            },
        });
        console.log(cities)
        return cities;
     
    }
    async update(id: number, updateCity: City){
        const cities = await this.cityRepository.findOne({
            where: {id}
        });
        cities.name = updateCity.name;
        cities.country = updateCity.country;
        cities.places = updateCity.places;
        await this.cityRepository.save(cities);
        return cities;
    }
    remove(id: number){
         this.cityRepository.delete({id});
    }
}
