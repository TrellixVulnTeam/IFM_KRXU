import { Model } from 'mongoose';
import { PaginationParams } from 'src/common/commonDto/pagination.dto';
import { BaseHistoryRepositoryInterface } from 'ifmcommon';
import { CreateUserHistoryDto } from '../dtos/create.user.history.dto';
import { UserHistory } from '../entities/user.history.entity';
export declare class UserHistoryRepository implements BaseHistoryRepositoryInterface<UserHistory> {
    private readonly userHistoryModel;
    constructor(userHistoryModel: Model<UserHistory>);
    findOneById(id: string): Promise<UserHistory[]>;
    findAll(data: PaginationParams): Promise<any[]>;
    create(createFacilityHistoryDto: CreateUserHistoryDto): Promise<UserHistory & {
        _id: any;
    }>;
}
