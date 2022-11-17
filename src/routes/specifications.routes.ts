import {Router as router} from 'express';
import {uploadMiddleware} from '../modules/cars/middlewares/upload';
import {createSpecificationController} from '../modules/cars/useCases/createSpecification';
import {importSpecificationController} from '../modules/cars/useCases/importSpecification';
import {listSpecificationsController} from '../modules/cars/useCases/listSpecifications';
export const specificationsRoutes = router();
specificationsRoutes.post('/', (request, response) => createSpecificationController.handle(request, response));
specificationsRoutes.get('/', (request, response) => listSpecificationsController.handle(request, response));
specificationsRoutes.post('/import', uploadMiddleware, async (request, response) => importSpecificationController.handle(request, response));
