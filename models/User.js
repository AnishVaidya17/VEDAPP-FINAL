import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 40,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'lastname',
    },
    location: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'mycity',
    },

    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
        select: false,
    },
    avatar: String,
    avatarPublicId: String,
})


// UserSchema.pre('save', async function () {
//     // console.log(this.modifiedPaths());

//     if (!this.isModified('password')) {
//         return
//     }

//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })


// UserSchema.methods.createJWT = function () {
//     // console.log(this);
//     return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
//     // return jwt.sign({ userId: this._id }, 'anish', { expiresIn: '1d' })
// }

// //to check if the password matches during logging in
// UserSchema.methods.comparePassword = async function (candidatePassword) {
//     const isMatch = await bcrypt.compare(candidatePassword, this.password)
//     return isMatch
// }

export default mongoose.model('User', UserSchema)