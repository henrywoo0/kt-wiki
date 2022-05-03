import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryColumn({ name: 'id' })
  id!: string;

  @Column({
    name: 'password',
    length: 255,
  })
  password!: string;

  @Column({
    name: 'name',
  })
  name!: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;
}
