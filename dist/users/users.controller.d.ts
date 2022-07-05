import { PaginationParams } from 'src/common/commonDto/pagination.dto';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(params: PaginationParams): Promise<User[]>;
    getById(id: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    deleteFacility(id: string): Promise<User>;
}
