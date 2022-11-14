import {Router as router} from 'express';
import type {CreateSpecificationDto} from '../modules/cars/repositories/ISpecificationRepository';
import {SpecificationRepository} from '../modules/cars/repositories/SpecificationRepository';
import {CreateSpecificationService} from '../modules/cars/services/CreateSpecificationService';
export const specificationsRoutes = router();
const specificationsRepository = new SpecificationRepository();
const createSpecificationsService = new CreateSpecificationService(specificationsRepository);
specificationsRoutes.post('/', (request, response) => {
	const {description, name} = request.body as CreateSpecificationDto;
	try {
		createSpecificationsService.execute({description, name});
	} catch (error: unknown) {
		response.status(422).json({error});
	}

	response.status(201).send();
});
specificationsRoutes.get('/', (request, response) => {
	const repositories = specificationsRepository.list();
	return response.json(repositories);
});
specificationsRoutes.get('/:name', (request, response) => {
	const {name} = request.params;
	const specification = specificationsRepository.getSpecificationByName(name);
	if (!specification) {
		return response.status(404).json({error: 'Specification not found.'});
	}
});
