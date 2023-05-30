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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const comment_entity_1 = require("./comment.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const place_entity_1 = require("../place/place.entity");
let CommentService = class CommentService {
    constructor(commentRepository, userRepository, placeRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.placeRepository = placeRepository;
    }
    async create(comment) {
        const com = this.commentRepository.create();
        com.text = comment.text;
        com.user = comment.user;
        com.places = comment.places;
        await this.commentRepository.save(comment);
        return com;
    }
    findOne(id) {
        return this.commentRepository.findOne({
            where: { id },
            relations: { user: true, places: true },
        });
    }
    async findAll() {
        const com = await this.commentRepository.find({
            relations: {
                user: true,
            },
        });
        return com;
    }
    async update(id, updateComment) {
        const com = await this.commentRepository.findOne({
            where: { id }
        });
        com.text = updateComment.text;
        await this.commentRepository.save(com);
        return com;
    }
    remove(id) {
        this.commentRepository.delete({ id });
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(place_entity_1.Place)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map