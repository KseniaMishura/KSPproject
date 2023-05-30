import { City } from "src/city/city.entity";
import { Comment } from "src/comment/comment.entity";
export declare class Place {
    id: number;
    name: string;
    worktime: string;
    description: string;
    cities: City;
    comments: Comment[];
}
