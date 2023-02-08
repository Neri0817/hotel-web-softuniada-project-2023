const Reservation = require('../models/Reservation')

exports.checkAvailability = async(startDate, endDate) => {

//.toArray();

    try {
        // const resultArray = Reservation.find({date: { $gte: startDate, $lte: endDate} }, { status: { $ne: "requested" }}, (error, results))


        let resultArray = Reservation.find({ status: { $ne: "approved" }, status: { $ne: "requested" } }, (error, results) => {
            if (error) {
             console.log(`This is the ${error}`);
            } else {
                // results = results.toArray();
                console.log(results);
                console.log('Print here-------------------------');
             console.log(resultArray); //this returns a query
            }
          });
          



        return resultArray;
    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
    
}
