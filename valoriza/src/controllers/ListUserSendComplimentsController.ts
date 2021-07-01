import { Request, Response } from "express";
import { ListUserSendSendComplimentsService } from "../repositories/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplimentsService = new ListUserSendSendComplimentsService();

    const listUserSendCompliments = await listUserSendComplimentsService.execute( user_id );

    return response.json(listUserSendCompliments);
  }
}

export { ListUserSendComplimentsController };