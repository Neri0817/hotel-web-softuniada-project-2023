const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    from: {
        type: Date,
        required: true,
    },
    to: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
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