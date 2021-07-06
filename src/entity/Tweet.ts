import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tweet')
export class Tweet extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    content: string;

    @Column()
    imageURL: string;
}
