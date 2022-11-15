import type {SpecificationRepository as InterfaceSpecificationRepository} from '.';
import type {Specification} from '../model/Specification';
import {DefaultJsRepository} from './defaultJSRepository';
export class SpecificationRepository extends DefaultJsRepository<Specification> implements InterfaceSpecificationRepository {
	public static getInstance(): SpecificationRepository {
		if (!SpecificationRepository.instance) {
			SpecificationRepository.instance = new SpecificationRepository();
		}

		return SpecificationRepository.instance;
	}

	private static instance: SpecificationRepository;
	private constructor() {
		super([]);
	}

	getSpecificationByName(name: string): Specification | undefined {
		const specification = this.dataBase.find(specification => specification.name === name);
		return specification;
	}

	list() {
		return this.dataBase;
	}
}
