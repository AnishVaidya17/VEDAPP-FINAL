import { UnAuthenticatedError } from "../errors/index.js"
import { verifyJWT } from '../utils/tokenUtils.js';


export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        throw new UnAuthenticatedError('authentication invalid');
    }

    try {
        const { userId } = verifyJWT(token);
        req.user = { userId };
        next();
    } catch (error) {
        throw new UnAuthenticatedError('authentication invalid');
    }

}