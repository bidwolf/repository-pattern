import {SpecificationRepository} from '../../repositories/SpecificationRepository';
import {CreateSpecificationController} from './createSpecificationController';
import {CreateSpecificationUseCase} from './createSpecificationUseCase';
const specificationRepository = SpecificationRepository.getInstance();
const specificationUseCase = new CreateSpecificationUseCase(specificationRepository);
export const createSpecificationController = new CreateSpecificationController(specificationUseCase);
