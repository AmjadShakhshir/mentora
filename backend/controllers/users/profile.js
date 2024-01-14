import asyncHandler from 'express-async-handler';

import UserRepo from '../../models/userModel.js';
import { errorHandler } from '../../middleware/errorMiddleware.js';
import usersService from '../../services/usersService.js';

// @desc Get user profile
// @access Private
// route GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    };

    res.status(200).json(user);
});

// @desc Update user profile
// @access Private
// route PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res, next) => {
    const user = await UserRepo.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = await usersService.setPassword(user, req.body.password);
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        });
    } else {
        res.status(404);
        next(errorHandler('User not found', 404));
    }
});

export {
    getUserProfile,
    updateUserProfile
};