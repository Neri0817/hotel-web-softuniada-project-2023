const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['approved', 'requested', 'cancelled']
    },
    roomId: {
        type: mongoose.Types.ObjectId,
        ref: 'Room'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;