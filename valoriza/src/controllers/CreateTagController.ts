
import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateTagsService";

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTagService = new CreateUserService();

    const tag = await createTagService.execute({ name });

    return response.json(tag);
  }
}

export { CreateTagController };