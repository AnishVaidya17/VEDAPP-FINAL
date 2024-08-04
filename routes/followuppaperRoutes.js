import express from 'express'
import { createFollowupPaper, getAllFollowupPapers, updateFollowupPaper, deleteFollowupPaper, getFollowupPaper } from '../controller/followuppaperController.js'


const router = express.Router()

router.route('/').post(createFollowupPaper).get(getAllFollowupPapers)
router.route('/:id').delete(deleteFollowupPaper).patch(updateFollowupPaper).get(getFollowupPaper)


export default router