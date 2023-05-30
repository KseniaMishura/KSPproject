import { ApiProperty } from "@nestjs/swagger";
import { Comment } from "src/comment/comment.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    phone: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    name: string;
    @OneToMany((type)=>Comment, (comment)=>comment.user)
    comments: Comment[];
} 