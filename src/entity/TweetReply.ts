import { User } from './User';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    Index,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Tweet } from './Tweet';

@Entity('tweetReply')
export class TweetReply extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(() => Tweet, tweet => tweet.id)
    parentTweetId: number;

    @Column()
    replyContent: string;

    @Column({ nullable: true })
    replyImageURL: string;

    @ManyToOne(() => User, user => user.tweet)
    user: User;

    @CreateDateColumn()
    @Index()
    createdAt: Date;
}
