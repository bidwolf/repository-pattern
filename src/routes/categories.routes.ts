import {Router as router} from 'express';
import {createCategoryController} from '../modules/cars/useCases/createCategory';

const categoriesRoutes = router();
categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

export {categoriesRoutes};
