import {Router as router} from 'express';
import {v4 as uuid} from 'uuid';
import type {CategoryType} from '../model/Category';
import {Category} from '../model/Category';
const categoriesRoutes = router();
const categories: CategoryType [] = [];

categoriesRoutes.post('/', (request, response) => {
	const {description, name} = request.body as CategoryType;
	const createdAt = new Date();
	const category = new Category({createdAt, description, name});

	categories.push(category);
	response.status(201).json(category);
});
export {categoriesRoutes};
