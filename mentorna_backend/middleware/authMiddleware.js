const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // GET TOKEN FROM HEADER
            token = req.headers.authorization.split(' ')[1]

            // DECODE TOKEN
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // FIND USER BY ID from DECODED TOKEN
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { protect }