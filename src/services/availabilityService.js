const AvailabilityCalender = require('../models/Availability');

exports.checkAvailability = async(startDate, endDate) => {
    try {
        const resultArray = AvailabilityCalender.find({date: { $gte: startDate, $lte: endDate} }, { status: 'available'}).toArray();
        return resultArray;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
    
}
