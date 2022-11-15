import {SpecificationRepository} from '../../repositories/SpecificationRepository';
import {ListSpecificationsUseCase} from './listSpecificationUseCase';
import {ListSpecificationsController} from './listSpecificationsController';

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationRepository);
export const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);
