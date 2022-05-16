import { Category } from 'src/api/category/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @ManyToOne(() => Category, (category) => category.idx)
  @JoinColumn({ name: 'fk_category_idx' })
  category!: Category;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt!: Date;
}
