const Reservation = require('../models/Reservation')

exports.checkAvailability = async (startDate, endDate) => {
    try {
      let results =  await Reservation.find({
        date: { $gte: startDate, $lte: endDate },
        status: { $ne: "approved" }
      });
      return results;

    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };


