import {Router as router} from 'express';
import {createCategoryController} from '../modules/cars/useCases/createCategory';
import {listCategoriesController} from '../modules/cars/useCases/listCategories';
import {importCategoryController} from '../modules/cars/useCases/importCategory';
import {uploadMiddleware} from '../modules/cars/middlewares/upload';
const categoriesRoutes = router();

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));
categoriesRoutes.get('/', (request, response) => listCategoriesController.handle(request, response));
categoriesRoutes.post('/import', uploadMiddleware, async (request, response) => importCategoryController.handle(request, response));
export {categoriesRoutes};
