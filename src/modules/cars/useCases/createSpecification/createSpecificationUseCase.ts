import type {SpecificationRepository} from '../../repositories/';
export type InterfaceRequest = {
	name: string;
	description: string;
};
export type InterfaceCreateSpecificationUseCase = {
	execute: (request: InterfaceRequest) => void;
};
export class CreateSpecificationUseCase implements InterfaceCreateSpecificationUseCase {
	constructor(readonly specificationRepository: SpecificationRepository) {
	}

	execute({name, description}: InterfaceRequest) {
		const specificationExists = this.specificationRepository.getSpecificationByName(name);
		if (specificationExists) {
			throw new Error('Cannot create, this Specification already exists ');
		}

		this.specificationRepository.create({description, name, createdAt: new Date()});
	}
}
