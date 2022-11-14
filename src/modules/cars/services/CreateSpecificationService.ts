import type {InterfaceCreateSpecificationRepository} from '../repositories/ISpecificationRepository';
import type {CreateSpecificationDto} from '../repositories/ISpecificationRepository';
export class CreateSpecificationService {
	constructor(private readonly specificationRepository: InterfaceCreateSpecificationRepository) {}
	execute({description, name}: CreateSpecificationDto) {
		const specificationExists = this.specificationRepository.getSpecificationByName(name);
		if (specificationExists) {
			throw new Error('Cannot create, this specification already exists ');
		}

		this.specificationRepository.createSpecification({description, name});
	}
}
