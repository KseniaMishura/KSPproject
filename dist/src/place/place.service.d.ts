import { Place } from "./place.entity";
import { Comment } from "src/comment/comment.entity";
import { Repository } from "typeorm";
import { City } from "src/city/city.entity";
import { CreatePlaceDto } from "./placeDTO";
import { IncompletePlaceDto } from "./incomplete-place.dto";
export declare class PlaceService {
    private readonly placeRepository;
    private readonly cityRepository;
    private readonly commentRepository;
    constructor(placeRepository: Repository<Place>, cityRepository: Repository<City>, commentRepository: Repository<Comment>);
    create(placeDto: CreatePlaceDto): Promise<Place>;
    findAll(): Promise<Place[]>;
    findOne(id: number): Promise<Place>;
    findIncomplete(): Promise<IncompletePlaceDto[]>;
    update(id: number, updPlace: Place): Promise<Place>;
    remove(id: number): void;
}
