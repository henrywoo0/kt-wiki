import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('document')
export class Document {
  @PrimaryGeneratedColumn({
    name: 'idx',
  })
  idx!: number;

  @Column({
    name: 'title',
  })
  title!: string;

  @Column({
    name: 'text',
    type: 'mediumtext',
  })
  text!: string;

  @Column({
    name: 'hits',
    default: 0,
  })
  hits!: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;
}
