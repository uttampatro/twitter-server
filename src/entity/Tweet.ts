import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    Index,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity('tweet')
export class Tweet extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    content: string;

    @Column({ nullable: true })
    imageURL: string;

    @ManyToOne(() => User, user => user.tweet)
    user: User;

    @CreateDateColumn()
    @Index()
    createdAt: Date;
}
