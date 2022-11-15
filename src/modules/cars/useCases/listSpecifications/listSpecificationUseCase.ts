import type {Specification} from '../../model/Specification';
import type {SpecificationRepository} from '../../repositories';

export type InterfaceListSpecificationsUseCase = {
	execute: () => Specification[];
};
export class ListSpecificationsUseCase implements InterfaceListSpecificationsUseCase {
	constructor(private readonly specificationRepository: SpecificationRepository) {}
	execute(): Specification[] {
		const specifications = this.specificationRepository.list();
		return specifications;
	}
}
