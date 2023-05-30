import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from "src/comment/comment.entity";
import { CreateUserDto } from "./UserDTO";
import { IncompleteUserDto } from "./incomplete-user.dto";

@Injectable()
export class UserService{
    constructor (
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    
    ){}
    async create(userDto: CreateUserDto): Promise<User>{
        const user = this.userRepository.create();
        user.name = userDto.name;
        user.email = userDto.email;
        user.password = userDto.password;
        user.phone = userDto.phone;
        await this.userRepository.save(user);
        return user;
    }
    async findAll(): Promise<User[]> {
        const user = await this.userRepository.find({
            relations:{
                comments: true
            },
        });
        return user;
    }
    findOne(id: number): Promise<User> {
        return this.userRepository.findOne({
            where: { id },
            relations: {comments: true},
        });
    }
    async update(id: number, updUser: User){
        const user = await this.userRepository.findOne({
            where: {id}
        });
        user.name = updUser.name;
        user.email = updUser.email;
        user.password = updUser.password;
        user.phone = updUser.phone;
        await this.userRepository.save(user);
        return user;
    }
    remove(id: number){
       this.userRepository.delete({id});
    }
    async findIncomplete(): Promise<IncompleteUserDto[]>{
        const user = await this.userRepository.find();
        const incompleteUser: IncompleteUserDto[] = user.map((user)=>{
            const incompleteUser = new IncompleteUserDto();
            incompleteUser.id = user.id;
            incompleteUser.name = user.name;
            return incompleteUser;
        });
        return incompleteUser;
    }
    findByEmail(email:  string ): Promise<User> {
        return this.userRepository.findOne({
            where: { email },
            relations: {comments: true},
        });
    }
}