import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./UserDTO";
import { IncompleteUserDto } from "./incomplete-user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(userDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updUser: User): Promise<User>;
    remove(id: number): void;
    findIncomplete(): Promise<IncompleteUserDto[]>;
    findByEmail(email: string): Promise<User>;
}
