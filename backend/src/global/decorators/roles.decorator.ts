import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../constants/userRole.enum';

export const Roles = (...roles: UserRole[]) => {
  return SetMetadata('roles', roles);
};
