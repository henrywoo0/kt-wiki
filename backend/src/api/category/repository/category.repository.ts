import { EntityRepository, Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@EntityRepository(Category)
export default class CategoryRepository extends Repository<Category> {
  public findAllCategories(): Promise<Category[]> {
    return this.createQueryBuilder('category').getMany();
  }
}
