import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import BaseResponse from 'src/global/responses/base.response';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories(): Promise<BaseResponse<Category[]>> {
    const categories: Category[] =
      await this.categoryService.findAllCategories();
    return new BaseResponse<Category[]>(
      HttpStatus.OK,
      '모든 카테고리 조회 성공',
      categories,
    );
  }

  @Get('/:idx')
  async getCategoryByIdx(
    @Param('idx') idx: number,
  ): Promise<BaseResponse<Category>> {
    const category: Category = await this.categoryService.findCategoryByIdx(
      idx,
    );
    return new BaseResponse<Category>(
      HttpStatus.OK,
      '카테고리 조회 성공',
      category,
    );
  }
}
