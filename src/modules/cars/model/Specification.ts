import {v4 as uuid} from 'uuid';
export type SpecificationType = {
	name: string;
	description: string;
	id?: string;
	createdAt: Date;
};
export class Specification implements SpecificationType {
	id?: string | undefined;
	name: string;
	description: string;
	createdAt: Date;
	constructor(specification: SpecificationType) {
		this.id = specification.id;
		this.name = specification.name.toLowerCase();
		this.description = specification.description;
		this.createdAt = specification.createdAt;

		if (!this.id) {
			this.id = uuid();
		}
	}
}
