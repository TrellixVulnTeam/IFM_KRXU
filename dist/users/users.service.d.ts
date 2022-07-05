import { PaginationParams } from 'src/common/commonDto/pagination.dto';
import { BaseInterfaceRepository } from 'ifmcommon';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: BaseInterfaceRepository<User>);
    findAll(query: PaginationParams): Promise<User[]>;
    findOne(id: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: string): Promise<User>;
}
