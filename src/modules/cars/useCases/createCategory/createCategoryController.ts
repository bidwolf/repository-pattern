import type {Request, Response} from 'express';
import type {InterfaceCreateCategoryUseCase as ICreateCategoryUseCase} from './CreateCategoryUseCase';
type InterfaceRequest = {
	name: string;
	description: string;
};
export class CreateCategoryController {
	constructor(private readonly createCategoryUseCase: ICreateCategoryUseCase) {}
	handle(request: Request, response: Response): Response {
		const {description, name} = request.body as InterfaceRequest;
		try {
			this.createCategoryUseCase.execute({description, name});
		} catch (error: unknown) {
			console.error(error);
			response.status(422).json(error);
		}

		return response.status(201).send();
	}
}
