import { UserRole } from '../constants/userRole.enum';

export default (roles: UserRole[], userRole: UserRole): boolean => {
  for (const role of roles) {
    if (role === userRole) {
      return true;
    }
  }

  return false;
};
