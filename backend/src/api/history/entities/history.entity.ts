import { Document } from 'src/api/document/entities/document.entity';
import { User } from 'src/api/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('history')
export class History {
  @PrimaryGeneratedColumn({
    name: 'idx',
  })
  idx!: number;

  @Column({
    name: 'modified_text',
    type: 'mediumtext',
  })
  modifiedText!: string;

  @ManyToOne(() => User, (user) => user.id)
  fk_user_id!: string;

  @ManyToOne(() => Document, (document) => document.idx)
  fk_document_idx!: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;
}
