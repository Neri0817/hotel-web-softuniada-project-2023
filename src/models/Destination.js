//this is the room Schema

const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    guestCapacity: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^http[s]?:\/\//g, 'Invalid URL!']
    },
    amenities: {
        type: String, 
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
     destinationOwner : {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }

});


const Destination = mongoose.model('Destination', destinationSchema);


module.exports = Destination;