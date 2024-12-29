import express from 'express'
import { register, login, logout, updateUser } from '../controller/authController.js'
import { authenticateUser } from '../middleware/authMiddleware.js'

import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { msg: 'IP rate limit exceeded, retry in 15 minutes' }
});

const router = express.Router()

router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.get('/logout', logout);
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router