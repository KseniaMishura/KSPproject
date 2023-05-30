import { City } from 'src/city/city.entity';

export class CreatePlaceDto{
    name: string
    worktime: string;
    description:string;
    cities: City;
}