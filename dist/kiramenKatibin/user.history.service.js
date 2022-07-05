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
exports.UserHistoryService = void 0;
const common_1 = require("@nestjs/common");
const repository_enum_1 = require("../common/const/repository.enum");
const nestjs_otel_1 = require("nestjs-otel");
let UserHistoryService = class UserHistoryService {
    constructor(userHistoryRepository) {
        this.userHistoryRepository = userHistoryRepository;
    }
    async create(createFacilityHistoryDto) {
        return await this.userHistoryRepository.create(createFacilityHistoryDto);
    }
    async findAll(query) {
        return await this.userHistoryRepository.findAll(query);
    }
    async findOne(id) {
        return await this.userHistoryRepository.findOneById(id);
    }
};
__decorate([
    (0, nestjs_otel_1.Span)('find all histories of the user'),
    (0, nestjs_otel_1.OtelMethodCounter)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserHistoryService.prototype, "findAll", null);
__decorate([
    (0, nestjs_otel_1.Span)('find one a history of the user by id'),
    (0, nestjs_otel_1.OtelMethodCounter)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserHistoryService.prototype, "findOne", null);
UserHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(repository_enum_1.RepositoryEnums.USER_HISTORY)),
    __metadata("design:paramtypes", [Object])
], UserHistoryService);
exports.UserHistoryService = UserHistoryService;
//# sourceMappingURL=user.history.service.js.map