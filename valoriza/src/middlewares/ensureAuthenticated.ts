import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
     
    const authToken = request.headers.authorization.split(" ")[1];

    if(!authToken){
        return response.status(401).end();
    }

    try {
        const { sub } = verify(authToken, "a4a3703aaa21fce74633ebe1416044a1") as IPayload;
        request.user_id = sub;
        return next();

    } catch (error) {
        response.status(401).end();
    }

}