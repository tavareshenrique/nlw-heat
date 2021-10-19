import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPaylod {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET not defined');
    }

    const authToken = request.headers.authorization;

    if (!authToken) {
      return response
        .status(401)
        .json({ error: 'Missing auth token', errorCode: 'token.invalid' });
    }

    const [, token] = authToken.split(' ');

    const { sub } = verify(token, process.env.JWT_SECRET) as IPaylod;

    request.user_id = sub;

    return next();
  } catch (err) {
    if (err instanceof Error) {
      return response.status(401).json({ error: err.message });
    }

    return response
      .status(401)
      .json({ error: 'Token expired', errorCode: 'token.expired' });
  }
}
