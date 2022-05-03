import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public findByIdAndPw(id: string, pw: string): Promise<User | undefined> {
    return this.createQueryBuilder()
      .where('id = :id', { id })
      .andWhere('password = :pw', { pw })
      .getOne();
  }
}
