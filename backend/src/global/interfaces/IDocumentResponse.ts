import { Category } from 'src/api/category/entities/category.entity';

export interface IDocumentResponse {
  idx: number;
  title: string;
  text: string;
  hits: number;
  createdAt: Date;
  updatedAt: Date;
  category: Category;
}
