import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { TweetList } from './TweetList';
import { User } from './User';

@Entity('tweet')
export class Tweet extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    content: string;

    @Column({ nullable: true })
    imageURL: string;

    @ManyToOne(() => User)
    user: User;

    @OneToMany(() => TweetList, tweetList => tweetList.tweet)
    tweetList: TweetList[];
}
