import { Place } from "src/place/place.entity";
import { User } from "src/user/user.entity";
export declare class Comment {
    id: number;
    text: string;
    user: User;
    places: Place;
}
