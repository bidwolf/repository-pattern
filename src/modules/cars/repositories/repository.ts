import type {BaseRepository} from '.';
export abstract class Repository<T> implements BaseRepository<T> {
	public abstract create(data: T): void;
	public abstract list(): T[];
}
