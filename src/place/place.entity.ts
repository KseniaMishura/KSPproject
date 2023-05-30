import { City } from "src/city/city.entity";
import { Comment } from "src/comment/comment.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('places')
export class Place{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    worktime: string;
    @Column()
    description: string;
    @ManyToOne((type) => City, (city)=>city.places)
    cities: City;
    @OneToMany((type)=>Comment, (comment)=>comment.places)
    comments: Comment[];
    
}