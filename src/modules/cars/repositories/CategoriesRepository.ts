import type {Category} from '../model/Category';
import {DefaultJsRepository} from './defaultJSRepository';
import type {CategoryRepository as InterfaceCategoryRepository} from '.';
export class CategoriesRepository extends DefaultJsRepository<Category> implements InterfaceCategoryRepository {
	public static getInstance(): CategoriesRepository {
		if (!CategoriesRepository.instance) {
			CategoriesRepository.instance = new CategoriesRepository();
		}

		return CategoriesRepository.instance;
	}

	private static instance: CategoriesRepository;
	private constructor() {
		super([]);
	}

	getCategoryByName(name: string): Category | undefined {
		const category = this.dataBase.find(category => category.name === name);
		return category;
	}
}
