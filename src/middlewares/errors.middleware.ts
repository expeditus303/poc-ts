import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const errorsStatusCode:{ [key: string]: number } = {
    UnprocessableEntityError: StatusCodes.UNPROCESSABLE_ENTITY,
    ConflictError: StatusCodes.CONFLICT,
    NotFoundError: StatusCodes.NOT_FOUND,
}

function errorsMiddleware(err: Error, req: Request, res: Response, next: NextFunction){


    const errorMessage = err.message || "Internal Server Error"
    const errorStatusCode = errorsStatusCode[err.name] || StatusCodes.INTERNAL_SERVER_ERROR


    res.status(errorStatusCode).send(errorMessage)
}

export default errorsMiddleware