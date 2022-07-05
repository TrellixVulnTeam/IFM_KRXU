import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Omit<CreateUserDto, "userId">>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    updatedAt: Date;
    loginAt: Date;
    logoutAt: Date;
    landing_page: string;
    isActive: boolean;
    isDeleted: boolean;
}
export {};
