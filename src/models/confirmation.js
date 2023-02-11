const mongoose = require('mongoose')

const confirmationSchema = new mongoose.Schema({
    roomsCount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    reservationOwner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    reservation: {
            type: mongoose.Types.ObjectId,
            ref: 'Reservation'
        }
});

const Confirmation = mongoose.model('Confirmation', confirmationSchema);

module.exports = Confirmation;