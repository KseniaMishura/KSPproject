import { PlaceService } from "./place.service";
export declare class PlaceController {
    private readonly placeServ;
    constructor(placeServ: PlaceService);
    findIncomplete(): Promise<import("./incomplete-place.dto").IncompletePlaceDto[]>;
}
