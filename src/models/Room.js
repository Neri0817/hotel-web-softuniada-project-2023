const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    rooms: {
        type: Number,
        required: true,
        min: 1,
        max: 8,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return value.startsWith('http://') || value.startsWith('https://')
            },
            message: 'URL is invalid, please try again'
        }
    },
    amenities: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    //reference to User database
    //we have to think about the architecture here, perhaps different DB for users and owners?
    // owner : {
    //     type: mongoose.Types.ObjectId,
    //     ref: user
    // }

    //reference to User database
    // bookedBy: {
    //     type: mongoose.Types.ObjectId,
    //     ref: User
    // }
});


const Room = mongoose.model('Room', roomSchema);

module.exports = Room;