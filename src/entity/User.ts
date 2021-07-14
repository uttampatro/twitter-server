import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';
import { Tweet } from './Tweet';
import { TweetReply } from './TweetReply';

@Entity('user')
@Unique(['email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    password: string;

    @OneToMany(() => Tweet, tweet => tweet.user)
    tweet: Tweet[];
}
