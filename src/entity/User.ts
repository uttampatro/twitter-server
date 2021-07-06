import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';

@Entity('user')
@Unique(['email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    username: string

    @Column()
    email: string;

    @Column({ nullable: true })
    password: string;
}
