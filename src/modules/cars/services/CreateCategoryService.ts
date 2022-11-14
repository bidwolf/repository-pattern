import type {
	InterfaceCreateCategoriesRepository as ICreateCategoriesRepository,
	 CreateCategoryDto} from '../repositories/ICategoriesRepository';
export class CreateCategoryService {
	constructor(private readonly categoriesRepository: ICreateCategoriesRepository) {}
	execute({name, description}: CreateCategoryDto) {
		const categoryExists = this.categoriesRepository.getCategoryByName(name);
		if (categoryExists) {
			throw new Error('Cannot create, this category already exists ');
		}

		this.categoriesRepository.createCategory({description, name});
	}
}
