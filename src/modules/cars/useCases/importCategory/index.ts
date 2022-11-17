import {ImportCategoryController} from './importCategoryController';
import {ImportCategoryUseCase} from './importCategoryUseCase';
import {CategoriesRepository} from '../../repositories/CategoriesRepository';
const categoryRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);
export {importCategoryController};
