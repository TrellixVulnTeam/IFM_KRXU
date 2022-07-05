import { Model } from 'mongoose';
import { PaginationParams } from 'src/common/commonDto/pagination.dto';
import { BaseInterfaceRepository } from 'ifmcommon';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
export declare class UserRepository implements BaseInterfaceRepository<User> {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findOneById(id: string): Promise<User>;
    findAll(data: PaginationParams): Promise<any[]>;
    create(createFacilityDto: CreateUserDto): Promise<User & {
        _id: any;
    }>;
    update(_id: string, updateFacilityDto: UpdateUserDto): Promise<User & {
        _id: any;
    }>;
    delete(_id: string): Promise<User & {
        _id: any;
    }>;
}
