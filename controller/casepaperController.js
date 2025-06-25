import { StatusCodes } from 'http-status-codes';
import Casepaper from '../models/Casepaper.js';
import BadRequestError from '../errors/bad-request.js';
import NotFoundError from '../errors/not-found.js';


//GET CASEPAPERS
export const getAllCasepapers = async (req, res) => {

    // const { queryFirstName, queryMiddleName, queryLastName } = req.query
    const queryFirstName = req.query.queryFirstName ? req.query.queryFirstName.trim() : '';
    const queryMiddleName = req.query.queryMiddleName ? req.query.queryMiddleName.trim() : '';
    const queryLastName = req.query.queryLastName ? req.query.queryLastName.trim() : '';


    const queryObject = {
        createdBy: req.user.userId,
    };

    const queryConditions = [];

    if (queryFirstName) {
        queryConditions.push({ name: { $regex: queryFirstName, $options: 'i' } });
    }
    if (queryMiddleName) {
        queryConditions.push({ middlename: { $regex: queryMiddleName, $options: 'i' } });
    }
    if (queryLastName) {
        queryConditions.push({ lastname: { $regex: queryLastName, $options: 'i' } });
    }

    if (queryConditions.length > 0) {
        console.log(queryConditions);
        queryObject.$and = queryConditions;
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const casepapers = await Casepaper.find(queryObject).skip(skip).sort({ date: 'desc' })

    const totalCasepapers = await Casepaper.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalCasepapers / limit);

    res.status(StatusCodes.OK).json({ totalCasepapers: totalCasepapers, numOfPages: numOfPages, currentPage: page, casepapers })

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


//GET HIGHEST CASEPAPER NUMBER
export const getHighestCasepaperNumber = async (req, res) => {
    const casepapers = await Casepaper.findOne({}).sort({ casepaperNumber: -1 })
    let casepaper = casepapers
    if (casepapers) {
        res.status(StatusCodes.OK).json({ casepaper })
    }
    else {
        res.status(StatusCodes.OK).json({ casepaper: 0 })
    }
};



//CREATE CASEPAPER
export const createCasepaper = async (req, res) => {

    const { name } = req.body
    if (!name) {
        throw new BadRequestError('Please Provide First Name!')
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
