import { User } from "./user.entity";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userServ;
    constructor(userServ: UserService);
    findAll(): Promise<User[]>;
    findIncomplete(): () => Promise<import("./incomplete-user.dto").IncompleteUserDto[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updUser: User): Promise<User>;
    create(createUser: User): Promise<User>;
    remove(id: string): void;
}
