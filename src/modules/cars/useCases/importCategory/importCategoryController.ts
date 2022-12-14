import type {Request, Response} from 'express';
import type {InterfaceImportCategoryUseCase} from './importCategoryUseCase';

export class ImportCategoryController {
	constructor(private readonly importCategoryUseCase: InterfaceImportCategoryUseCase) {}
	async handle(request: Request, response: Response): Promise<Response> {
		const {file} = request;
		if (!file) {
			return response.status(400).json({error: 'Error, File don\'t exists'});
		}

		try {
			await this.importCategoryUseCase.execute(file);
			return response.send();
		} catch (error: unknown) {
			console.error(error);
			return response.status(422).send(error);
		}
	}
}
