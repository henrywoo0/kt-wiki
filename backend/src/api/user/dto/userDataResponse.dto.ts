import { UserRole } from 'src/global/constants/userRole.enum';

export class UserDataResponseDto {
  id!: string;
  role!: UserRole;
  status!: number;

  constructor(id: string, role: UserRole, status: number) {
    this.id = id;
    this.role = role;
    this.status = status;
  }
}
