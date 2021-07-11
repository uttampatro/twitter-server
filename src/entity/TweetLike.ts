import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    Index,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tweetLike')
export class TweetLike extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
}
