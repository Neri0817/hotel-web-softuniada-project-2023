//this is the room Schema

const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rooms: {
        type: Number,
        required: true,
        min: 1,
        max: 8,
    },
    guestCapacity: {
        type: Number,
        required: true,
    },
    beds: {
        type: Number,
        required: true,
        min: 1,
        max: 8,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
      // amenities: {
    //     type: String,  //we need to think if this should be an array 
    //     required: true,
    // },
      // destination: {
    //     type: String,
    //     required: true,
    // },
    // guestCapacity: {
    //     type: Number,
    //     required: true,
    // },

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


const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;