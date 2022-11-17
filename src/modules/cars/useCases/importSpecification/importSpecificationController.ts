import type {Request, Response} from 'express';
import type {InterfaceImportSpecificationUseCase} from './importSpecificationUseCase';

export class ImportSpecificationController {
	constructor(private readonly importSpecificationUseCase: InterfaceImportSpecificationUseCase) {}
	async handle(request: Request, response: Response): Promise<Response> {
		const {file} = request;
		if (!file) {
			return response.status(400).json({error: 'Error, File don\'t exists'});
		}

		try {
			await this.importSpecificationUseCase.execute(file);
			return response.send();
		} catch (error: unknown) {
			console.error(error);
			return response.status(422).send(error);
		}
	}
}
