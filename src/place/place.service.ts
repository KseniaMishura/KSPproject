import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Place } from "./place.entity";
import { Comment } from "src/comment/comment.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { City } from "src/city/city.entity";
import { CreatePlaceDto } from "./placeDTO";
import { IncompletePlaceDto } from "./incomplete-place.dto";

@Injectable()
export class PlaceService{
    constructor (
        @InjectRepository(Place)
        private readonly placeRepository: Repository<Place>,
        @InjectRepository(City)
        private readonly cityRepository: Repository<City>,
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>){}
    async create(placeDto: CreatePlaceDto): Promise<Place>{
        const place = this.placeRepository.create();
        place.name = placeDto.name
        place.description = placeDto.description
        place.worktime = placeDto.worktime
        place.cities = placeDto.cities;
        await this.placeRepository.save(place);
        return place;
    }
    async findAll(): Promise<Place[]>{
        const places = await this.placeRepository.find({
            relations:{
                cities: true,
                comments: true,
        } ,
    });
    return places;
    }
    findOne(id: number): Promise<Place>{
        return this.placeRepository.findOne({
            where: {id},
            relations:{cities: true, comments: true},
        });
    }
    async findIncomplete(): Promise<IncompletePlaceDto[]>{
        const places = await this.placeRepository.find();
        const incompletePlaces: IncompletePlaceDto[] = places.map((place) => 
        {
            const incompletePlace = new IncompletePlaceDto();
            incompletePlace.id = place.id;
            incompletePlace.description = place.description;
            incompletePlace.name = place.name;
            return incompletePlace;
        });
        return incompletePlaces;
    }

    async update(id: number, updPlace: Place){
        const place = await this.placeRepository.findOne({
            where: {id}
        });
        place.name = updPlace.name;
        place.description = updPlace.description;
        place.worktime = updPlace.worktime;
        place.cities = updPlace.cities;
        place.comments = updPlace.comments;
        await this.placeRepository.save(place);
        return place;
    }
    remove(id: number){
        this.placeRepository.delete({id});
    }
    
}