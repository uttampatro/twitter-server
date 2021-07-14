import { User } from './User';
import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
} from 'typeorm';
import { Tweet } from './Tweet';

@Entity('tweetReply')
export class TweetReply extends BaseEntity {
    @PrimaryColumn('uuid')
    tweetId: number;

    @PrimaryColumn('uuid')
    parentTweetId: number;

    @OneToOne(() => Tweet, tweet => tweet.id)
    @JoinColumn()
    tweet: Tweet;

    @ManyToOne(() => Tweet, tweet => tweet.tweetReply)
    parentTweet: Tweet;

    @CreateDateColumn()
    @Index()
    createdAt: Date;
}
