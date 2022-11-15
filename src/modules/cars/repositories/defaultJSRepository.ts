import {BaseModel} from '../model/baseModel';
import {Repository} from './repository';

export abstract class DefaultJsRepository <T> extends Repository<T> {
	protected readonly dataBase: T[];
	constructor(database: T[]) {
		super();
		this.dataBase = database;
	}

	public create(data: T): void {
		const {model} = new BaseModel<T>(data);
		this.dataBase.push(model);
	}
}
