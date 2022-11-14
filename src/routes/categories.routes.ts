import {Router as router} from 'express';
import type {CreateCategoryDto} from '../modules/cars/repositories/ICategoriesRepository';
import {CategoriesRepository} from '../modules/cars/repositories/CategoriesRepository';
import {CreateCategoryService} from '../modules/cars/services/CreateCategoryService';
const categoriesRoutes = router();
const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
categoriesRoutes.post('/', (request, response) => {
	const {description, name} = request.body as CreateCategoryDto;
	try {
		createCategoryService.execute({description, name});
	} catch (error: unknown) {
		console.error(error);
		response.status(422).json(error);
	}

	return response.status(201).send();
});
categoriesRoutes.get('/', (request, response) => {
	const categories = categoriesRepository.list();
	return response.json(categories);
});
categoriesRoutes.get('/:name', (request, response) => {
	const {name} = request.params;
	const category = categoriesRepository.getCategoryByName(name);
	if (!category) {
		return response.status(404).json({error: 'Category not found.'});
	}

	return response.json(category);
});
export {categoriesRoutes};
