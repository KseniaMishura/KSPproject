import { Comment } from "./comment.entity";
import { Repository } from "typeorm";
import { User } from "src/user/user.entity";
import { Place } from "src/place/place.entity";
export declare class CommentService {
    private readonly commentRepository;
    private readonly userRepository;
    private readonly placeRepository;
    constructor(commentRepository: Repository<Comment>, userRepository: Repository<User>, placeRepository: Repository<Place>);
    create(comment: Comment): Promise<Comment>;
    findOne(id: number): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    update(id: number, updateComment: Comment): Promise<Comment>;
    remove(id: number): void;
}
