import { PaginationParams } from 'src/common/commonDto/pagination.dto';
import { UserHistory } from './entities/user.history.entity';
import { UserHistoryService } from './user.history.service';
export declare class UserHistoryController {
    private readonly useristoryService;
    constructor(useristoryService: UserHistoryService);
    getAll(query: PaginationParams): Promise<UserHistory[]>;
    getFacilityHistory(_id: string): Promise<UserHistory[]>;
}
