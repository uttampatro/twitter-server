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
import { TweetReply } from './TweetReply';
import { User } from './User';

@Entity('tweet')
export class Tweet extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    text: string;

    @Column({ nullable: true })
    imageURL: string;

    @OneToMany(() => TweetReply, tweetReply => tweetReply.parentTweet)
    tweetReply: TweetReply[];

    @ManyToOne(() => User, user => user.tweet)
    user: User;

    @CreateDateColumn()
    @Index()
    createdAt: Date;
}
