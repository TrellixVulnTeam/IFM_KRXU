"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const connection_enum_1 = require("../common/const/connection.enum");
const repository_enum_1 = require("../common/const/repository.enum");
const user_history_entity_1 = require("./entities/user.history.entity");
const user_history_repository_1 = require("./repositories/user.history.repository");
const user_history_controller_1 = require("./user.history.controller");
const user_history_service_1 = require("./user.history.service");
let HistoryModule = class HistoryModule {
};
HistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: user_history_entity_1.UserHistory.name,
                    schema: user_history_entity_1.UserHistorySchema,
                },
            ], connection_enum_1.ConnectionEnums.USER),
        ],
        controllers: [user_history_controller_1.UserHistoryController],
        providers: [
            user_history_service_1.UserHistoryService,
            {
                provide: repository_enum_1.RepositoryEnums.USER_HISTORY,
                useClass: user_history_repository_1.UserHistoryRepository,
            },
        ],
        exports: [user_history_service_1.UserHistoryService],
    })
], HistoryModule);
exports.HistoryModule = HistoryModule;
//# sourceMappingURL=history.module.js.map