import type {Specification} from '../model/Specification';
export type CreateSpecificationDto = {
	name: string;
	description: string;
};
export type InterfaceCreateSpecificationRepository = {
	getSpecificationByName: (name: string) => Specification | undefined;
	createSpecification: ({description, name}: CreateSpecificationDto) => void;
};
