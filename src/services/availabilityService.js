const Reservation = require('../models/Reservation')

exports.checkAvailability = async(startDate, endDate) => {



    try {
        const resultArray = Reservation.find({date: { $gte: startDate, $lte: endDate} }, { status: {$nin: ['approved', 'requested']}}).toArray();
        return resultArray;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
    
}
