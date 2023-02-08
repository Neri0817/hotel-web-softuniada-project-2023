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
        default: 'available',
        enum: ['available', 'approved', 'requested', 'cancelled']
    },
    roomId: {
        type: mongoose.Types.ObjectId,
        ref: 'Room'
    },
    reservationOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
})

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;