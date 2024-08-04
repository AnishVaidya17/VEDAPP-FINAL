import { StatusCodes } from 'http-status-codes';
import User from '../models/User.js';
import BadRequestError from '../errors/bad-request.js';
import Casepaper from '../models/Casepaper.js';


//get current user
export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    res.status(StatusCodes.OK).json({ user });
};

//UPDATE USER
export const updateUser = async (req, res) => {

    const { email, name, lastname, location } = req.body
    if (!email || !name || !lastname || !location) {
        throw new BadRequestError('Please Provide All Values!')
    }

    // console.log(email);
    // const user = User.findOne({ email: email })
    // if (user && user._id == req.user.userId){
    //     throw new BadRequestError('User Already Exists! || User with this email already exists')
    // }

    const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body);
    console.log(updatedUser);
    res.status(StatusCodes.OK).json({ msg: 'user updated' });
};

//USER STATUS
export const userStatus = async (req, res, next) => {
    const user_docs = await User.countDocuments()
    res.status(StatusCodes.OK).json(user_docs)
}

//CASEPAPER STATUS
export const casepaperStatus = async (req, res, next) => {
    const casepaper_docs = await Casepaper.countDocuments({ createdBy: req.user.userId })
    res.status(StatusCodes.OK).json(casepaper_docs)
}