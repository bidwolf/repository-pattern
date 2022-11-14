import type {Category} from '../model/Category';
export type CreateCategoryDto = {
	name: string;
	description: string;
};
export type InterfaceCreateCategoriesRepository = {
	getCategoryByName: (name: string) => Category | undefined;
	createCategory: ({description, name}: CreateCategoryDto) => void;
};
