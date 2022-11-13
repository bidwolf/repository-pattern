import type {Category} from '../model/Category';
import type {InterfaceCreateCategoriesRepository as ICreateCategoriesRepository} from '../repositories/ICategoriesRepository';

type Request = {
	name: string;
	description: string;
};
export class CreateCategoryService {
	constructor(private readonly categoriesRepository: InterfaceCreateCategoriesRepository) {}
	execute({name, description}: Request) {
		const categoryExists = this.categoriesRepository.getCategoryByName(name);
		if (categoryExists) {
			throw new Error('Cannot create, this category already exists ');
		}

		this.categoriesRepository.createCategory({description, name});
	}
}
