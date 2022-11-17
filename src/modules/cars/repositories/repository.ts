import type {BaseRepository} from '.';
export abstract class Repository<T> implements BaseRepository<T> {
	public abstract create(data: T): void;
	public abstract list(): T[];
}
type A = {
	name: string;
};
const a = {name: 'asklhadslk'};
const b = {a};
function askhdkadjs(a: a) {
	console.log(a.name);
}
