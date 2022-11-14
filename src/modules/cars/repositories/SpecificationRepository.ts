import {Specification} from '../model/Specification';
import type {CreateSpecificationDto, InterfaceCreateSpecificationRepository as ICreateSpecification} from './ISpecificationRepository';
export class SpecificationRepository implements ICreateSpecification {
	private readonly specifications: Specification[];
	constructor() {
		this.specifications = [];
	}

	getSpecificationByName(name: string): Specification | undefined {
		const actualSpecification = this.specifications.find(specification => specification.name === name);
		return actualSpecification;
	}

	list(): Specification[] {
		return this.specifications;
	}

	createSpecification({description, name}: CreateSpecificationDto): void {
		const specification = new Specification({description, name, createdAt: new Date()});
		this.specifications.push(specification);
	}
}
