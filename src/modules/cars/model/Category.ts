import {v4 as uuid} from 'uuid';
export type CategoryType = {
	name: string;
	description: string;
	id?: string;
	createdAt: Date;
};
export class Category implements CategoryType {
	id?: string | undefined;
	name: string;
	description: string;
	createdAt: Date;
	constructor(category: CategoryType) {
		this.id = category.id;
		this.name = category.name.toLowerCase();
		this.description = category.description;
		this.createdAt = category.createdAt;

		if (!this.id) {
			this.id = uuid();
		}
	}
}
