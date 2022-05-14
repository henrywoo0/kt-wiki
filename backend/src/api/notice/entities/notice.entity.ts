import { User } from 'src/api/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('notice')
export class Notice {
  @PrimaryGeneratedColumn({
    name: 'idx',
  })
  idx!: number;

  @Column({
    name: 'title',
  })
  title: string;

  @Column({
    name: 'text',
  })
  text!: string;

  @ManyToOne(() => User, (user) => user.id)
  fk_user_id!: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;
}
