import {Router as router} from 'express';
import {v4 as uuidV4} from 'uuid';
const categoriesRoutes = router();
const categories: Category[] = [];
type Category = {
	name: string;
	description: string;
	id?: string;
	created_at: Date;
};
categoriesRoutes.post('/categories', (request, response) => {
	const category = request.body as Category;
	const id: string = uuidV4();
	const createdAt = new Date();
	category.id = id;
	category.created_at = createdAt;
	categories.push(category);
	response.status(201).json(category);
});
export {categoriesRoutes};
