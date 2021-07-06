import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tweet } from './Tweet';
import { User } from './User';

@Entity('tweetList')
export class TweetList extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(() => Tweet, tweet => tweet.tweetList)
    tweet: Tweet;
}
