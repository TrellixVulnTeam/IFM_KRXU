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
exports.UserHistoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const pagination_dto_1 = require("../common/commonDto/pagination.dto");
const ifmcommon_1 = require("ifmcommon");
const user_history_service_1 = require("./user.history.service");
let UserHistoryController = class UserHistoryController {
    constructor(useristoryService) {
        this.useristoryService = useristoryService;
    }
    async getAll(query) {
        return await this.useristoryService.findAll(query);
    }
    async getFacilityHistory(_id) {
        return await this.useristoryService.findOne(_id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, ifmcommon_1.NoCache)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationParams]),
    __metadata("design:returntype", Promise)
], UserHistoryController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':_id'),
    (0, ifmcommon_1.NoCache)(),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserHistoryController.prototype, "getFacilityHistory", null);
UserHistoryController = __decorate([
    (0, swagger_1.ApiTags)('User_History'),
    (0, common_1.Controller)('userHistory'),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __metadata("design:paramtypes", [user_history_service_1.UserHistoryService])
], UserHistoryController);
exports.UserHistoryController = UserHistoryController;
//# sourceMappingURL=user.history.controller.js.map