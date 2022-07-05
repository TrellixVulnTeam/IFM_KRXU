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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_not_found_exception_1 = require("../../common/notFoundExceptions/user.not.found.exception");
const user_entity_1 = require("../entities/user.entity");
let UserRepository = class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findOneById(id) {
        const user = await this.userModel.findOne({ userId: id }).exec();
        if (!user) {
            throw new user_not_found_exception_1.UserNotFountException(id);
        }
        return user;
    }
    async findAll(data) {
        let { page, limit } = data;
        page = page || 0;
        limit = limit || 5;
        const orderBy = data.orderBy || 'ascending';
        const orderByColumn = data.orderByColumn || 'createdAt';
        const count = parseInt((await this.userModel.find().count()).toString());
        const pagecount = Math.ceil(count / limit);
        let pg = parseInt(page.toString());
        const lmt = parseInt(limit.toString());
        if (pg > pagecount) {
            pg = pagecount;
        }
        let skip = pg * lmt;
        if (skip >= count) {
            skip = count - lmt;
            if (skip < 0) {
                skip = 0;
            }
        }
        const result = await this.userModel
            .find()
            .skip(skip)
            .limit(lmt)
            .sort([[orderByColumn, orderBy]])
            .exec();
        const pagination = { count: count, page: pg, limit: lmt };
        const user = [];
        user.push(result);
        user.push(pagination);
        return user;
    }
    async create(createFacilityDto) {
        const user = new this.userModel(createFacilityDto);
        return await user.save();
    }
    async update(_id, updateFacilityDto) {
        const updatedUser = await this.userModel
            .findOneAndUpdate({ userId: _id }, { $set: updateFacilityDto }, { new: true })
            .exec();
        if (!updatedUser) {
            throw new user_not_found_exception_1.UserNotFountException(_id);
        }
        return updatedUser;
    }
    async delete(_id) {
        const user = await this.findOneById(_id);
        const deletedUser = await this.userModel.findOneAndRemove({ user });
        return deletedUser;
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map