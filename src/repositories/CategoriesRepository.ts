import type {CreateCategoryDto, InterfaceCreateCategoriesRepository as ICreateCategoriesRepository} from './ICategoriesRepository';
import {Category} from '../model/Category';

export class CategoriesRepository implements ICreateCategoriesRepository {
	private readonly categories: Category[];
	constructor() {
		this.categories = [];
	}

	getCategoryByName(name: string): Category | undefined {
		const category = this.categories.find(category => category.name === name.toLocaleLowerCase());
		return category;
	}

	list(): Category[] {
		return this.categories;
	}

	createCategory({description, name}: CreateCategoryDto): void {
		const category = new Category({name, createdAt: new Date(), description});
		this.categories.push(category);
	}

	deleteCategory(id: string): Category | undefined {
		const deletedIndex = this.categories.findIndex(category => id === category.id);
		if (deletedIndex >= 0) {
			const deletedCategory = this.categories[deletedIndex];
			this.categories.splice(deletedIndex, 1);
			return deletedCategory;
		}
	}
}
