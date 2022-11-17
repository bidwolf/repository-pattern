import fs from 'fs';
import csvParse from 'csv-parse';
import type {CategoryRepository as InterfaceCategoryRepository} from '../../repositories';
export type InterfaceImportCategoryUseCase = {
	execute: (file: Express.Multer.File) => Promise<void>;
	loadCategories: (file: Express.Multer.File) => Promise<LoadedCategory[]>;
};
type LoadedCategory = {
	name: string;
	description: string;
};
export class ImportCategoryUseCase implements InterfaceImportCategoryUseCase {
	constructor(private readonly categoryRepository: InterfaceCategoryRepository) {}
	async loadCategories(file: Express.Multer.File): Promise<LoadedCategory[]> {
		return new Promise((resolve, reject) => {
			const stream = fs.createReadStream(file.path);
			const parseFile = csvParse.parse();
			const loadedCategories: LoadedCategory[] = [];
			stream.pipe(parseFile);
			parseFile.on('data', async (line: string[]) => {
				const [name, description] = line;
				loadedCategories.push({name, description});
			}).on('end', () => {
				resolve(loadedCategories);
			}).on('error', error => {
				reject(error);
			});
		});
	}

	async execute(file: Express.Multer.File): Promise<void> {
		const loadedCategories = await this.loadCategories(file);
		loadedCategories.forEach(({name, description}) => {
			const categoryExists = this.categoryRepository.getCategoryByName(name);
			if (!categoryExists) {
				this.categoryRepository.create({name, description, createdAt: new Date()});
			}
		});
	}
}
