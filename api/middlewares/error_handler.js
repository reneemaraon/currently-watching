const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err.message)
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, please try again later.'
    }

    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }

    if (err.name === 'ValidationError') {
        customError.statusCode = StatusCodes.BAD_REQUEST
        customError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(' ');
    }

    if (err.name === 'CastError') {
        customError.msg = `No item found with id ${err.value}.`;
        customError.statusCode = StatusCodes.NOT_FOUND;
    }

    if (err.code && err.code==11000) {
        customError.statusCode = StatusCodes.BAD_REQUEST;
        customError.msg = `Duplicate value entered for ${Object.keys(
            err.keyValue
        )} field. Please choose another value.`;
    }

    return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;