import {CategoriesRepository} from '../../repositories/CategoriesRepository';
import {ListCategoriesUseCase} from './listCategoriesUseCase';
import {ListCategoriesController} from './listCategoriesController';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
export const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);
