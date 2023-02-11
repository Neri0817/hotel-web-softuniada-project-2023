const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    destination: {
        type: mongoose.Types.ObjectId,
        ref: 'Destinations',
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    guestsCount: {
        type: Number,
        required: true
    },
    reservationOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
    // status: {
    //     type: String,
    //     required: true,
    //     default: 'available',
    //     enum: ['available', 'approved', 'requested', 'cancelled']
    // },
    // roomId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Destination'
    // }
})

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;