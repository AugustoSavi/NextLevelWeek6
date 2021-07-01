import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../repositories/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

    const listUserReceiveCompliments = await listUserReceiveComplimentsService.execute( user_id );

    return response.json(listUserReceiveCompliments);
  }
}

export { ListUserReceiveComplimentsController };