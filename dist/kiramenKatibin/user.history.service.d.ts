import { BaseHistoryRepositoryInterface } from 'ifmcommon';
import { CreateUserHistoryDto } from './dtos/create.user.history.dto';
import { UserHistory } from './entities/user.history.entity';
export declare class UserHistoryService {
    private readonly userHistoryRepository;
    constructor(userHistoryRepository: BaseHistoryRepositoryInterface<UserHistory>);
    create(createFacilityHistoryDto: CreateUserHistoryDto): Promise<UserHistory>;
    findAll(query: any): Promise<UserHistory[]>;
    findOne(id: string): Promise<any>;
}
