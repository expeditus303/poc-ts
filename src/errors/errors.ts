function errorFactory(name: string, message: string | string[]) {
    return {name, message}
}

function unprocessableEntity(message: string | string[] = "Unprocessable Entity") {

    return errorFactory("UnprocessableEntityError", message);
}
  
  

function conflict(message: string = "Conflict") {
    return errorFactory("ConflictError", message)
}

function notFound(message: string = "Not Found"){
    return errorFactory("NotFoundError", message)
}

const error = {
    unprocessableEntity,
    conflict,
    notFound
}

export default error