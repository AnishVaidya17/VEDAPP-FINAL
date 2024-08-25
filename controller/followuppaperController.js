import FollowupPaper from '../models/FollowupPaper.js'

import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'



//CREATE FOLLOWUPPAPPER
const createFollowupPaper = async (req, res) => {

    const { followup_date, followup_name } = req.body
    if (!followup_date) {
        throw new BadRequestError('Please Provide Date!')
    }
    else if (!followup_name) {
        throw new BadRequestError('Please Provide Name!')
    }

    req.body.createdBy = req.user.userId;

    const followuppaper = await FollowupPaper.create(req.body)
    res.status(StatusCodes.OK).json({ followuppaper })
    // res.send(`Create followuppaper`)
}



//GET ALL FOLLOWUPPAPERS
const getAllFollowupPapers = async (req, res) => {

    const { followupQueryName } = req.query
    console.log(followupQueryName);

    const queryObject = {
        createdBy: req.user.userId,
    };

    if (followupQueryName) {
        queryObject.$or = [
            { followup_name: { $regex: followupQueryName, $options: 'i' } },
            { followup_lastname: { $regex: followupQueryName, $options: 'i' } }
        ]
        console.log(queryObject);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const followuppapers = await FollowupPaper.find(queryObject).skip(skip).sort({ followup_date: 'desc' }).limit(limit)
    const totalFollowuppapers = await FollowupPaper.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalFollowuppapers / limit);
    res.status(StatusCodes.OK).json({ totalFollowuppapers: totalFollowuppapers, followuppapers })
    //res.send(`Get all Followuppapers`)
}


//GET A FOLLOWUPPAPER
const getFollowupPaper = async (req, res) => {
    const { id } = req.params;
    const followuppaper = await FollowupPaper.findById(id);
    if (!followuppaper) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `no followuppaper with id ${id}` });
    }
    res.status(StatusCodes.OK).json({ followuppaper });
}


// UPDATE FOLLOWUPPAPER
const updateFollowupPaper = async (req, res) => {
    const { id: followuppaperId } = req.params
    const { followup_name } = req.body
    if (!followup_name) {
        throw new BadRequestError('Please Provide Name of FP!')
    }

    //check if followuppaper exists in the DB
    const followuppaper = await FollowupPaper.findOne({ _id: followuppaperId })
    if (!followuppaper) {
        throw new NotFoundError(`No followuppaper with id: ${followuppaperId}`)
    }

    const followup_date = new Date().toJSON().slice(0, 10)
    if (req.body.followup_date) {
        req.body.followup_date = followup_date
    }

    //update
    const updatedFollowuppaper = await FollowupPaper.findOneAndUpdate({ _id: followuppaperId }, req.body, {
        new: true,
        runValidators: true,
    })
    res.status(StatusCodes.OK).json({ updatedFollowuppaper })

    // res.send('update followuppaper')
}



const deleteFollowupPaper = async (req, res) => {
    const { id: followuppaperId } = req.params

    //check if followuppaper exists in the DB
    const followuppaper = await FollowupPaper.findOne({ _id: followuppaperId })
    if (!followuppaper) {
        throw new NotFoundError(`No followuppaper with id: ${followuppaperId}`)
    }

    // //Check permissions 
    // checkPermissions(req.user, followuppaper.createdBy)

    await followuppaper.deleteOne({ _id: followuppaperId })

    res.status(StatusCodes.OK).json({ msg: 'Success, Followuppaper Removed!' })

    // res.send('delete followuppaper')

}


export { createFollowupPaper, getAllFollowupPapers, getFollowupPaper, updateFollowupPaper, deleteFollowupPaper }