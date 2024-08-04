import { StatusCodes } from "http-status-codes"
import CustomAPIError from "./customError.js"

export class UnauthorizedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.name = 'UnauthorizedError';
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}