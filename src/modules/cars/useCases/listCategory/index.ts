import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoryUseCase } from './ListCategoriesUseCase';
import { ListCategoryController } from './ListCategoryController';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase,
);

export { listCategoriesController };
