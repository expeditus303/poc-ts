import { NextFunction, Request, Response } from "express";
import joi from "joi";
import errors from "../errors/errors"

function schemaMiddleware(schema: joi.ObjectSchema, field: string = "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const reqValues = req[field as keyof Request];

    const { error } = schema.validate(reqValues, { abortEarly: false});

    if (error) {
        const errorMessages = error.details.map(detail => detail.message)
        throw errors.unprocessableEntity(errorMessages)
    }

    next()
  };
}

export default schemaMiddleware;
