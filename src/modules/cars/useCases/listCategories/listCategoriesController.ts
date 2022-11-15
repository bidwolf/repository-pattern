import type {Request, Response} from 'express';
import type {InterfaceListCategoriesUseCase} from './listCategoriesUseCase';
export class ListCategoriesController {
	constructor(private readonly listCategoriesUseCase: InterfaceListCategoriesUseCase) {}
	handle(request: Request, response: Response): Response {
		const categories = this.listCategoriesUseCase.execute();
		return response.json(categories);
	}
}
