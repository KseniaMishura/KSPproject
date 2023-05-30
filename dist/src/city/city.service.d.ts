import { City } from "./city.entity";
import { Repository } from "typeorm";
import { Place } from "src/place/place.entity";
export declare class CityService {
    private readonly cityRepository;
    private readonlyplaceRepository;
    constructor(cityRepository: Repository<City>, readonlyplaceRepository: Repository<Place>);
    create(city: City): Promise<City>;
    findOne(id: number): Promise<City>;
    findAll(): Promise<City[]>;
    update(id: number, updateCity: City): Promise<City>;
    remove(id: number): void;
}
