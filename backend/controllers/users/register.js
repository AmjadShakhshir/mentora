import asyncHandler from 'express-async-handler';

import { errorHandler } from '../../middleware/errorMiddleware.js';
import usersService from '../../services/usersService.js';
import generateToken from '../../utils/generateToken.js';

// @desc Register a new user
// @access Public
// route POST /api/users/register
const registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password, role } = req.body;

    const user = await usersService.signUp(name, email, password, role);

    if (!user) {
        res.status(400);
        next(errorHandler('User already exists', 400));
    }

    generateToken(res, user._id);
    res.status(200).json({
        message: 'Register user'
    });
});

export {
    registerUser
};