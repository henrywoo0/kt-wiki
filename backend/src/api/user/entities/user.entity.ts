import { UserRole } from 'src/global/enums/userRole.enum';
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
    name: 'role',
    type: 'enum',
    enum: UserRole,
    default: UserRole.user,
  })
  role!: UserRole;

  @Column({
    name: 'status',
    nullable: false,
    default: 0,
  })
  status!: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;
}
