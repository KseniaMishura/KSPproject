import { Comment } from "src/comment/comment.entity";
export declare class User {
    id: number;
    phone: string;
    email: string;
    password: string;
    name: string;
    comments: Comment[];
}
