import type {Request, Response} from 'express';
import type {InterfaceListSpecificationsUseCase} from './listSpecificationUseCase';
export class ListSpecificationsController {
	constructor(private readonly listSpecificationUseCase: InterfaceListSpecificationsUseCase) {}
	handle(request: Request, response: Response): Response {
		const specifications = this.listSpecificationUseCase.execute();
		return response.json(specifications);
	}
}
