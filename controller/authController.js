import User from '../models/User.js'
import { BadRequestError, NotFoundError, UnAuthenticatedError, NoMoreUsersAllowed } from '../errors/index.js'
import { StatusCodes } from 'http-status-codes'

import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
import { createJWT } from '../utils/tokenUtils.js';



//DOCUMENT NUMBER CHECKING
// import { MongoClient } from "mongodb";
// const uri = 'mongodb+srv://anish17vaidya:AnishVedApp@vedapp.iqupbgk.mongodb.net/'
// const client = new MongoClient(uri);






//REGISTER
const register = async (req, res, next) => {

    // const database = client.db("VEDAPP_SECOND");
    // const users = database.collection("users");
    // const estimate = await users.estimatedDocumentCount();
    // console.log('The number of documents are: ', estimate)
    // //if more than 3 documents in the users collection, then not allowed
    // if (estimate >= 3) {
    //     throw new NoMoreUsersAllowed('No more users allowed!')
    // }

    const docs = await User.countDocuments();
    if (docs >= 3) {
        throw new NoMoreUsersAllowed('No more users allowed!')
    }


    const { name, email, password } = req.body

    if (!name || !password || !email) {
        throw new BadRequestError('Please provide all values')
    }

    if(password.length < 4){
        throw new BadRequestError('Password size is less than 4 characters')
    }

    //check if user already exists in the DB using the email, if yes throw error
    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
        throw new BadRequestError('Email already in use');
    }

    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    //add user to the DB
    const user = await User.create(req.body);
    const token = createJWT({ userId: user._id });
    console.log(`Token: ${token}`);
    //res.status(StatusCodes.CREATED).json({ msg: 'user created' });

    res.status(StatusCodes.CREATED).json({
        user: {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            location: user.location,
        },
        token,
        location: user.location
    })

    // res.send('register user')
}



//LOGIN
const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Provide All Values!')
    }
    const user = await User.findOne({ email }).select('+password')
    if (!user) {
        throw new UnAuthenticatedError('Invalid Credentials!, user not found with given email')
    }
    // console.log(user);
    const isPasswordCorrect = await comparePassword(
        req.body.password,
        user.password
    );
    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('Invalid Credentials!')
    }

    const token = createJWT({ userId: user._id, role: user.role });
    //console.log(`Token of user: ${token}`);

    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production'
    })
    user.password = undefined
    res.status(StatusCodes.OK).json({ msg: `User ${user}logged in!` })
}


const logout = (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};


const updateUser = async (req, res) => {
    res.status(StatusCodes.OK).json({ msg: 'update user from auth controller' });
}

//UPDATEUSER
// const updateUser = async (req, res) => {

//     const { email, name, lastname, location } = req.body
//     if (!email || !name || !lastname || !location) {
//         throw new BadRequestError('Please Provide All Values!')
//     }

//     const user = await User.findOne({ _id: req.user.userId });

//     user.email = email
//     user.name = name
//     user.lastname = lastname
//     user.location = location

//     await user.save()

//     const token = user.createJWT()
//     res.status(StatusCodes.OK).json({
//         user, token, location: user.location
//     })



// }

export { register, login, logout, updateUser }