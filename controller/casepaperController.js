import { StatusCodes } from 'http-status-codes';
import Casepaper from '../models/Casepaper.js';
import BadRequestError from '../errors/bad-request.js';
import NotFoundError from '../errors/not-found.js';


//GET CASEPAPERS
export const getAllCasepapers = async (req, res) => {

    const { queryName } = req.query
    console.log(queryName);

    const queryObject = {
        createdBy: req.user.userId,
    };

    if (queryName) {
        queryObject.$or = [
            { name: { $regex: queryName, $options: 'i' } },
            { middlename: { $regex: queryName, $options: 'i' } }
        ]
        console.log(queryObject);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const casepapers = await Casepaper.find(queryObject).skip(skip).sort({ date: 'desc' }).limit(limit)

    const totalCasepapers = await Casepaper.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalCasepapers / limit);

    res.status(StatusCodes.OK).json({ totalCasepapers: totalCasepapers, numOfPages: numOfPages,  currentPage: page, casepapers })

}

//GET SINGLE CASEPAPER
export const getCasepaper = async (req, res) => {
    const { id } = req.params;
    const casepaper = await Casepaper.findById(id);
    if (!casepaper) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `no casepaper with id ${id}` });
    }
    res.status(200).json({ casepaper });
};



//CREATE CASEPAPER
export const createCasepaper = async (req, res) => {

    const { name } = req.body
    if (!name) {
        throw new BadRequestError('Please Provide Name!')
    }

    req.body.createdBy = req.user.userId;

    const casepaper = await Casepaper.create(req.body);
    res.status(StatusCodes.CREATED).json({ casepaper })
}




//UPDATE CASEPAPER
export const updateCasepaper = async (req, res) => {
    const { id: casepaperId } = req.params
    const { name } = req.body
    if (!name) {
        throw new BadRequestError('Please Provide Name of casepaper!')
    }

    //check if casepaper exists in the DB
    const casepaper = await Casepaper.findOne({ _id: casepaperId })
    if (!casepaper) {
        throw new NotFoundError(`No casepaper with id: ${casepaperId}`)
    }

    //Check permissions 
    // checkPermissions(req.user, casepaper.createdBy)

    //update
    const updatedCasepaper = await Casepaper.findOneAndUpdate({ _id: casepaperId }, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(StatusCodes.OK).json({ updatedCasepaper })
}



//DELETE CASEPAPER
export const deleteCasepaper = async (req, res) => {
    const { id: casepaperId } = req.params

    //check if jobs exists in the DB
    const casepaper = await Casepaper.findOne({ _id: casepaperId })
    if (!casepaper) {
        throw new NotFoundError(`No casepaper with id: ${casepaperId}`)
    }
    //Check permissions 
    // checkPermissions(req.user, casepaper.createdBy)

    await casepaper.deleteOne({ _id: casepaperId })

    res.status(StatusCodes.OK).json({ msg: 'Success, Casepaper Removed!' })
}
