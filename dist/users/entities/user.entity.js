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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const ifmcommon_1 = require("ifmcommon");
const language_enum_1 = require("../../common/const/language.enum");
const ifmcommon_2 = require("ifmcommon");
let User = User_1 = class User extends ifmcommon_1.BasePersistantDocumentObject {
};
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "business_code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "business_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: language_enum_1.Languages.EN }),
    __metadata("design:type", String)
], User.prototype, "language", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        default: function getClassName() {
            return User_1.name;
        },
    }),
    __metadata("design:type", String)
], User.prototype, "class_name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "landing_page", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        default: (0, ifmcommon_2.genCurrentDate)(),
    }),
    __metadata("design:type", Date)
], User.prototype, "LoginAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        default: (0, ifmcommon_2.genCurrentDate)(),
    }),
    __metadata("design:type", Date)
], User.prototype, "LogoutAt", void 0);
User = User_1 = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.entity.js.map