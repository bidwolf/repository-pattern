export type CategoryType = {
	name: string;
	description: string;
	createdAt: Date;
};
export class Category implements CategoryType {
	name: string;
	description: string;
	createdAt: Date;
	constructor(category: CategoryType) {
		this.name = category.name.toLowerCase();
		this.description = category.description;
		this.createdAt = category.createdAt;
	}
}
