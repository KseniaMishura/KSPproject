import { Place } from "src/place/place.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('cities')
export class City{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({})
    name: string;
    @Column()
    country: string;
    @OneToMany((type) => Place, (place)=>place.cities)
    places: Place[];
    
}