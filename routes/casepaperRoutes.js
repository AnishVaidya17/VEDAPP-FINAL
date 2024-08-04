import express from 'express'
import { createCasepaper, getAllCasepapers, deleteCasepaper, updateCasepaper, getCasepaper } from '../controller/casepaperController.js'

const router = express.Router()

router.route('/').post(createCasepaper).get(getAllCasepapers)
router.route('/:id').delete(deleteCasepaper).patch(updateCasepaper).get(getCasepaper)



export default router