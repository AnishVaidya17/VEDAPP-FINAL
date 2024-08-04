import { Router } from 'express';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js'
const router = Router();

import {
  getCurrentUser,
  updateUser,
  userStatus,
  casepaperStatus
} from '../controller/userController.js';

router.get('/current-user', getCurrentUser);
router.patch('/update-user/:id', validateUpdateUserInput, updateUser);
router.get('/user-status', userStatus); 
router.get('/casepaper-status', casepaperStatus); 
export default router;

