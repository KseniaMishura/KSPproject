import { CityService } from "./city.service";
import { City } from "./city.entity";
export declare class CityController {
    private readonly cityServ;
    constructor(cityServ: CityService);
    findAll(): Promise<City[]>;
    findOne(id: string): Promise<City>;
    update(id: string, updateCity: City): Promise<City>;
    create(createCity: City): Promise<City>;
    remove(id: string): void;
}
