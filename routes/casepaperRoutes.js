import express from 'express'
import { createCasepaper, getAllCasepapers, deleteCasepaper, updateCasepaper, getCasepaper, getHighestCasepaperNumber } from '../controller/casepaperController.js'

const router = express.Router()

router.route('/').post(createCasepaper).get(getAllCasepapers)
router.route('/add-casepaper').get(getHighestCasepaperNumber)
router.route('/:id').delete(deleteCasepaper).patch(updateCasepaper).get(getCasepaper)



export default router