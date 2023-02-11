const mongoose = require('mongoose');

function getFirstMongooseError(error) {
    // const errors = Object.keys(error.errors).map(errorName => error.errors[errorName].message);
    // return errors[0];
    const firstError = Object.values(error.errors)[0].message;
    return firstError;
}

exports.getErrorMessage = (error) => {

    console.log(error instanceof Error);
    // console.log(error instanceof mongoose.MongooseError); 

    switch (error.name) {
        case 'Error':
        return error.message;
        case 'ValidationError':
        return getFirstMongooseError(error);
        default:
            return error.message
    }

}