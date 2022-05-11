import { User } from 'src/api/user/entities/user.entity';

export class TokenRequest extends Request {
  public user: User;
}
