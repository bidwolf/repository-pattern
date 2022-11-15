import type {Request, Response} from 'express';
import type {InterfaceCreateSpecificationUseCase, InterfaceRequest} from './createSpecificationUseCase';
type InterfaceCreateSpecificationController = {
	handle: (request: Request, response: Response) => Response;
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
