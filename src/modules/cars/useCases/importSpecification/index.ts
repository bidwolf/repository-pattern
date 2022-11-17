import {ImportSpecificationController} from './importSpecificationController';
import {ImportSpecificationUseCase} from './importSpecificationUseCase';
import {SpecificationRepository} from '../../repositories/SpecificationRepository';
const specificationRepository = SpecificationRepository.getInstance();
const importSpecificationUseCase = new ImportSpecificationUseCase(specificationRepository);
const importSpecificationController = new ImportSpecificationController(importSpecificationUseCase);
export {importSpecificationController};
