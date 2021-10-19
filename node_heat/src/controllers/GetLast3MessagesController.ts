import { Request, Response } from 'express';

import { GetLast3MessagesServices } from '../services/GetLast3MessagesServices';

class Get3LastMessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLast3MessagesServices();

    try {
      const result = await service.execute();

      return response.json(result);
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({ error: err.message });
      }
    }
  }
}

export { Get3LastMessagesController };
