import { NextFunction, Request, Response } from "express"

function schemaMiddleware(){
    return (req: Request, res: Response, next: NextFunction) => {
        console.log("teste")
    }
}

export default schemaMiddleware