"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const place_module_1 = require("./place/place.module");
const comment_module_1 = require("./comment/comment.module");
const typeorm_1 = require("@nestjs/typeorm");
const datasource_module_1 = require("./datasource/datasource.module");
const user_module_1 = require("./user/user.module");
const city_module_1 = require("./city/city.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                database: 'education',
                username: 'postgres',
                password: 'password',
                host: 'localhost',
                synchronize: false,
                logging: 'all',
                entities: ['dist/**/*.entity{.ts,.js}'],
            }), user_module_1.UserModule, comment_module_1.CommentModule, city_module_1.CityModule, place_module_1.PlaceModule,
            datasource_module_1.DatasourceModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map