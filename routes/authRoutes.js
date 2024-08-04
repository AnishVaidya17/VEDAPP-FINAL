import express from 'express'
import { register, login, logout, updateUser } from '../controller/authController.js'
import { authenticateUser } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.get('/logout', logout);
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router