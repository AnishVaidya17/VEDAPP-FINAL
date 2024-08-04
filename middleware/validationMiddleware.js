import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/index.js';
import mongoose from 'mongoose';
import { param } from 'express-validator';
// import Casepaper from '../models/Casepaper';
import User from '../models/User.js';


// export const validateIdParam = withValidationErrors([
//   param('id').custom(async (value, { req }) => {
//     const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
//     if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id');
//     const job = await Casepaper.findById(value);
//     if (!job) throw new NotFoundError(`no casepaper with id ${value}`);
//     const isOwner = req.user.userId === job.createdBy.toString();
//     if (!isOwner)
//       throw UnauthorizedError('not authorized to access this route');
//   }),
// ]);


const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route');
        }

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateTest = withValidationErrors([
  body('name')
    .notEmpty()
    .withMessage('name is required')
    .isLength({ min: 3, max: 50 })
    .withMessage('name must be between 3 and 50 characters long')
    .trim(),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new Error('email already exists');
      }
    }),
  body('lastname').notEmpty().withMessage('last name is required'),
  body('location').notEmpty().withMessage('location is required'),
]);

