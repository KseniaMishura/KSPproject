"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceModule = void 0;
const common_1 = require("@nestjs/common");
const datasource_module_1 = require("../datasource/datasource.module");
const place_controller_1 = require("./place.controller");
const place_entity_1 = require("./place.entity");
const place_service_1 = require("./place.service");
const comment_entity_1 = require("../comment/comment.entity");
const typeorm_1 = require("@nestjs/typeorm");
const city_entity_1 = require("../city/city.entity");
let PlaceModule = class PlaceModule {
};
PlaceModule = __decorate([
    (0, common_1.Module)({
        controllers: [place_controller_1.PlaceController],
        providers: [place_service_1.PlaceService],
        imports: [datasource_module_1.DatasourceModule,
            typeorm_1.TypeOrmModule.forFeature([city_entity_1.City, comment_entity_1.Comment, place_entity_1.Place]),
        ],
    })
], PlaceModule);
exports.PlaceModule = PlaceModule;
//# sourceMappingURL=place.module.js.map