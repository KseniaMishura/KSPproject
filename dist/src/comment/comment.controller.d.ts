import { Comment } from "./comment.entity";
import { CommentService } from "./comment.service";
export declare class CommentController {
    private readonly comServ;
    constructor(comServ: CommentService);
    findAll(): Promise<Comment[]>;
    findOne(id: string): Promise<Comment>;
    update(id: string, updateCom: Comment): Promise<Comment>;
    create(createCom: Comment): Promise<Comment>;
    remove(id: string): void;
}
