import { Place } from "src/place/place.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comments')
export class Comment{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    text: string;
    @ManyToOne((type)=>User, (user)=>user.comments)
    user: User;
    @ManyToOne((type)=>Place, (place)=>place.comments)
    places: Place;
}   