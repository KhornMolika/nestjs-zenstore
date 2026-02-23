import passport from "passport";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column({select: false}) // Prevents password from being returned in GET queries
    password: string;

    @Column({default: 'customer'})
    role: string;
}