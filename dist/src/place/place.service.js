"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceService = void 0;
const common_1 = require("@nestjs/common");
const place_entity_1 = require("./place.entity");
const comment_entity_1 = require("../comment/comment.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const city_entity_1 = require("../city/city.entity");
const incomplete_place_dto_1 = require("./incomplete-place.dto");
let PlaceService = class PlaceService {
    constructor(placeRepository, cityRepository, commentRepository) {
        this.placeRepository = placeRepository;
        this.cityRepository = cityRepository;
        this.commentRepository = commentRepository;
    }
    async create(placeDto) {
        const place = this.placeRepository.create();
        place.name = placeDto.name;
        place.description = placeDto.description;
        place.worktime = placeDto.worktime;
        place.cities = placeDto.cities;
        await this.placeRepository.save(place);
        return place;
    }
    async findAll() {
        const places = await this.placeRepository.find({
            relations: {
                cities: true,
                comments: true,
            },
        });
        return places;
    }
    findOne(id) {
        return this.placeRepository.findOne({
            where: { id },
            relations: { cities: true, comments: true },
        });
    }
    async findIncomplete() {
        const places = await this.placeRepository.find();
        const incompletePlaces = places.map((place) => {
            const incompletePlace = new incomplete_place_dto_1.IncompletePlaceDto();
            incompletePlace.id = place.id;
            incompletePlace.description = place.description;
            incompletePlace.name = place.name;
            return incompletePlace;
        });
        return incompletePlaces;
    }
    async update(id, updPlace) {
        const place = await this.placeRepository.findOne({
            where: { id }
        });
        place.name = updPlace.name;
        place.description = updPlace.description;
        place.worktime = updPlace.worktime;
        place.cities = updPlace.cities;
        place.comments = updPlace.comments;
        await this.placeRepository.save(place);
        return place;
    }
    remove(id) {
        this.placeRepository.delete({ id });
    }
};
PlaceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(place_entity_1.Place)),
    __param(1, (0, typeorm_1.InjectRepository)(city_entity_1.City)),
    __param(2, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PlaceService);
exports.PlaceService = PlaceService;
//# sourceMappingURL=place.service.js.map