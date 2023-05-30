import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Comment } from "./comment.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { User } from "src/user/user.entity";
import { Place } from "src/place/place.entity";

@Injectable()
export class CommentService{
    constructor (
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,){}
    async create(comment: Comment): Promise<Comment>{
        const com = this.commentRepository.create();
        com.text = comment.text;
        com.user = comment.user;
        com.places = comment.places;
        await this.commentRepository.save(comment);
        return com;
    }
    findOne(id: number): Promise<Comment> {
        return this.commentRepository.findOne({
            where: {id},
            relations: {user: true, places: true},
        })
    }
    async findAll(): Promise<Comment[]>{
        const com = await this.commentRepository.find({
            relations:{
                user:true,

            },
        });
        return com;
    }
    async update(id: number, updateComment: Comment){
       const com = await this.commentRepository.findOne({
        where:{id}
       });
       com.text = updateComment.text;
       await this.commentRepository.save(com);
       return com;
    }
    remove(id: number){
        this.commentRepository.delete({id})
    }
}