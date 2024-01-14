import asyncHandler from 'express-async-handler';

import { errorHandler } from '../../middleware/errorMiddleware.js';
import usersService from '../../services/usersService.js';
import generateToken from '../../utils/generateToken.js';

// @desc Logout user
// @access Public
// route POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('token', '', {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).json({
        message: 'User logged out'
    });
});

// @desc Auth user/set token
// @access Public
// route POST /api/users/auth
const authUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await usersService.signIn(email, password);

    if (!user) {
        res.status(401);
        next(errorHandler('Invalid email or password', 401));
    }

    if (user) {
        generateToken(res, user._id);
    }
    res.status(201).json({
        message: 'Auth user',
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });
});

export {
    logoutUser,
    authUser
};