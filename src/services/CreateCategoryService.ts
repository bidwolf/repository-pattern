import type {Category} from '../model/Category';

type CategoriesRepository = {
	getCategoryByName: (name: string) => Category | undefined;
	createCategory: ({description, name}: Request) => void;
};
type Request = {
	name: string;
	description: string;
};
export class CreateCategoryService {
	constructor(private readonly categoriesRepository: CategoriesRepository) {}
	execute({name, description}: Request) {
		const categoryExists = this.categoriesRepository.getCategoryByName(name);
		if (categoryExists) {
			throw new Error('Cannot create, this category already exists ');
		}

		this.categoriesRepository.createCategory({description, name});
	}
}
