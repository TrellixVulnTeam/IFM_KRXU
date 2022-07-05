"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFountException = void 0;
const common_1 = require("@nestjs/common");
const i18n_enum_1 = require("../const/i18n.enum");
function UserNotFountException(id) {
    throw new common_1.HttpException({ key: i18n_enum_1.I18NEnums.USER_NOT_FOUND, args: { id: id } }, common_1.HttpStatus.NOT_FOUND);
}
exports.UserNotFountException = UserNotFountException;
//# sourceMappingURL=user.not.found.exception.js.map