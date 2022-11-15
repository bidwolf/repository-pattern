import type {CategoryRepository as InterfaceCreateCategoriesRepository} from '../../repositories';
type InterfaceRequest = {
	name: string;
	description: string;
};
export type InterfaceCreateCategoryUseCase = {
	execute: (request: InterfaceRequest) => void;
};
export class CreateCategoryUseCase implements InterfaceCreateCategoryUseCase {
	constructor(private readonly categoriesRepository: InterfaceCreateCategoriesRepository) {}
	execute({name, description}: InterfaceRequest) {
		const categoryExists = this.categoriesRepository.getCategoryByName(name);
		if (categoryExists) {
			throw new Error('Cannot create, this category already exists ');
		}

		this.categoriesRepository.create({description, name, createdAt: new Date()});
	}
}
