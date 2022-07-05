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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
const pagination_dto_1 = require("../common/commonDto/pagination.dto");
const ifmcommon_1 = require("ifmcommon");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const users_service_1 = require("./users.service");
const update_user_interceptor_1 = require("./interceptors/update.user.interceptor");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAll(params) {
        return this.userService.findAll(params);
    }
    getById(id) {
        return this.userService.findOne(id);
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    update(id, updateUserDto) {
        return this.userService.update(id, updateUserDto);
    }
    deleteFacility(id) {
        return this.userService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Gets all Users with pagination',
        description: 'If you want to get all User in your organization use this route. It takes no path or query params',
    }),
    (0, common_1.Get)('/'),
    (0, ifmcommon_1.NoCache)(),
    (0, common_1.HttpCode)(200),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationParams]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Gets User with id ',
        description: 'If you want to get specific User in your organization use this route. It takes  query params which is  id',
    }),
    (0, common_1.Get)('/:userId'),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: create_user_dto_1.CreateUserDto,
        description: 'Store User structure',
    }),
    (0, common_1.Post)(''),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: update_user_dto_1.UpdateUserDto,
        description: 'update  User structure',
    }),
    (0, common_1.Patch)('/:userId'),
    (0, common_1.UseInterceptors)(update_user_interceptor_1.UpdateUserInterceptor),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:userId'),
    (0, nest_keycloak_connect_1.Unprotected)(),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteFacility", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map