import type {Category} from '../../model/Category';
import type {CategoryRepository} from '../../repositories';

export type InterfaceListCategoriesUseCase = {
	execute: () => Category[];
};
export class ListCategoriesUseCase implements InterfaceListCategoriesUseCase {
	constructor(private readonly categoryRepository: CategoryRepository) {}
	execute(): Category[] {
		const categories = this.categoryRepository.list();
		return categories;
	}
}
