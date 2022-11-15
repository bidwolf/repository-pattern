import type {Category} from '../model/Category';
import type {Specification} from '../model/Specification';

export type WithId<T> = {id: string} & T;
export type BaseRepository<T> = {
	create(data: T): void;
	list (): T[];
};
export type SpecificationRepository = BaseRepository<Specification> & {getSpecificationByName(name: string): Specification | undefined};
export type CategoryRepository = BaseRepository<Category>;
