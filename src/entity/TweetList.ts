import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tweetList')
export class TweetList extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

}
