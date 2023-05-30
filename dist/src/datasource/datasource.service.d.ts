import { City } from 'src/city/city.entity';
import { Comment } from 'src/comment/comment.entity';
import { Place } from 'src/place/place.entity';
import { User } from 'src/user/user.entity';
export declare class DatasourceService {
    private cities;
    private places;
    private comments;
    private users;
    getCities(): City[];
    getPlaces(): Place[];
    getComments(): Comment[];
    getUser(): User[];
}
