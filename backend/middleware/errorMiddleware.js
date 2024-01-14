const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404); // 404 is not found
    next(error);
}

const errorHandler = (err, req, res, next) => {
    // Sometimes we get a 200 status code even though there is an error
    // We want to make sure we get a 500 status code if there is an error
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 400; // 400 is bad request
        message = 'resource not found';
    } else if (statusCode === 401 ) {
        message = 'Not authorized, token failed';
    } else if (statusCode === 500) {
        message = 'Internal server error';
    } else if (statusCode === 404) {
        message = 'Not found';
    } else if (statusCode === 400) {
        message = 'Bad request';
    } else if (err.name === 'ValidationError') {
        statusCode = 400;
        message = Object.values(err.errors).map(val => val.message).join(', ');
    } else if (err.name === 'JsonWebTokenError') {
        statusCode = 401; // 401 is unauthorized
        message = 'Not authorized, token failed';
    } else if (err.name === 'TokenExpiredError') {
        statusCode = 401;
        message = 'Not authorized, token expired';
    } 

    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
}

export {
    notFound,
    errorHandler
};