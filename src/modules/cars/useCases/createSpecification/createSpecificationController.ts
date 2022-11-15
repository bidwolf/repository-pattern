import type {Request, Response} from 'express';
import type {InterfaceCreateSpecificationUseCase} from './createSpecificationUseCase';
type InterfaceCreateSpecificationController = {
	handle: (request: Request, response: Response) => Response;
};
type InterfaceRequest = {
	name: string;
	description: string;
};
export class CreateSpecificationController implements InterfaceCreateSpecificationController {
	constructor(private readonly createSpecificationUseCase: InterfaceCreateSpecificationUseCase) {
	}

	handle(request: Request, response: Response) {
		const {description, name} = request.body as InterfaceRequest;
		try {
			this.createSpecificationUseCase.execute({description, name});
		} catch (error: unknown) {
			console.error(error);
			response.status(422).json(error);
		}

		return response.status(201).send();
	}
}
