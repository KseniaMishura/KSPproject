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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const incomplete_user_dto_1 = require("./incomplete-user.dto");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(userDto) {
        const user = this.userRepository.create();
        user.name = userDto.name;
        user.email = userDto.email;
        user.password = userDto.password;
        user.phone = userDto.phone;
        await this.userRepository.save(user);
        return user;
    }
    async findAll() {
        const user = await this.userRepository.find({
            relations: {
                comments: true
            },
        });
        return user;
    }
    findOne(id) {
        return this.userRepository.findOne({
            where: { id },
            relations: { comments: true },
        });
    }
    async update(id, updUser) {
        const user = await this.userRepository.findOne({
            where: { id }
        });
        user.name = updUser.name;
        user.email = updUser.email;
        user.password = updUser.password;
        user.phone = updUser.phone;
        await this.userRepository.save(user);
        return user;
    }
    remove(id) {
        this.userRepository.delete({ id });
    }
    async findIncomplete() {
        const user = await this.userRepository.find();
        const incompleteUser = user.map((user) => {
            const incompleteUser = new incomplete_user_dto_1.IncompleteUserDto();
            incompleteUser.id = user.id;
            incompleteUser.name = user.name;
            return incompleteUser;
        });
        return incompleteUser;
    }
    findByEmail(email) {
        return this.userRepository.findOne({
            where: { email },
            relations: { comments: true },
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map