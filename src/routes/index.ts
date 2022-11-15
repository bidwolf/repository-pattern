import {Router as expressRouter} from 'express';
import {categoriesRoutes} from './categories.routes';
import {specificationsRoutes} from './specifications.routes';
const router = expressRouter();
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
export {router};
