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
const pagination_dto_1 = require("../common/commonDto/pagination.dto");
const repository_enum_1 = require("../common/const/repository.enum");
const nestjs_otel_1 = require("nestjs-otel");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findAll(query) {
        return this.userRepository.findAll(query);
    }
    async findOne(id) {
        return this.userRepository.findOneById(id);
    }
    create(createUserDto) {
        return this.userRepository.create(createUserDto);
    }
    async update(id, updateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }
    async remove(id) {
        const deletedUser = await this.userRepository.delete(id);
        return deletedUser;
    }
};
__decorate([
    (0, nestjs_otel_1.Span)('find all User'),
    (0, nestjs_otel_1.OtelMethodCounter)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationParams]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "findAll", null);
__decorate([
    (0, nestjs_otel_1.Span)('find a user by id'),
    (0, nestjs_otel_1.OtelMethodCounter)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "findOne", null);
__decorate([
    (0, nestjs_otel_1.Span)('create a user'),
    (0, nestjs_otel_1.OtelMethodCounter)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "create", null);
__decorate([
    (0, nestjs_otel_1.Span)('update a user'),
    (0, nestjs_otel_1.OtelMethodCounter)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "update", null);
__decorate([
    (0, nestjs_otel_1.Span)('remove a user'),
    (0, nestjs_otel_1.OtelMethodCounter)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "remove", null);
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(repository_enum_1.RepositoryEnums.USER)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map