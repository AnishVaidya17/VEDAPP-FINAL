import { StatusCodes } from "http-status-codes"
import CustomAPIError from "./customError.js"

class NoMoreUsersAllowed extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.NOT_ACCEPTABLE
    }
}

export default NoMoreUsersAllowed