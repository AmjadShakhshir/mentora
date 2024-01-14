import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';
import { errorHandler } from './errorMiddleware.js';

const protect = asyncHandler(async (req, res, next) => {
    let token;
    
    if (req.headers.cookie) {
        token = req.headers.cookie.split('=')[1];
    }

    if (!token) {
        res.status(401);
        next(errorHandler('Not authorized, no token', 401));
    } else {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401);
            next(errorHandler('Not authorized, token failed', 401));
        }
    }
});

const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401);
        next(errorHandler('Not authorized as an admin', 401));
    }
};

export {
    protect,
    admin
};