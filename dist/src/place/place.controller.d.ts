import { Place } from "./place.entity";
import { PlaceService } from "./place.service";
export declare class PlaceController {
    private readonly placeServ;
    constructor(placeServ: PlaceService);
    findAll(): Promise<Place[]>;
    findOne(id: string): Promise<Place>;
    update(id: string, updPlace: Place): Promise<Place>;
    create(createPlace: Place): Promise<Place>;
    remove(id: string): void;
}
