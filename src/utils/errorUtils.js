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

exports.mapErrors = (err) => {
    if (Array.isArray(err)) {
        return err
    }
    else if(err.name == 'ValidationError'){
        return Object.values(err.errors).map(e => ({msg: e.message}))
    }else if(typeof err.message == 'string'){


        
        return [{msg:err.message}]
    }else{
        return [{msg:'Request error'}]
    }


}
