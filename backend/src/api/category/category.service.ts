import { Injectable, NotFoundException } from '@nestjs/common';
import { validationData } from 'src/global/utils/validationData.util';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { Category } from './entities/category.entity';
import CategoryRepository from './repository/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryRepository.save(createCategoryDto);
  }

  public async findAllCategories(): Promise<Category[]> {
    return this.categoryRepository.findAllCategories();
  }

  public async findCategoryByIdx(idx: number): Promise<Category> {
    const category: Category | undefined =
      await this.categoryRepository.findOne(idx);
    if (validationData(category)) {
      throw new NotFoundException('해당 idx의 category를 찾을 수 없습니다.');
    }
    return category;
  }
}
