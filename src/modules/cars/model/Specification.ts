export type SpecificationType = {
	name: string;
	description: string;
	createdAt: Date;
};
export class Specification implements SpecificationType {
	name: string;
	description: string;
	createdAt: Date;
	constructor(specification: SpecificationType) {
		this.name = specification.name.toLowerCase();
		this.description = specification.description;
		this.createdAt = specification.createdAt;
	}
}
