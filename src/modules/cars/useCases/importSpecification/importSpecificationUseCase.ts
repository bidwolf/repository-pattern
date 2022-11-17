import fs from 'fs';
import csvParse from 'csv-parse';
import type {SpecificationRepository as InterfaceSpecificationRepository} from '../../repositories';
export type InterfaceImportSpecificationUseCase = {
	execute: (file: Express.Multer.File) => Promise<void>;
	loadSpecifications: (file: Express.Multer.File) => Promise<LoadedSpecifications[]>;
};
type LoadedSpecifications = {
	name: string;
	description: string;
};
export class ImportSpecificationUseCase implements InterfaceImportSpecificationUseCase {
	constructor(private readonly specificationRepository: InterfaceSpecificationRepository) {}
	async loadSpecifications(file: Express.Multer.File): Promise<LoadedSpecifications[]> {
		return new Promise((resolve, reject) => {
			const stream = fs.createReadStream(file.path);
			const parseFile = csvParse.parse();
			const loadedSpecifications: LoadedSpecifications[] = [];
			stream.pipe(parseFile);
			parseFile.on('data', async (line: string[]) => {
				const [name, description] = line;
				loadedSpecifications.push({name, description});
			}).on('end', () => {
				void fs.promises.unlink(file.path);
				resolve(loadedSpecifications);
			}).on('error', error => {
				reject(error);
			});
		});
	}

	async execute(file: Express.Multer.File): Promise<void> {
		const loadedSpecifications = await this.loadSpecifications(file);
		loadedSpecifications.forEach(({name, description}) => {
			const specificationExists = this.specificationRepository.getSpecificationByName(name);
			if (!specificationExists) {
				this.specificationRepository.create({name, description, createdAt: new Date()});
			}
		});
	}
}
