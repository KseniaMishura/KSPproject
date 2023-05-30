import { Injectable } from '@nestjs/common';
import { City } from 'src/city/city.entity';
import { Comment } from 'src/comment/comment.entity';
import { Place } from 'src/place/place.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class DatasourceService {
    private cities: City[] = [];
    private places: Place[] = [];
    private comments: Comment[] = [];
    private users: User[] = [];
    getCities(): City[]{
        return this.cities;
    }
    getPlaces(): Place[]{
        return this.places;
    }
    getComments(): Comment[]{
        return this.comments;
    }
    getUser(): User[]{
        return this.users;
    }
}